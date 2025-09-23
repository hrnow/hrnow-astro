import { defineCollection } from "astro:content";
import { z } from "zod";

export const prerender = false;

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    slug: z.string().optional(),
    thumbnail: z.string().optional(),
    description: z.string(),
    published: z.boolean(),
    tags: z.array(z.string()),
    date: z.date(),
  }),
});

export const collections = { blog };
