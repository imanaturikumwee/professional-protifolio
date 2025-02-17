/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
		boxShadow: {
			'inner-md': 'inset 0 4px 6px #1c1c22',
		  },
		colors: {
			primary: '#1c1c22',
			accent: {
				DEFAULT: '#00ff99',
				hover: '#00e187',
			}
		},
  		backgroundImage: {
  			
  		},
  		borderRadius: {
  			
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
