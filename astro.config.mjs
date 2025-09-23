// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import rehypeShiki from "@shikijs/rehype";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    mdx({
      syntaxHighlight: false,
      rehypePlugins: [[rehypeShiki, { theme: "one-dark-pro" }]],
    }),
  ],

  adapter: netlify(),
});