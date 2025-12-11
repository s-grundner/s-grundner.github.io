import { defineCollection, reference, z } from "astro:content";

export const collections = {
	topics: defineCollection({
		type: "content",
		schema: z.object({
			release: z.boolean().default(false),
			title: z.string().default("Untitled"),
			topic: z.string().default("General"),
			description: z.string().optional(),
		}),
	}),
};
