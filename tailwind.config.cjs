/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'text': '#1d1211',
				'warmer-text': '#3a2a27',
				'background': '#f9f1db',
				'more-background': '#f2e9cd',
				'primary': '#3857ad',
				'secondary': '#e6d8b2',
				'accent': '#324e9a',
			},
		},
	},
	plugins: [],
}
