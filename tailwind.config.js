/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "var(--Blue, #5679FF)",
        "text-color": "#101928",
        "dark-blue": "var(--Dark-Blue, #101928)",
        white: "#FFF",
        "green-txt": "#007930",
        gray: " var(--Grey, #7B7B7B)",
        "red-txt": "#F52525",
        "light-gray": "rgba(63, 63, 68, 0.30)",
        "gray-text": "rgba(63, 63, 68, 0.70)",
        "gray-background": "#F6F6F6",
        "dark-gray": "#3F3F44",
        "calender-back": "rgba(247, 247, 247, 0.70)",
        "linear-gradient": "#FFFFFF00, #FFFFFF00, #FFFFFF",
        "blue-background": "#F2F7F7",
      },
      fontSize: {
        xs: "13.862px",
        sm: "14.423px",
        base: "15.735px",
        lg: "16.674px",
        xl: "17.657px",
        "2xl": "18.483px",
        "3xl": "20.979px",
        "4xl": "29px",
        "8xl": "31.469px",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      boxShadow: {
        "custom-shadow":
          "0px 0px 0px 0px rgba(0, 0, 0, 0.03), 0px -7.86725px 13.11209px 0px rgba(0, 0, 0, 0.02), 0px 22.29055px 19.66813px 0px rgba(0, 0, 0, 0.03), 0px 13.11209px 13.11209px 0px rgba(0, 0, 0, 0.01), 0px 39.33627px 19.66813px 0px rgba(0, 0, 0, 0.00)",
      },
    },
  },
  plugins: [],
};
