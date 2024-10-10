import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#000000",
        "gray": "#eeeeee",
        "second-gray": "#555555",
        "white": "#ffffff",
        "blue": "#0000ff",
        "red": "#ff0000",
      },
    },
  },
  plugins: [],
};
export default config;
