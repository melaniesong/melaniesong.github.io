import { defineCollection, z } from "astro:content";

const navItem = z.object({
  id: z.string(),
  label: z.string(),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    /** One-line: what it is + what it does */
    descriptor: z.string().optional(),
    /** @deprecated Use descriptor */
    summary: z.string().optional(),
    problem: z.string().optional(),
    /** @deprecated Use problem */
    intro: z.string().optional(),
    impact: z.string().optional(),
    role: z.string().optional(),
    timeline: z.string().optional(),
    teamSize: z.string().optional(),
    /** @deprecated Use teamSize */
    team: z.string().optional(),
    responsibilities: z.string().optional(),
    client: z.string().optional(),
    tools: z.array(z.string()).optional(),
    skills: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    nav: z.array(navItem).optional(),
    outcomes: z.array(z.string()).optional(),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      )
      .optional(),
    links: z
      .object({
        live: z.string().optional(),
        repo: z.string().optional(),
      })
      .optional(),
    /** Set true on template files to exclude from the site */
    draft: z.boolean().optional(),
  }),
});

export const collections = { projects };
