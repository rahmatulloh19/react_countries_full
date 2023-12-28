/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				text: {
					onLight: "#111517",
					onDark: "#fff",
				},
				bg: {
					items: "#fff",
					onDark: "#2b3844",
				},
			},
			spacing: {
				0.875: "14px",
				7.5: "30px",
				"75px": "75px",
			},
			screens: {
				sm: "375px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
			borderRadius: {
				5: "5px",
			},
			container: {
				center: true,
				padding: "24px",
				screens: {
					default: "1329px",
				},
			},
		},
	},
	darkMode: "class",
	plugins: ["prettier-plugin-tailwindcss"],
};
