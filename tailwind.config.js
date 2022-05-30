module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FBBD23",
 "secondary": "#fde68a",
 "accent": "#37CDBE",
 "neutral": "#3D4451",
 "base-100": "#FFFFFF",  
 "info": "#3ABFF8",    
 "success": "#36D399",    
 "warning": "#FBBD23",       
 "error": "#F87272",
        },
      },
      "light",
    ],
  },
};
