import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        murecho: ["Murecho", "sans-serif"],
      },
      fontSize: {
        "13px": "0.8125em", // Equivalent to 13px in em
      },
      boxShadow: {
        custom: "0px 2px 8px 0px rgba(0, 0, 0, 0.04)",
      },
    },
    colors: {
      primary: "#FFFFFF",
      secondary: "#F5F7FA",
      accent: "#1882FF",
      customGray: "#5A6573",
      lightGray: "#3E4957",
      title: "#1A2B3D",
      secondaryBg: "#E8F3FF",
      borderPrimary: "#EBF0F5",
    },
  },
  plugins: [],
};
export default config;
