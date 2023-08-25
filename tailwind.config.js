module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }
      },
      animation:{
        overlay: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        content: 'contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        overlayShow: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        contentShow: {
          '0%': { opacity: 0, translate: ('-50%', '-48%'), scale: '0.96' },
          '100%': { opacity: 1, translate: ('-50%', '-50'), scale: '1' },
        },
      }
    },
  },
  plugins: [],
};
