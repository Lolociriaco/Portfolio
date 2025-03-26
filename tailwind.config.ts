import { cutive } from "@/lib/fonts";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#4d4d4d",
        third:"#595958",
        darkBg: ""
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient()"
      },
      fontFamily: {
        cutive: ['var(--font-cutive)']
      }
    },
  },
  plugins: [],
} satisfies Config;
