import { defineCollection, z } from "astro:content";

export const collections = {
	topics: defineCollection({
		type: "content",
		schema: z.object({
			release: z.boolean().default(false),
			title: z.string().default("Untitled"),
			description: z.string().optional(),
		}),
	}),
};
