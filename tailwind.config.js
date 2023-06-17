/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
	extend: {
		width: {
			content: "75%"
		},
		keyframes: {
			wiggle: {
				"0%, 100%": { transform: "rotate(-5deg)" },
				"50%": { transform: "rotate(5deg)" }
			}
		}
	}
};
export const plugins = [];
