export const Styles: any = (theme: any) => ({
  scheduleAppointment: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "22px !important",
    lineHeight: "48px !important",
    textTransform: "capitalize !important",
    color: "#272522 !important",

    [theme.breakpoints.down("sm")]: {
      fontWeight: "600 !important",
      fontSize: "26px !important",
      marginTop: "10px !important",
    },
  },
  monthNameBox: {
    fontFamily: "Roboto !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "30px !important",
    letterSpacing: "0.01em !important",
    textTransform: "capitalize !important",
    color: "#88878F !important",
    backgroundColor: "#F8F8F8 !important",
    borderRadius: "5px",
    width: "165px",
    height: "50px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px !important",
    },
  },
  monthName: {
    fontFamily: "Roboto !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "30px !important",
    letterSpacing: "0.01em !important",
    textTransform: "capitalize !important",
    color: "#88878F !important",
  },

  AppointmentHeadingContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px !important",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  availableSlot: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "20px !important",
    lineHeight: "48px !important",
    textTransform: "capitalize !important",
    color: "#272522 !important",
  },
  appointmentTime: {
    fontFamily: "Roboto !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "16px !important",
    lineHeight: "28px !important",
    textTransform: "capitalize !important",
    color: "#88878F",
    width: "115px !important",
    height: "54px",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#E7A356 ",
      color: "#fff !important",
    },
    display: "flex !important",
    alignContent: "center !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    borderRadius: "10px",
  },
  AppointmentBox: {
    display: "flex !important",
    alignContent: "center !important",
    alignItems: "center !important",
  },
  appointmentTimeTitle: {
    fontFamily: "Roboto !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "16px !important",
    lineHeight: "28px !important",
    textTransform: "capitalize !important",
    color: "#88878F !important",
    display: "flex !important",
    alignContent: "center !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    letterSpacing: "1.5px",
  },
  scroller: {
    overflowY: "scroll",
    [theme.breakpoints.up("sm")]: {
      overflowY: "hidden",
    },
  },
  continueButton: {
    backGroundColor: "#E7A356 !important",
    borderRadius: "5px !important",
    width: "292px",
    height: "70px",
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "700 !important",
    fontSize: "20px !important",
    textAlign: "center ",
    letterSpacing: "0.02em !important",
    textTransform: "uppercase !important",
    color: "#fff !important",
    marginTop: "20px !important",
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  // dateTime: {
  //   width: '115px !important',
  //   Margin: '10px !important'
  // }
  selectYourStylish: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "20px !important",
    lineHeight: "48px !important",
    textTransform: "capitalize !important",
    color: "#272522 !important",
  },
  employeeName: {
    fontFamily: "Roboto !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "16px !important",
    lineHeight: "48px !important",
    textAlign: "center !important",
    textTransform: "capitalize !important",
    color: "#88878F !important",
  },
});
