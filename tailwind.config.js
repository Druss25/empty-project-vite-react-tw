/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				accent: "#9b9b9b",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
				},
			},
		},
	},
	plugins: [],
};
