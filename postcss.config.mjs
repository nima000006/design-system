const config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/stories/**/*.{ts,tsx}",
  ],
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          colors: {
            brand: {
              500: "#111111",
              600: "#000000",
            },
          },
          borderRadius: {
            lg: "12px",
          },
        },
      },
    },
  },
};

export default config;
