import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    team: z.string().optional(),
    timeline: z.string().optional(),
    tools: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(), // e.g. "/projects/term/cover.jpg"
  }),
});

export const collections = { projects };
