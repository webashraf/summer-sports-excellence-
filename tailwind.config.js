/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#1188af",
          "secondary": "#101010",
          "primary-focus": "mediumblue",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#ffff",
          "secondary": "#ffff",
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
}

