import { lineHeight } from "@mui/system";

export const hairStyle: any = {
  priceServeContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  headContainer : {
    paddingTop: '8%',
    "@media screen and (max-width: 600px)": {
      paddingTop: '45%',
    },
    "@media screen and (min-width: 600px) and (max-width: 1080px)": {
      paddingTop: '22%',
    },
    "@media screen and (min-width: 912px) and (max-width: 1370px)": {
      paddingTop: '10%',
    },
  },
  priceServeContainerR: {
    display: "flex",
    justifyContent: "space-between",
    color: "#272522 !important",
    fontSize: "18px !important",
  },
  priceServeContainerRu: {
    display: "flex",
    justifyContent: "space-between",
    textDecoration: "line-through",
    color: "#88878F !important",
    fontSize: "18px !important",
  },
  cardHeading: {
    fontFamily: "Fira Sans",
    fontStyle: "SemiBold",
    fontWeight: "700",
    fontSize: "22px !important",
    lineHeight: "48px",
    color: "#272522 !important",
    "@media screen and (max-width: 600px)": {
      fontSize: "26px !important",
    },
  },
  cartBtn: {
    backgroundColor: "#F0F0F0 !important",
    borderRadius: "8px",
    color: "#88878F !important",
    width: "191px",
    height: "62px",
  },
  descHair: {
    fontFamily: "Fira Sans",
    fontStyle: "Medium",
    fontWeight: "700",
    marginTop: "8px !important",
    fontSize: "16px !important",
    lineHeight: "26px",
    color: "#88878F !important",
    "@media screen and (max-width: 600px)": {
      fontSize: "18px !important",
    },
  },
  cardContainer: {
    boxShadow: "none !important",
    cursor: 'pointer',
    "&:hover": {
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.07) !important",
      transitionDelay: '0.2s !important',
    },
    "&:hover div div div div h3": {
      color: '#E7A356 !important',
      transitionDelay: '0.2s !important',
    },
    "&:hover div div div div h4": {
      color: '#272522 !important',
      transitionDelay: '0.2s !important',
    },
    "&:hover div div div div svg": {
      color: '#E7A356  !important', 
      transitionDelay: '0.2s !important',
    },
    "&:hover div div div div div svg": {
      color: '#272522  !important', 
      transitionDelay: '0.2s !important',
    },
    "&:hover div button": {
      background: "#E7A356 !important",
      color: "#FFFFFF !important",
      borderRadius: "8px",
      width: "191px",
      height: "62px",
      transitionDelay: '0.2s !important',
      "& svg:hover": {
        background: "none",
      },
    },
  },

  MainHeading: {
    fontFamily: "Fira Sans",
    fontStyle: "SemiBold",
    fontWeight: "700 !important",
    fontSize: "26px !important",
    lineHeight: "48px !important",
    color: "#272522 !important",
    "@media screen and (max-width: 600px)": {
      fontSize: "26px !important",
    },
  },
  descriptionP: {
    fontFamily: "Roboto",
    fontStyle: "Regular",
    fontWeight: "700",
    marginTop: "4px !important",
    fontSize: "17px !important",
    lineHeight: "27px !important",
    color: "#88878F !important",
    "@media screen and (max-width: 600px)": {
      fontSize: "18px !important",
    },
  }, 
  descriptionW: {
    fontFamily: "Roboto",
    fontStyle: "Regular",
    fontWeight: "700",
    marginTop: "12px !important",
    fontSize: "17px !important",
    lineHeight: "27px !important",
    color: "#88878F !important",
    
    "@media screen and (max-width: 600px)": {
      fontSize: "18px !important",
    },
  },
  AddBtn: {
    backgroundColor: "#E7A356 !important",
    borderRadius: "8px !important",
    color: "#FFF !important",
    width: "261px",
    height: "62px",
    fontSize: '18px !important',
    lineHeight: '22px',
    fontFamily: "Fira Sans",
    fontStyle: "SemiBold",
    letteSpacing: '2% !important',
    marginTop: "12px !important",
    marginBottom: '10% !important',
    "@media screen and (max-width: 600px)": {
      width: "100%",
      marginBottom: '10% !important',
    },
  },
  priceContianer: {
    display: 'flex',
    '& h3':{
      fontFamily: 'Fira Sans',
      fontStyle: 'medium',
      fontWeight: '700',
      fontSize: '18px',
      lineHeight: '48px',
      color: "#E7A356 !important",
  },
  '& h2':{
    fontFamily: 'Fira Sans',
    fontStyle: 'medium',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '48px',
    color: "#272522",
    textDecoration: "line-through",
},
  },
  priceContianerS: {
    display: 'flex',
    alignItems: 'center',
    "@media screen and (max-width: 600px)": {
     marginTop: '50px'
    },
  },

  prevArrow: {
    color: "#FFFFFF !important",
              fontSize: "25px",
  }
};
