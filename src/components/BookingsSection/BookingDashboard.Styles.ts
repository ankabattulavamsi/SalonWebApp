export const Styles: any = (theme: any) => ({
  dashboardAvatar: {
    [theme.breakpoints.down("md")]: {
      width: "54px",
      height: "54px",
    },
    [theme.breakpoints.up("md")]: {
      width: "74px !important",
      height: "74px !important",
    },
  },
  customerName: {
    fontFamily: "Fira Sans !important",
    color: "#272522 ",
    fontWeight: "600 !important",
    lineHeight: "48px !important",
    textTransform: "capitalize !important",
    fontStyle: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "22px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "24px !important",
    },
    "&:hover": {
      color: "#E7A356 !important",
    },
  },
  bookingsServicesTitle: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: " 500 !important",
    lineHeight: "48px !important",
    textTransform: "capitalize",
    color: "#272522 !important",
    [theme.breakpoints.down("lg")]: {
      fontSize: "16px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "18px !important",
    },
  },
  bookingsSubHeading: {
    fontWeight: "500 !important",
    lineHeight: "28px !important",
    color: "#272522 !important",
    fontStyle: "normal",
    fontFamily: "Fira Sans !important",
    letterSpacing: "0.01 !important",
    textTransform: "capitalize !important",
    [theme.breakpoints.up("xs")]: {
      fontSize: "16px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "18px !important",
    },
  },
  bookingTime: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "36px !important",
    textTransform: "capitalize !important",
    color: "#88878F !important",
    marginLeft: "30px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px !important",
    },
  },
  viewAllCustomersButton: {
    color: "#999999",
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: "0.02em",
    textTransform: "capitalize",
    marginTop: "58px",
    marginBottom: "91px",
    mx: "auto",
  },
  serviceNameContainer: {
    backgroundColor: "#F0F0F0",
    // textAlign: "center",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      width: "87px",
      height: "37px",
    },
    [theme.breakpoints.up("md")]: {
      width: "112px",
      height: "49px",
    },
  },
  bookingsServicesName: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    lineHeight: "36px !important",
    textTransform: "capitalize",
    color: "#88878F",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px !important",
    },
  },
  profileHeaderCost: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "24px !important",
    lineHeight: "48px !important",
    textTransform: "capitalize !important",
    color: "#88878F !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px !important",
    },
    "&:hover": {
      color: "#E7A356 !important",
    },
  },
  customerContainer: {
    maxWidth: "555px",
    p: "50px",
    height: "auto",
  },
  bookingTimeHeading: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "48px !important",
    textTransform: "capitalize !important",
    color: "#272522 !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px !important",
    },
  },

  //Bookings calender styles
  calenderDateText: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "25px !important",
    lineHeight: "48px !important",
    textAlign: "center !important",
    textTransform: "capitalize !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px !important",
    },
  },
  calenderDayText: {
    fontFamily: "Roboto !important",
    fontStyle: "normal ",
    fontWeight: "600 !important",
    fontSize: "16px !important",
    lineHeight: "28px",
    textAlign: "center !important",
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px !important",
    },
  },
  nextDateIcon: {
    color: "#999999 !important",
    width: "100px",
    height: "100px !important",
    [theme.breakpoints.down("md")]: {
      width: "32px !important ",
      height: "76px !important",
    },
  },
  previousDateIcon: {
    color: "#999999 !important",
    width: "85px",
    height: "100px !important",
    [theme.breakpoints.down("md")]: {
      width: "32px !important ",
      height: "76px !important ",
    },
  },
  mx: "auto !important",
});
