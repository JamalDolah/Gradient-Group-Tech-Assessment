/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'brsonoma': ['var(--font-brsonoma)', 'Inter', 'sans-serif'],
        'ibmplex': ['var(--font-ibm-plex)', 'sans-serif'],
      },
      fontSize: {
        'section-title': '112px',
        'paragraph': '24px',
      },
    },
  },
  plugins: [],
}

