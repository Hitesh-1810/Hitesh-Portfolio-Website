/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: '#2C2C2C',
        accent: '#D97757',
        textMain: '#F5F5F5',
        textMuted: '#A3A3A3',
        cardBg: 'rgba(44, 44, 44, 0.6)',
        // New Palette Colors
        deepBlack: '#0a0a0a',
        charcoal: '#18181b',
        deepMaroon: '#2a1619',
        offWhite: '#fafafa',
        warmOffWhite: '#f5f5f0',
        agriGreen: '#132a13',
        agriGreenLight: '#1f421f',
        softNeutral: '#e5e5e5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
