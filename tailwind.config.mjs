/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				icterine: {
					DEFAULT: "#f4ff52",
					100: "#3f4300",
					200: "#7e8700",
					300: "#bcca00",
					400: "#efff0e",
					500: "#f4ff52",
					600: "#f6ff74",
					700: "#f8ff97",
					800: "#faffba",
					900: "#fdffdc",
				},
				aquamarine: {
					DEFAULT: "#0ff4c6",
					100: "#023228",
					200: "#056350",
					300: "#079579",
					400: "#09c7a1",
					500: "#0ff4c6",
					600: "#40f6d2",
					700: "#70f8dd",
					800: "#a0fbe8",
					900: "#cffdf4",
				},
				onyx: {
					DEFAULT: "#313638",
					100: "#0a0b0b",
					200: "#141617",
					300: "#1e2122",
					400: "#282c2e",
					500: "#313638",
					600: "#576164",
					700: "#7e8a8f",
					800: "#a9b1b4",
					900: "#d4d8da",
				},
			},
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
				serif: ["Playfair Display Variable", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
