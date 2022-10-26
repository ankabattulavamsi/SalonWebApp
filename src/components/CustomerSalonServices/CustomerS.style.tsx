export const hairStyle: any = {
  priceServeContainer: {
    display: "flex",
    justifyContent: "space-between",
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
    // "&:hover div div div div svg:nth-child(2)": {
    //   color: '#E7A356 !important'
    // },
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
};
