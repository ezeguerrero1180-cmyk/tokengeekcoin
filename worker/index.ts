interface Env {
  ASSETS: {
    fetch: (request: Request | string) => Promise<Response>;
  };
  DB?: unknown;
  IMAGES?: unknown;
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Canonical domain redirect: tokengeekcoin.com -> www.tokengeekcoin.com
    if (url.hostname === "tokengeekcoin.com") {
      url.hostname = "www.tokengeekcoin.com";
      return Response.redirect(url.toString(), 301);
    }

    // Try serving static asset directly from ASSETS binding
    try {
      if (env.ASSETS) {
        const response = await env.ASSETS.fetch(request);
        if (response.status !== 404) {
          // Add cache headers for static assets
          const isStatic = /\.(?:avif|css|gif|ico|jpe?g|js|png|svg|webp|woff2?|json)$/i.test(url.pathname);
          if (isStatic && response.ok) {
            const headers = new Headers(response.headers);
            headers.set("Cache-Control", "public, max-age=31536000, immutable");
            return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
          }
          return response;
        }
      }
    } catch {
      // Pass through on asset lookup error
    }

    // SPA fallback: for any HTML navigation request or route, serve index.html
    const isNavigation = request.method === "GET" && 
      (request.headers.get("accept")?.includes("text/html") || !url.pathname.includes("."));

    if (isNavigation && env.ASSETS) {
      try {
        const indexRequest = new Request(new URL("/", request.url), request);
        return await env.ASSETS.fetch(indexRequest);
      } catch {
        // Continue to fallback
      }
    }

    return new Response("Not Found", { status: 404 });
  },
};

export default worker;
