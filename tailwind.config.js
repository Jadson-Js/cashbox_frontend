/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      color: {
        backgroundLight: "#F0F2F5",
        primary: "#F35288",
        primaryLight: "#F35288",
        red: "#C90C00",
        green: "#40C900",
        blue: "#6563FF",
      },
      textColor: {
        backgroundLight: "#F0F2F5",
        primary: "#F35288",
        primaryLight: "#F352884D",
        red: "#C90C00",
        green: "#40C900",
        blue: "#6563FF",
      },
    },
  },
  plugins: [],
};
