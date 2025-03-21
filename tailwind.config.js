/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: '#edf8fc',
          100: '#d6edfc',
          200: '#a8dbfc',
          300: '#7ac2f9',
          400: '#4da5f5',
          500: '#2089ef',
          600: '#146ad6',
          700: '#1454ad',
          800: '#154481',
          900: '#163a69',
          950: '#0f2344',
        },
        secondary: {
          50: '#eefbfb',
          100: '#d4f3f6',
          200: '#aee6ed',
          300: '#7dd3e2',
          400: '#45b8cf',
          500: '#2a9db7',
          600: '#247d9a',
          700: '#23647d',
          800: '#245269',
          900: '#21455a',
          950: '#122c3d',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdaa8',
          300: '#ffbd71',
          400: '#ff9636',
          500: '#ff7910',
          600: '#ff5c03',
          700: '#cc4102',
          800: '#a13308',
          900: '#832c0c',
          950: '#461403',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};