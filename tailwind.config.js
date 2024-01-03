module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include React components
    "./public/index.html", // Include the main HTML file
  ],
  theme: {
    extend: {
      width: {
        500: "500px",
        1500: "1500px",
        1080: "1080px",
      },
      height: {
        500: "500px",
        1920: "1920px",
      },
      screens: {
        desktop: "1100px",
        tablet: "800px",
      },
    },
  },
  plugins: [],
};
