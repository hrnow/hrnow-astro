// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import rehypeShiki from "@shikijs/rehype";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://hrnow.asia",
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    mdx({
      syntaxHighlight: false,
      rehypePlugins: [[rehypeShiki, { theme: "one-dark-pro" }]],
    }),
    sitemap(),
  ],
  adapter: node({
    mode: "standalone",
  }),
});
