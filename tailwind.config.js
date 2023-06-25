/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
	extend: {
		width: {
			content: "80%"
		},
		keyframes: {
			wiggle: {
				"0%, 100%": { transform: "rotate(-5deg)" },
				"50%": { transform: "rotate(5deg)" }
			}
		},
		fontFamily: {
			"primary": ["Merriweather", "serif"],
			"sans": ["IBM Plex Sans", "sans-serif"]
		}
	}
}
export const plugins = [];
