const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
  
  /** @type {import('tailwindcss').Config} */
  module.exports = {
	content: [
	  // your paths
	  "./src/**/*.{ts,tsx}",
	],
	darkMode: "class",
	theme: {
	  extend: {
		fontFamily: {
		  sans: ["var(--font-sans)", "system-ui", "sans-serif"],
		  mono: ["var(--font-mono)", "ui-monospace", "monospace"],
		},
		fontSize: {
		  xs:    ["0.75rem",  { lineHeight: "1.5" }],
		  sm:    ["0.875rem", { lineHeight: "1.5" }],
		  base:  ["1rem",     { lineHeight: "1.6" }],
		  lg:    ["1.333rem", { lineHeight: "1.5" }],
		  xl:    ["1.777rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
		  "2xl": ["2.369rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
		  "3xl": ["3.157rem", { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
		  "4xl": ["4.209rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
		},
		animation: {
		  aurora: "aurora 60s linear infinite",
		},
		keyframes: {
		  aurora: {
			from: {
			  backgroundPosition: "50% 50%, 50% 50%",
			},
			to: {
			  backgroundPosition: "350% 50%, 350% 50%",
			},
		  },
		},
	  },
	},
	plugins: [addVariablesForColors],
  };
  
  // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
  function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
  
	addBase({
	  ":root": newVars,
	});
  }
  