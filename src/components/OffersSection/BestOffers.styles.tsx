export const StylesOffers = {
  MainContainer: {
    backgroundColor: "#FDF6EE",
  },
  headingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "900px",
  },
  bestOffersMainHeading: {
    "& h4": {
      color: "#272522",
      fontFamily: "Fira Sans",
      fontWeight: "800",
      fontSize: "35px",
      margin: "30px",
      lineHeight: "48px",
      marginLeft: '-50px !important',
      letterSpacing: "-1px",
      textTransform: "capitalize",
      position: "relative",
      "&::after": {
        content: ' "" ',
        width: "28px",
        height: "4px",
        background: "#EBB273",
        position: "absolute",
        top: "54px",
        right: "88.7%",
      },
    },
  },
  headingCardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  offersPercentageHead: {
    fonFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "22px",
    color: "#272522",
  },
  offeredPrice: {
    color: "#272522",
    "&:hover": {
      color: "#E7A356",
    },
    fonFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "26px",
  },
  originalPrice: {
    color: "#272522",
    fonFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "26px",
    textDecoration: "line-through",
  },
  offerDescription: {
    color: "#88878F",
    fonFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "17px",
  },
  BestOffersDissRupeeIcon: {
    color: "#272522",
    "&:hover": {
      color: "#E7A356",
    },
  },
  ViewAllButton: {
    color: "#FFFFFF !important",
    fontFamily: "Fira Sans !important",
    fontWeight: 900,
    letterSpacing: "0.02em !important",
  },
  ViewAllButtonContainer: {
    backgroundColor: "#272522",
    borderRadius: "10px",
  },
  EditDeleteButonsContainer: {
    display: "flex",
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    margin: 10,
    width: "320px",
  },
};
