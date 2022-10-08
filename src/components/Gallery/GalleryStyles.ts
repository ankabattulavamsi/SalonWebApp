
export const Styles: any = (theme: any) => ({
  titlebox: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: "20px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "block ",
    },
  },

  titleText: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "700 !important",

    lineHeight: "48px !important",

    textTransform: "capitalize !important",
    fontSize: "35px !important",
    textAlign: "center",
    color: "#272522 !important",

    [theme.breakpoints.down("md")]: {
      fontSize: "30px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px !important",
    },
  },
  card: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "4px !important",
    transition: " all .5s",
  },
});
