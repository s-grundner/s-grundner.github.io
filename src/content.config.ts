import { defineCollection, z } from "astro:content";

export const collections = {
	topics: defineCollection({
		type: "content",
		schema: z.object({
			release: z.boolean().default(false),
			title: z.string().default("Untitled"),
			alias: z.union([z.array(z.string()), z.null(), z.undefined()]).transform((t) => t || []),
			description: z.string().optional(),
			tags: z.union([z.array(z.string()), z.null(), z.undefined()]).transform((t) => t || []),
		}),
	}),
};
