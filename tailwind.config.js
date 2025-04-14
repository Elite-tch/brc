/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: [
    'dark:bg-red-400',
    'dark:bg-[#00113D]',
    // Add other dark mode classes you're using
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },

  plugins: [ ],
}

