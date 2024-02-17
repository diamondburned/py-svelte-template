import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    files: {
      assets: "frontend/static",
      hooks: {
        client: "frontend/hooks.client",
        server: "frontend/hooks.server",
        universal: "frontend/hooks",
      },
      lib: "frontend/lib",
      params: "frontend/params",
      routes: "frontend/routes",
      serviceWorker: "frontend/service-worker",
      appTemplate: "frontend/app.html",
      errorTemplate: "frontend/error.html",
    },
  },
};

export default config;
