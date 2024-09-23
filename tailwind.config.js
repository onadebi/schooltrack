/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        onaxSky: "#C3EBFA",
        onaxSkyLight: "#EDF9FD",
        onaxPurple: "#CFCEFF",
        onaxPurpleLight: "#F1F0FF",
        onaxYellow: "#FAE27C",
        onaxYellowLight: "#FEFCE8",
        onaxOffWhite: "#ececec",
      }
    },
  },
  plugins: [],
}

