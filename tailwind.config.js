/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkcyan: "#169793",
        dimgray: {
          "100": "#6e6e6e",
          "200": "#6d6d6d",
          "300": "#595959",
        },
        darkslategray: {
          "100": "#475166",
          "200": "#414042",
          "300": "#303030",
        },
        steelblue: "#0077b5",
        azure: "#ecffff",
        darkgray: {
          "100": "#b0afaf",
          "200": "#999",
        },
        gray: {
          "100": "#fefefe",
          "200": "#808285",
          "300": "#262626",
          "400": "#222",
          "500": "rgba(0, 0, 0, 0.1)",
        },
        whitesmoke: {
          "100": "#f4f4f4",
          "200": "#eee",
        },
        cornflowerblue: "#209ff9",
        paleturquoise: "#a3ecee",
        gainsboro: {
          "100": "#e6e7e8",
          "200": "#dadada",
        },
        darkturquoise: "#00c6c9",
        silver: "#bcbec0",
        aqua: "#00ffe9",
      },
      fontFamily: {
        hind: "Hind",
        karla: "Karla",
        rajdhani: "Rajdhani",
        ramabhadra: "Ramabhadra",
        roboto: "Roboto",
        inter: "Inter",
        arvo: "Arvo",
      },
      borderRadius: {
        lgi: "19px",
        "38xl-5": "57.5px",
        "3xs": "10px",
        "8xs": "5px",
        "9xl": "28px",
      },
    },
    fontSize: {
      xl: "20px",
      sm: "14px",
      lg: "18px",
      "23xl": "42px",
      base: "16px",
      "6xl": "25px",
      smi: "13px",
      "6xs": "7px",
      "11xl": "30px",
      "13xl": "32px",
      mid: "17px",
      xs: "12px",
      "5xl": "24px",
      "35xl": "54px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
