import twElementsPlugin from "./node_modules/tw-elements/dist/plugin.cjs";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        ManropeBold: ["Manrope-Bold", "sans-serif"],
        ManropeExtraBold: ["Manrope-ExtraBold", "sans-serif"],
        ManropeLight: ["Manrope-Light", "sans-serif"],
        ManropeExtraLight: ["Manrope-ExtraLight", "sans-serif"],
        ManropeMedium: ["Manrope-Medium", "sans-serif"],
        ManropeRegular: ["Manrope-Regular", "sans-serif"],
        ManropeSemiBold: ["Manrope-SemiBold", "sans-serif"],
      },
      colors: {
        BrandPrimary: "#6366F1",
        BrandGray900: "#0B0F19",
        BrandGray700: "#565973",
        BrandGray500: "#B4B7C9",
        BrandGray400: "#D4D7E5",
        BrandHover: "#c1c4fa",
      },
    },
  },
  plugins: [twElementsPlugin],
};
