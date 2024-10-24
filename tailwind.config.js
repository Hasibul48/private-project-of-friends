const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    flowbite.content(),
  ],
  theme: {
    colors: {
      themeColor: "#2CAC00"
    },
    extend: {
      fontFamily: {
        "handWriting": ["Edu AU VIC WA NT Hand", "cursive"]
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

