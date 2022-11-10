import theme from "../../../Theme/Theme";

export const Styles: any = {
  CardItems: {
    marginTop: "50px",
    [theme.breakpoints.only("sm")]: {
      display: "grid !important",
      gridTemplateColumns: "repeat(3 , 1fr) !important",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
  carouselSec: {
    margin: "40px 0 !important",
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
  blogHeading: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal",
    fontWeight: "700 !important",
    fontSize: "35px !important",
    lineHeight: "48px",
    textAlign: "center",
    letterSpacing: "0.01em",
    textTransform: "capitalize",
    color: "#272522",
    [theme.breakpoints.only("xs")]: {
      fontSize: "27px !important",
    },
  },
  blogTitleLine: {
    position: "relative",
    width: "30px",
    left: "0%",
    top: "50%",
    borderBottom: "5px solid #EBB273",
  },
  specialistHeading: {
    display: "flex",
    justifyContent: "space-between !important",
    alignItems: "center !important",
    marginTop: "80px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column !important",
      alignItems: "start !important",
    },
  },
  teamButton: {
    background: "#000 !important",
    color: "white !important",
    textTransform: "capitalize !important",
    padding: "10px 32px !important",
    borderRadius: "10px !important",
    fontSize: "22px !important",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px !important",
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
    margin: "0px !important",
  },
};
