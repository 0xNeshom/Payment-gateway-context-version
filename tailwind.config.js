module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your React files
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(147deg, #4d4855 0%, #000000 74%)", 
        "card-gradient":
          "linear-gradient(90deg, #A29BFE, #2D3436)",
      },
    },
  },
  plugins: [],
}
