import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    status: z.string().optional(),
    tools: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects,
};
