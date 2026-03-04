import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        cream: "#FDF8F3",
        warmwhite: "#FFFBF7",
        caramel: "#D4A574",
        "caramel-dark": "#B8956A",
        "caramel-light": "#E8C9A8",
        golden: "#8B6914",
        "golden-light": "#C4A035",
        blush: "#F5E6D3",
        "soft-peach": "#FAE5D3",
        charcoal: "#2D2926",
        "warm-gray": "#6B5B4F",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-warm":
          "linear-gradient(135deg, #FDF8F3 0%, #FAE5D3 50%, #F5E6D3 100%)",
        "gradient-cozy":
          "linear-gradient(180deg, #FDF8F3 0%, #FFFBF7 100%)",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        cozy: "0 4px 20px -2px rgba(212, 165, 116, 0.15)",
        "cozy-lg": "0 10px 40px -3px rgba(212, 165, 116, 0.2)",
        glow: "0 0 30px rgba(212, 165, 116, 0.3)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        paw: "paw-print 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
