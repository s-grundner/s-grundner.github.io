import { defineConfig } from 'astro/config';

import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkMath from 'remark-math';
import remarkCallout from "@r4ai/remark-callout";

import rehypeMathjax from 'rehype-mathjax';
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://s-grundner.github.io',
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		rehypePlugins: [
			rehypeAstroRelativeMarkdownLinks,
			[rehypeMathjax, {}]
		],
		remarkPlugins: [
			remarkMath,
			remarkParse,
			remarkStringify,
			remarkCallout,
		],
	},
	shikiConfig: {
		themes: {
			light: 'github-light',
			dark: 'github-dark',
		},
	},
});

