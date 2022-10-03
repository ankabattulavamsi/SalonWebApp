/** @format */

import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  typography: {
    fontFamily: "Fira Sans",
    h1: {
      fontSize: "32px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "26px",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Roboto",
      fontSize: "18px",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: 400,
      LineHeight: "28px",
    },
    h5: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: 400,
      LineHeight: "24px",
    },
    h6: {
      fontFamily: "Fira Sans",
      fontSize: "13px",
      fontWeight: 600,
      LineHeight: "16px",
    },
  },
  palette: {
    primary: {
      main: "#E7A356",
      dark: "#272522",
    },
    secondary: {
      main: "#FFFFFF",
      dark: "#88878F",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
const theme = {
  ...defaultTheme,
};
export default theme;
