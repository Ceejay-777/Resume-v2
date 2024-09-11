/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/*.jsx",
    "./src/*.js,",
    "./src/*.html",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.html",
    "./src/**/**/*.html",
    "./src/**/**/*.jsx",
    "./src/**/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // pri: "#2c3e50",
        // pri: "hsl(210, 29%, 20%)",
        pri: "#444444",
        priFade: "#555555",
        priFader: "hsl(210, 29%, 28%)",
        // sec: "#007CED",
        sec: "#d4af37",
        // acc: "#007CED",
        // acc: "#d7b9c4",
        com: "#a9a9a9",
      },
    },
  },
  plugins: [],
};
