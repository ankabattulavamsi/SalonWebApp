export const registeredStyles: any = (theme: any) => ({
  heading: {
    marginBottom: "20px !important",
    marginTop: "20px !important",
    fontFamily: "Fira Sans !important",
    fontStyle: " normal !important",
    fontWeight: " 700 !important",
    fontSize: "30px !important",
    lineHeight: "48px !important",
    textTransform: "capitalize",
    color: " #272522",
  },
  agreementBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  termandcondition: {
    fontFamily: "Roboto  !important",
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "17px !important",
    lineHeight: "30px",

    letterSpacing: " 0.01em",
    textTransform: "capitalize !important",

    color: "#272522 !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "17px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px !important",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "14px !important",
    },
  },
});
