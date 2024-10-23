/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**', './*.html'],
	theme: {
		extend: {
			colors: {
				newGreen: '#c5f82a', // hsl(75, 94%, 57%)
				newWhite: '#ffffff', // hsl(0, 0%, 100%)
				newGrey: {
					700: '#333333', // hsl(0, 0%, 20%)
					800: '#1f1f1f', // hsl(0, 0%, 12%)
					900: '#141414', // hsl(0, 0%, 8%)
				},
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
