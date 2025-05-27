export default {
  plugins: {
    tailwindcss: {},
    ...(process.env.NODE_ENV === "production"
      ? {
          "@fullhuman/postcss-purgecss": {
            content: [
              "./pages/**/*.{js,jsx,ts,tsx}",
              "./components/**/*.{js,jsx,ts,tsx}",
              "./app/**/*.{js,jsx,ts,tsx}",
              "./src/**/*.{js,jsx,ts,tsx}",
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: {
              standard: ["html", "body"],
              deep: [
                /^dark:/,
                /^[a-z]+:/,
                /^peer-/,
                /^group-/,
                /^data-/,
                /^aria-/,
                /^rtl:/,
                /^ltr:/,
              ],
              greedy: [/^Toastify/, /^slick-/, /^react-/, /^swiper/],
            },
          },
        }
      : {}),
  },
};
