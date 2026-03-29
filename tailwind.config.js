export default {
	content: [
		"./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				callout: {
					info: {
						bg: "color-mix(in srgb, var(--color-ctp-sapphire) 10%, transparent);",
						border: "var(--color-ctp-sapphire)",
						text: "var(--color-ctp-sapphire)",
					},
					success: {
						bg: "color-mix(in srgb, var(--color-ctp-green) 10%, transparent);",
						border: "var(--color-ctp-green)",
						text: "var(--color-ctp-green)",
					},
					warning: {
						bg: "color-mix(in srgb, var(--color-ctp-peach) 10%, transparent);",
						border: "var(--color-ctp-peach)",
						text: "var(--color-ctp-peach)",
					},
					danger: {
						bg: "color-mix(in srgb, var(--color-ctp-red) 10%, transparent);",
						border: "var(--color-ctp-red)",
						text: "var(--color-ctp-red)",
					},
					important: {
						bg: "color-mix(in srgb, var(--color-ctp-teal) 10%, transparent);",
						border: "var(--color-ctp-teal)",
						text: "var(--color-ctp-teal)",
					},
					question: {
						bg: "color-mix(in srgb, var(--color-ctp-rosewater) 10%, transparent);",
						border: "var(--color-ctp-rosewater)",
						text: "var(--color-ctp-rosewater)",
					},
					example: {
						bg: "color-mix(in srgb, var(--color-ctp-mauve) 10%, transparent);",
						border: "var(--color-ctp-mauve)",
						text: "var(--color-ctp-mauve)",
					},
					def: {
						bg: "color-mix(in srgb, var(--color-ctp-mauve) 10%, transparent);",
						border: "var(--color-ctp-mauve)",
						text: "var(--color-ctp-mauve)",
					},
					theorem: {
						bg: "color-mix(in srgb, var(--color-ctp-flamingo) 10%, transparent);",
						border: "var(--color-ctp-flamingo)",
						text: "var(--color-ctp-flamingo)",
					},
					hint: {
						bg: "color-mix(in srgb, var(--color-ctp-yellow) 10%, transparent);",
						border: "var(--color-ctp-yellow)",
						text: "var(--color-ctp-yellow)",
					},
					neutral: {
						bg: "color-mix(in srgb, var(--color-ctp-lavender) 10%, transparent);",
						border: "var(--color-ctp-lavender)",
						text: "var(--color-ctp-lavender)",
					},
				},
			},
		},
	},
};