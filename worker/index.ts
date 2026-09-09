/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === "tokengeekcoin.com") {
      url.hostname = "www.tokengeekcoin.com";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname.startsWith("/_next/static/")) {
      return env.ASSETS.fetch(request);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    const isPageNavigation = request.method === "GET"
      && request.headers.get("accept")?.includes("text/html")
      && !request.headers.get("rsc")
      && !url.pathname.startsWith("/api/");
    const edgeCache = typeof caches !== "undefined" ? caches.default : null;
    const cacheKey = isPageNavigation && edgeCache ? new Request(url.toString(), {method:"GET"}) : null;
    if (cacheKey && edgeCache) {
      const cached = await edgeCache.match(cacheKey);
      if (cached) return cached;
    }

    const response = await handler.fetch(request, env, ctx);
    const headers = new Headers(response.headers);
    const isStaticAsset = /\.(?:avif|css|gif|ico|jpe?g|js|png|svg|webp|woff2?)$/i.test(url.pathname);

    if (isStaticAsset && response.ok) {
      headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
      headers.set("Cloudflare-CDN-Cache-Control", "public, max-age=604800");
    }

    if (isPageNavigation && response.ok) {
      headers.set("Cache-Control", "public, max-age=60, stale-while-revalidate=600");
      headers.set("Cloudflare-CDN-Cache-Control", "public, max-age=300, stale-while-revalidate=3600");
    }

    const finalResponse = new Response(response.body, { status: response.status, statusText: response.statusText, headers });
    if (cacheKey && edgeCache && finalResponse.ok) ctx.waitUntil(edgeCache.put(cacheKey, finalResponse.clone()));
    return finalResponse;
  },
};

export default worker;
