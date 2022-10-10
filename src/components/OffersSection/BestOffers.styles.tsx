import { height } from "@mui/system";

export const StylesOffers: any = {
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
      marginLeft: "-50px !important",
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
    fonFamily: "Fira Sans !important",
    fontStyle: "normal !normal",
    fontWeight: "600 !important",
    fontSize: "22px !important",
    color: "#272522 !important",
    textTransform: "capitalize",
  },
  OffersDissPrice: {
    fonFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "20px !important",
  },
  originalPrice: {
    fonFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "20px !important",
  },

  OffersRuppeIcon: {
    fonFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "20px !important",
  },

  offerDescription: {
    color: "#88878F !important",
    fonFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "17px !important",
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
    fontWeight: "600 !important",
    letterSpacing: "0.02em !important",
    fontStyle: "normal !important",
    fontSize: "18px !important",
    lineHeight: "22px !important",
    textTransform: 'none !important'
  },
  ViewAllButtonContainer: {
    backgroundColor: "#272522",
    borderRadius: "8px",
    height: "58px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  SalonEditDeleteButonsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    margin: "10px !important",
  },
  ModelSaveButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E7A356",
    borderRadius: "5px",
    marginRight: "10px",
    height: "50px",
  },
  ModelSaveIcon: {
    fontSize: "20px !important",
    color: "#fff",
  },
  ModelSaveText: {
    color: "#fff !important",
    fontSize: "20px",
  },
  ModelDeleteButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#272522",
    borderRadius: "5px",
    marginLeft: "10px",
    height: "50px",
  },
  ModelDeleteIcon: {
    fontSize: "20px !important",
    color: "#fff",
  },
  ModelDeleteText: {
    color: "#fff !important",
    fontSize: "20px",
  },
  ModelAvatarImage: {},
};
