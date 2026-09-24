// worker/index.ts
var worker = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.hostname === "tokengeekcoin.com") {
      url.hostname = "www.tokengeekcoin.com";
      return Response.redirect(url.toString(), 301);
    }
    try {
      if (env.ASSETS) {
        const response = await env.ASSETS.fetch(request);
        if (response.status !== 404) {
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
    }
    const isNavigation = request.method === "GET" && (request.headers.get("accept")?.includes("text/html") || !url.pathname.includes("."));
    if (isNavigation && env.ASSETS) {
      try {
        const indexRequest = new Request(new URL("/", request.url), request);
        return await env.ASSETS.fetch(indexRequest);
      } catch {
      }
    }
    return new Response("Not Found", { status: 404 });
  }
};
var index_default = worker;
export {
  index_default as default
};
