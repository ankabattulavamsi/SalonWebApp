import { height } from "@mui/system";

export const StylesOffers: any  = (theme: any) =>  ({
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
    marginTop: '15px'
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
    marginRight: '3px !important'
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
    textTransform: 'capitalize !important'
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
    marginTop: "15px !important",
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
  boxinput: {
    position: "relative",
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
  btnCloud: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: "16px !important",
    lineHeight: "30px",
    letterSpacing: "0.01em",
    textTransform: "capitalize",
    color: " #A4A1A1 !important",
    display: "flex",
    justifyContent: "center",
    gap: 5,
    alignItem: "center",
    position: "absolute",
    top: 10,
    left: 5,
    backgroundColor: "#F0F0F0 !important",
    borderRadius: "5px !important",
    zIndex: 0,
    width: "100%",

    opacity: "1",
    
  },
  CardImageOffer: {
    width: '100% !important',
    height: '220px !important',
    objectFit: "cover !important"
  },


  /// category css

 


});
