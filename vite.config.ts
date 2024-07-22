import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { flatRoutes } from "remix-flat-routes"
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*"],
      routes: async defineRoutes => {
        return flatRoutes('routes', defineRoutes)
      },
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    open: true,
    port: 3000,
  }
});
