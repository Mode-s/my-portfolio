import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { projects };