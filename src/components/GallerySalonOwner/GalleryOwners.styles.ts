export const galleryStyles: any = (theme: any) => ({
  titlebox: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "block ",
    },
  },
  viewBox: {
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      marginTop: "18px",
    },
  },

  titleText: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "700 !important",

    lineHeight: "48px !important",

    textTransform: "capitalize !important",
    fontSize: "35px !important",

    color: "#272522 !important",

    [theme.breakpoints.down("md")]: {
      fontSize: "30px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px !important",
    },
  },
  
  capitalized: {
    textTransform: "capitalize !important",
  },
});
