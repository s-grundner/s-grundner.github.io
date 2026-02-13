import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	const topics = await getCollection('topics');

	const list = topics.map((topic) => ({
		frontmatter: {
			title: topic.data.title,
			alias: topic.data.alias,
			description: topic.data.description,
			tags: topic.data.tags,
		},
		content: topic.body,
		pathname: `/topics/${topic.slug}`,
	}));

	return new Response(JSON.stringify({ list }), {
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
