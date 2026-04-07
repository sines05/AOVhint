/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-dim": "#0f131c",
        "surface-container": "#1c1f29",
        "surface-container-low": "#181b25",
        "surface-container-lowest": "#0a0e17",
        "surface-container-high": "#262a34",
        "surface-container-highest": "#31353f",
        "surface-variant": "#31353f",
        "surface-bright": "#353943",
        "on-surface": "#dfe2ef",
        "on-surface-variant": "#b9cacb",
        "primary-container": "#00f2ff",
        "primary-fixed-dim": "#00dbe7",
        "on-primary-container": "#006a71",
        "secondary-container": "#ff525c",
        "tertiary-fixed-dim": "#f1c100",
        "outline": "#849495",
        "outline-variant": "#3a494b",
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Manrope", "sans-serif"],
      },
      boxShadow: {
        'neon-blue': '0 0 15px rgba(0, 242, 255, 0.4)',
        'neon-red': '0 0 15px rgba(255, 82, 92, 0.4)',
        'neon-gold': '0 0 15px rgba(241, 193, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
