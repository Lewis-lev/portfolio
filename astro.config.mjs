import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://lewis-lev.github.io",
  base: "/portfolio",
  trailingSlash: "never",
  integrations: [sitemap()],
});
