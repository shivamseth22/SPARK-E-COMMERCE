/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xsm': {'min': '40px', 'max': '499px'},

      'sm': {'min': '500px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '767px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1536px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // 'xl': {'min': '1280px', 'max': '1535px'},
      // // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // '2xl': {'min': ''},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
