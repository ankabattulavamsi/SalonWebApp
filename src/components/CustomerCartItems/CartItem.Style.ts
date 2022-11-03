import { padding } from "@mui/system";

export const cartStyle: any = {
  cartItems: {
    display: "flex",
    alignItems: "end",
    justifyContent: "end",
    "& h2": {
      fontSize: "20px",
      color: "#272522",
      fontFamily: "Fira Sans",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "48px",
      marginRight: "20px",
    },
    "@media screen and (max-width: 600px)": {
      display: "none",
    },
  },
  SkCartContainer: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    height: '250px', 
    width: '100%',
    "@media screen and (max-width: 600px)": {
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      width: '100%',
    },
  },
  skelton: {
    width: '250px', 
    height: '100% !important',
    animation:"wave",
    variant: 'rounded !important',
    "@media screen and (max-width: 600px)": {
      width: '150px', 
    height: '70% !important',
    marginLeft: '15px'
    },
  },

  skelton1: {
    width: '500px', 
    height: '100% !important',
    animation:"wave",
    variant: 'rounded !important',
    "@media screen and (max-width: 600px)": {
      width: '150px', 
    height: '70% !important',
    },
  },

  skelton2: {
    width: '220px', 
    height: '100% !important',
    animation:"wave",
    variant: 'rounded !important',
    "@media screen and (max-width: 600px)": {
    width: '180px', 
    height: '70% !important',
    },
  },
  CartContainer: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#F8F8F8 !important",
    borderRadius: "10px !important",
    boxShadow: "none !important",
    "&:hover": {
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.08) !important",
      transitionDelay: "0.3s !important",
      backgroundColor: "#FFFFFF",
    },
    "&:hover div h2": {
      color: "#E7A356 !important",
      transitionDelay: "0.3s !important",
    },
    "&:hover div div:nth-child(1)": {
      color: "#E7A356 !important",
      transitionDelay: "0.3s !important",
    },
    "&:hover div div:nth-child(2)": {
      color: "#272522 !important",
      transitionDelay: "0.3s !important",
    },
    "&:hover div h5": {
      color: "#272522 !important",
      transitionDelay: "0.3s !important",
    },
    "&:hover div button": {
      color: "#FFFFFF !important",
      backgroundColor: "#E7A356 !important",
      transitionDelay: "0.3s !important",
    },
    "@media screen and (max-width: 600px)": {
      display: "flex",
      justifyContent: "center",
    },
  },
  CartLocation: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    "@media only screen and (min-width: 300px) and (max-width: 600px)": {
      display: "none",
    },
  },
  imageContainer: {
    marginLeft: "-30px",
    marginBottom: "-4px",
    marginRight: "18px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    width: '350px !important',
    height: '200px !important',
    "@media screen and (max-width: 600px)": {
      width: "250px !important",
      height: "115px !important",
    },
  },
  imagCart: {
    width: "100% !important",
    height: "100% !important",
    "@media screen and (max-width: 600px)": {
      width: "100% !important",
      height: "100% !important",
    },
  },
  priceServeContainer: {
    display: "flex",
    marginTop: "20px",
    "@media screen and (max-width: 600px)": {
      marginTop: "0px",
    },
  },
  priceServeContainerR: {
    display: "flex",
    justifyContent: "space-between",
    color: "#272522 !important",
    fontSize: "18px !important",
    marginLeft: "34px",
    "& h3": {
      fontWeight: "600 !important",
    },
    "@media only screen and (max-width: 600px)": {
      marginLeft: "0px",
      fontSize: "16px !important",
    },
  },
  priceServeContainerRu: {
    display: "flex",
    justifyContent: "space-between",
    textDecoration: "line-through",
    color: "#88878F !important",
    fontSize: "18px !important",
    "& h4": {
      fontWeight: "600 !important",
    },
    "@media only screen and (max-width: 600px)": {
      display: "none !important",
    },
  },
  cartDeleteBtn: {
    backgroundColor: "#F0F0F0 !important",
    borderRadius: "10px !important",
    color: "#88878F !important",
    fontFamily: "Fira Sans !important",
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: "18px !important",
    lineHeight: "30px !important",
    textAlign: "center !important",
    textTransform: "capitalize ",
    width: "134px",
    height: "59px",
    marginTop: "20px !important",
    "@media only screen and (max-width: 600px)": {
      display: "none !important",
    },
  },
  deleteI: {
    "@media only screen and (min-width: 600px)": {
      display: "none !important",
    },
    "@media only screen and (max-width: 600px)": {
      color: "#88878F !important",
    },
  },
  deleteC: {
    marginLeft: "55px",
    backgroundColor: "#F0F0F0 !important",
    borderRadius: "5px !important",
    width: "46px",
    height: "41px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media only screen and (min-width: 600px)": {
      display: "none !important",
    },
  },
  orderId: {
    color: "#88878F !important",
    fontFamily: "Fira Sans !important",
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "20px !important",
    lineHeight: "48px !important",
    textAlign: "right !important",
    textTransform: "capitalize ",
    marginTop: "15px !important",
    "@media only screen and (max-width: 600px)": {
      marginTop: "0px !important",
      fontSize: "16px !important",
    },
  },
  CartSalonName: {
    color: "#272522 !important",
    fontFamily: "Fira Sans !important",
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: "19px !important",
    lineHeight: "0px !important",
    marginRight: "15px !important",
    marginTop: "20px !important",
    display: "block",
    "@media only screen and (min-width: 300px) and (max-width: 600px)": {
      display: "none",
    },
  },
  CartLocationText: {
    color: "#88878F !important",
    fontFamily: "Roboto !important",
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "16px !important",
    lineHeight: "26px !important",
    textTransform: "lowercase",
    display: "block",
    "@media only screen and (min-width: 300px) and (max-width: 600px)": {
      display: "none",
    },
  },
  iconCart: {
    color: "#88878F !important",
    fontFamily: "Roboto !important",
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "22px !important",
    lineHeight: "26px !important",
    textTransform: "lowercase",
  },
  cartDesc: {
    color: "#88878F !important",
    fontFamily: "Roboto !important",
    fontStyle: "normal",
    fontWeight: "400 !important",
    fontSize: "17px !important",
    lineHeight: "26px !important",
    textTransform: "lowercase",
    marginTop: "10px !important",
    display: "block",
    "@media only screen and (min-width: 300px) and (max-width: 600px)": {
      display: "none",
    },
  },
  cartHeading: {
    color: "#272522 !important",
    fontFamily: "Fira Sans !important",
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: "22px !important",
    lineHeight: "48px !important",
    textTransform: "capitalize",
    marginTop: "10px",
    "@media only screen and (min-width: 300px) and (max-width: 600px)": {
      marginTop: "0px",
      fontSize: "16px !important",
      lineHeight: "25px !important",
    },
  },
  insideContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginRight: "12px",
    "@media only screen and (max-width: 684px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around !important",
    },
  },
  deleteContainer: {
    "@media only screen and (max-width: 684px)": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },

  cartItemsAmount: {
    display: "flex",
    justifyContent: "end",
    "@media only screen and (max-width: 684px)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "end",
      marginTop: "40%",
    },
    "& div:nth-child(2)": {
      backgroundColor: "#E7A356",
      width: "282px",
      height: "66px",
      borderRadius: "5px",
      display: 'flex !important', 
      alignItems: 'center !important',
      justifyContent: 'center !important',
      "@media only screen and (max-width: 684px)": {
        width: "94vw",
      },
    },
    "& button": {
      color: "#FFFFFF !important",
      fontFamily: "Fira Sans !important",
      fontStyle: "normal",
      fontWeight: "700 !important",
      fontSize: "20px !important",
      lineHeight: "48px !important",
      textTransform: "uppercase",
      letterSpacing: "0.02em !important",
      textAlign: "center !important",
    },
  },
  amount: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    "& h2": {
      fontSize: "20px",
      color: "#272522",
      fontFamily: "Fira Sans",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "48px",
    },
  },
  spanAmount: {
    fontSize: "20px",
    color: "#272522",
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "48px",
    marginRight: "10px",
  },
};
