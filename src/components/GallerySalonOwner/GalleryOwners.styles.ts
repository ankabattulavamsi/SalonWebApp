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
  card: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "4px !important",
    transition: " all .5s",
  },
  imgCard: {},

  cardActions: {
    position: "absolute",
    transition: " all .5s",

    display: "none !important",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "linear-gradient(45deg,rgba(0,0,0,.6),rgba(0,0,0,.3))",
    width: "100%",
    height: "100%",
    textAlign: "center",
  },

  buttonClass: {
    border: "2px solid #ffffff !important",
    marginLeft: "3px !important",
    marginRight: "3px !important",
    padding: "10px !important",
    color: "#ffffff !important",
    background: "transparent",
    transition: " all .5s",

    "&:hover": {
      background: "#E7A356 !important",
      transition: " all .5s",

      border: "2px solid #E7A356 !important",
    },
  },

  capitalized: {
    textTransform: "capitalize !important",
  },
});
