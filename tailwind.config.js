import tailwindcssAnimate from 'tailwindcss-animate';
import tailwindcssForms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primarios
        garnet:    '#8E1B3A',
        bordeaux:  '#5A0F24',
        crimson:   '#AB3A50',
        // Secundarios
        chocolate: '#5C3A2E',
        gold:      '#BC9968',
        beige:     '#F5E6D0',
        // Neutros
        white:     '#FFFFFF',
        gray:      '#B0B0B0',
        black:     '#000000',
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssForms],
}
