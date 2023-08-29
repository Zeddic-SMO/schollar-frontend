/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        BrandSecondary: "#22C55E",
        BrandGray900: "#0B0F19",
        BrandGray800: "#33354D",
        BrandGray700: "#565973",
        BrandGray600: "#9397AD",
        BrandGray500: "#B4B7C9",
        BrandGray400: "#D4D7E5",
        BrandGray300: "#E2E5F1",
        BrandGray200: "#EFF2FC",
        BrandGray100: "#f3f6ff",
        BrandHover: "#c1c4fa",
      },
      backgroundImage: {
        hero: "url('./src/assets/media/images/consultants/cover.png')",
      },
      height: {
        calc: "calc(100%-60px)",
      },
    },
  },
  plugins: [],
};
