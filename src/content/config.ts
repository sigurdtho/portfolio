import { defineCollection, z } from 'astro:content';

// ── Blog collection ────────────────────────────────────────────────────────
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category:    z.string().default('General'),
    tags:        z.array(z.string()).default([]),
    draft:       z.boolean().default(false),
    // Optional hero image (relative path from /public)
    heroImage:   z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
