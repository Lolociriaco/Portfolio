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
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-orange-500",
    "bg-blue-500",
    "bg-yellow-400",
    "bg-cyan-400",
    "bg-neutral-200",
    "bg-blue-600",
    "bg-sky-400",
    "bg-blue-800",
    "bg-fuchsia-800",
    "bg-rose-600",
    "bg-orange-600",
    "bg-violet-500",
    "bg-orange-400"
  ]
} satisfies Config;
