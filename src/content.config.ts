import { defineCollection, z } from "astro:content";

export const collections = {
	topics: defineCollection({
		type: "content",
		schema: z.object({
			release: z.boolean().default(false),
			title: z.string().default("Untitled"),
			description: z.string().optional(),
			aliases: z.union([z.array(z.string()), z.null(), z.undefined(), z.string()]).transform((t) => t || []),
			tags: z.union([z.array(z.string()), z.null(), z.undefined()]).transform((t) => t || []),
		}),
	}),
};
