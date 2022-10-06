export const buttonStyles: any = (theme: any) => ({
  buttonBox: {
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: " 48px",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    textAlign: "center",
    width: "100%",

    padding: "15px 20px !important",
    fontSize: "20px !important",

    [theme.breakpoints.up("md")]: {
      fontSize: "20px !important",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "16px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px !important",
    },
  },
});
