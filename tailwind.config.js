/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",     // Blue (main brand)
        secondary: "#6366f1",   // Indigo
        background: "#f5f7fb",  // App background
        surface: "#ffffff",     // Cards / panels
        muted: "#6b7280",       // Muted text
        success: "#16a34a",
        danger: "#dc2626",
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
        soft: "0 4px 12px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl: "14px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
