import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1a1a1a', 50: '#f5f5f5', 100: '#e6e6e6', 200: '#cccccc', 300: '#b3b3b3', 400: '#999999', 500: '#808080', 600: '#666666', 700: '#4d4d4d', 800: '#333333', 900: '#1a1a1a' },
        accent: { DEFAULT: '#c43a31', 50: '#fef2f2', 100: '#fde3e3', 200: '#fccccc', 300: '#f9a8a8', 400: '#f47272', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 900: '#7f1d1d' },
        gold: { DEFAULT: '#c9a96e', 50: '#fdf8f0', 100: '#f9edd9', 200: '#f2d9b0', 300: '#e8c282', 400: '#d9ad5c', 500: '#c9a96e', 600: '#a88a4f', 700: '#8b6914', 800: '#6d5510', 900: '#4f3e0c' },
        cream: '#faf8f5',
        ink: '#1a1a1a',
      },
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'serif'],
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
