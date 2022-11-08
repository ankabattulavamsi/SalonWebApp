export const Styles: any = (theme: any) => ({
  customerContainer: {
    maxWidth: "555px",
    p: "50px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "20px",
    },
    height: "auto",
  },
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
    fontWeight: "600 !important",
    lineHeight: "48px !important",
    color: "#272522",
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
  },

  customerId: {
    fontWeight: "500 !important",
    lineHeight: "28px !important",
    color: "#88878F",
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

  customerPaidAmount: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    color: "#88878F !important",
    fontSize: "24px !important",
    lineHeight: "48px !important",
    textTransform: "capitalize !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px !important",
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
  serviceNameContainer: {
    backgroundColor: "#F0F0F0",
    borderRadius: "5px",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "87px",
      // height: "37px",
    },
    [theme.breakpoints.up("md")]: {
      width: "112px",
      // height: "49px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "6px",
    },
  },

  bookingsServicesName: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    // lineHeight: "36px !important",
    textTransform: "capitalize",
    // textAligin: "center",
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
    paddingTop: 5,
    paddingBottom: 7,
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
    color: "#999999 !important",
    fontFamily: "Fira Sans !important",
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: "20px !important",
    lineHeight: "24px !important",
    letterSpacing: "0.02em !important",
    marginTop: "58px !important",

    marginBottom: "91px !important",
    mx: "auto !important",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px !important",
    },
  },
  calenderDayText: {
    fontFamily: "Roboto !important",
    fontStyle: "normal ",
    fontWeight: "600 !important",
    lineHeight: "28px",
    textAlign: "center !important",
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em ",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "60px",
      fontSize: "73% !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "16px !important",
    },
  },
  nextDateIcon: {
    color: "#999999 !important",
    width: "120px",
    alignSelf: "center",
    height: "80px !important",
    [theme.breakpoints.down("sm")]: {
      width: "25px !important ",
      height: "76px !important",
    },
  },
  previousDateIcon: {
    color: "#999999 !important",
    width: "90px",
    height: "80px !important",
    // marginTop: "16px",
    alignSelf: "center",
    [theme.breakpoints.down("md")]: {
      width: "25px !important ",
      height: "76px !important ",
    },
  },
  iconContainer: {
    width: { sm: "80px !important", xs: "40px !important" },
    backgroundColor: "#fff !important",
    display: "flex !important",
    justifyContent: "center !important",
    height: "104px",
    [theme.breakpoints.down("sm")]: {
      height: "76px !important ",
    },
  },
});
