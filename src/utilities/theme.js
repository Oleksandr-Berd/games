const theme = {
  spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 64, 128, 256, 312, 512],
  percentage: [
    "10%",
    "15%",
    "20%",
    "25%",
    "30%",
    "33%",
    "50%",
    "60%",
    "80%",
    "90%",
    "100%",
  ],

  transition: {
    color: "color 300ms ease",
  },

  flex: {
    display: "flex",
    flexDirection: ["row", "column"],
    justifyContent: ["center", "space-between", "space-around"],
    alignItems: ["flex-end", "flex-start", "center"],
  },

  grid: {
    display: "grid",
    alignItems: ["center", "flex-end"],
    justifyItems: ["center"],
  },

  background: {
    bloody: "linear-gradient(to bottom, #0f0f0f, #870000, #0f0f0f)",
    bloodyText: "linear-gradient(to right, #f00, #800)",
  },

  color: {
    main: "#0F0F0F",
    text: "#E4E4D4",
    logo: "#d92229",
    hover: "#D48215",
    average: "#ffd700",
    high: "#3CB371",
    poor: "#FF5733",
  },

  listText: {
    listStyle: "none",
    textDecor: "none",

    textAlignCenter: "center",
    textAlignLeft: "left",

    fontWeightBold: "800",
    fontWeightNormal: "500",

    fontStyleItalic: "italic",

    fontFamilyTitle: "Caveat",
    fontFamilyText: "Montserrat",

    fontSizeL: "72px",
    fontSizeXM: "36px",
    fontSizeM: "24px",
    fontSizeS: "20px",
    fontSizeXS: "16px",

    lineHeightM: 1.4,
  },

  radius: [4, 8, 12, 16, 20, 50],
};

export default theme;
