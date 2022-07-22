/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0284c7",
          secondary: "#22d3ee",
          accent: "#1f2937",
          neutral: "#f3f4f6",
          "base-100": "#fff",
          info: "#3D76D1",
          success: "#047857",
          warning: "#F7CD64",
          error: "#EE3A4C",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
