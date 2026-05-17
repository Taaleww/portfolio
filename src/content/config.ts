import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    techStack: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = {
  projects: projectsCollection,
};
