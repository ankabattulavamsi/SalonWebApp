export const VerificationCompStyles: any = (theme: any) => ({
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
  paragraphText: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "20px !important",
    lineHeight: "30px",
    textTransform: "capitalize",
    color: "#88878F",
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px !important",
    },

    [theme.breakpoints.up("xs")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px !important",
    },
  },
});
