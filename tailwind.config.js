/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Primary

				Light_red: "hsl(0, 100%, 67%)",
				Orangey_yellow: "hsl(39, 100%, 56%)",
				Green_teal: "hsl(166, 100%, 37%)",
				Cobalt_blue: "hsl(234, 85%, 45%)",

				// Gradients

				Light_slate_blue_background: "hsl(252, 100%, 67%)",
				Light_royal_blue_background: "hsl(241, 81%, 54%)",

				Violet_blue_circle: "hsla(256, 72%, 46%, 1)",
				Persian_blue_circle: "hsla(241, 72%, 46%, 0)",

				// Neutral

				White: "hsl(0, 0%, 100%)",
				Pale_blue: "hsl(221, 100%, 96%)",
				Light_lavender: "hsl(241, 100%, 89%)",
				Dark_gray_blue: "hsl(224, 30%, 27%)",
			},
		},
	},
	plugins: [],
};
