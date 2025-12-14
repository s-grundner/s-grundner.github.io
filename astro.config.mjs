import { defineConfig } from 'astro/config';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkMath from 'remark-math';
import remarkCallout from "@r4ai/remark-callout";
import rehypeMathjaxChtml from 'rehype-mathjax/chtml';
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		rehypePlugins: [
			rehypeAstroRelativeMarkdownLinks,
			[rehypeMathjaxChtml, {
				chtml: {
					fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'
				}
			}]
		],
		remarkPlugins: [
			remarkMath,
			remarkParse,
			remarkStringify,
			remarkCallout
		],
	},
});

