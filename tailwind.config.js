/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orangish: "#FF5F13",

        //add your own color
        //https://tailwindcss.com/docs/customizing-colors
      },

      backgroundImage: {
        heroImage: "url(/images/hero-bg.png)",
      },

      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
