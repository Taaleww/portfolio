import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(),
      description: z.string(),
      image: z.union([image(), z.string()]), // Support both local images and remote URLs
      overviewImage: z.union([image(), z.string()]), // Support both local images and remote URLs
      liveUrl: z.string().url().optional(),
      repoUrl: z.string().url().optional(),
      techStack: z.array(z.string()),
      featured: z.boolean().default(false),
      order: z.number().default(0),

      // New fields for redesign
      client: z.string().optional(),
      service: z.string().optional(),
      challenges: z.string().optional(),
      solutions: z.string().optional(),
      outcome: z.string().optional(),
      heroMockup: z.union([image(), z.string()]).optional(),
      otherImages: z.array(z.union([image(), z.string()])).optional(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
