import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#f98835", // Logo Swoosh Orange
          secondary: "#1a1a1a", // Deep gray for softer contrast
          dark: "#000000", // Logo pure black
          light: "#ffffff", // Pure white
          orange: "#f98835",
          black: "#000000",
          gray: "#f4f4f5",
        },
      },
      transitionTimingFunction: {
        'bouncy': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-150%) skewX(-12deg)' },
          '100%': { transform: 'translateX(150%) skewX(-12deg)' },
        },
        borderFlash: {
          '0%, 100%': { borderColor: 'rgba(249, 136, 53, 1)' },
          '50%': { borderColor: 'rgba(249, 136, 53, 0.2)' },
        }
      },
      animation: {
        shimmer: 'shimmer 0.6s ease-in-out 1',
        borderFlash: 'borderFlash 2s infinite',
      }
    },
  },
  plugins: [],
};
export default config;
