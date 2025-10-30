// tailwind.config.cjs
module.exports = {
  content: [
    "./hugo_stats.json",
    "./layouts/**/*.{html,htm}",
    "./content/**/*.{html,md}",
    "./assets/**/*.{js,ts,css}",
    "./static/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans 3', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
