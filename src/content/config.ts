import { defineCollection, z } from 'astro:content';

const exports = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    h1: z.string(),
    keywords: z.array(z.string()),
    heroImage: z.string(),
    heroAlt: z.string(),
    image2: z.string().optional(),
    image2Alt: z.string().optional(),
    image3: z.string().optional(),
    image3Alt: z.string().optional(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    origin: z.string(),
    minOrder: z.string(),
    primaryMarket: z.string(),
    breadcrumbName: z.string(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    category: z.string(),
    author: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string(),
    heroAlt: z.string(),
    image2: z.string().optional(),
    image2Alt: z.string().optional(),
    image3: z.string().optional(),
    image3Alt: z.string().optional(),
    readingTime: z.string(),
    breadcrumbName: z.string(),
  }),
});

export const collections = { exports, blog };
