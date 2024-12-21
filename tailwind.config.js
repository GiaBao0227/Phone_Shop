/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js", ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
