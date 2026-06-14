import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://marvin-404.github.io",
  base: "/maison_steff",
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
});
