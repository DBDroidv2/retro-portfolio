/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Broadened path
  ],
  theme: {
    extend: {
      colors: {
        'space-bg': '#0A0F1A',        // Deep dark blue/black for space
        'nineties-bg': '#B0B0B0',      // Will be less used now, but keep for elements
        'nineties-bg-alt': '#FFFFFF',  // For text on dark bg, and glass effect base
        'nineties-text': '#000000',    // For text on light backgrounds
        'vivid-blue': '#007CF0',
        'vivid-cyan': '#00D8FF',
        'vivid-lime': '#AFFF3A',
        'vivid-pink': '#FF40A0',
        'nineties-border': '#606060',
        'nineties-border-light': '#D0D0D0',
        'nineties-border-dark': '#303030',
      },
      fontFamily: {
        'sans': ['Arial', 'Helvetica', 'sans-serif'], // Keep as fallback
        'serif': ['"Times New Roman"', 'Times', 'serif'], // Keep as fallback
        'my-name': ['var(--font-my-name)', 'sans-serif'],
        'dot': ['var(--font-dot)', 'monospace'],
      },
      boxShadow: {
        // Updated to use new border dark/light shades if they changed, or keep if general gray is better
        'nineties-outset': 'inset -2px -2px 0px #303030, inset 2px 2px 0px #D0D0D0', 
        'nineties-inset': 'inset 2px 2px 0px #303030, inset -2px -2px 0px #D0D0D0', 
      }
    },
  },
  plugins: [],
};
