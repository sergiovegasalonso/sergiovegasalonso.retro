// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://sergiovegasalonso.netlify.app/",
  integrations: [sitemap()],
});