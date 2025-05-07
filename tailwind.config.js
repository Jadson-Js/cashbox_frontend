/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#007BB8",
        red: "#C90C00",
        green: "#40C900",
      },
      color: {
        primary: "#007BB8",
        red: "#C90C00",
        green: "#40C900",
      },
      textColor: {
        primary: "#007BB8",
        red: "#C90C00",
        green: "#40C900",
      },
    },
  },
  plugins: [],
};
