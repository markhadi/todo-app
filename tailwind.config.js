/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      primary: {
        blue: "hsl(220, 98%, 61%)",
      },
      neutral: {
        light: {
          verylightgray: "hsl(0, 0%, 98%)",
          verylightgrayishblue: "hsl(236, 33%, 92%)",
          lightgrayishblue: "hsl(233, 11%, 84%)",
          darkgrayishblue: "hsl(236, 9%, 61%)",
          verydarkgrayishblue1: "hsl(235, 19%, 35%)",
        },
        dark: {
          verydarkblue: "hsl(235, 21%, 11%)",
          verydarkdesaturatedblue: "hsl(235, 24%, 19%)",
          lightgrayishblue: "hsl(234, 39%, 85%)",
          lightgrayishbluehover: "hsl(236, 33%, 92%)",
          darkgrayishblue: "hsl(234, 11%, 52%)",
          verydarkgrayishblue1: "hsl(233, 14%, 35%)",
          verydarkgrayishblue2: "hsl(237, 14%, 26%)",
        },
      },
    },
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
  },
  plugins: [],
};
