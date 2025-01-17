/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "my-image": "url(./images/handball2.jpg)" ,
      },
  },
  plugins: [],
}

