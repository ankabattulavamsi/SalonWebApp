export const Styles: any = (theme: any) => ({
  scheduleAppointment: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "22px !important",
    lineHeight: "48px !important",
    textTransform: "capitalize !important",
    color: "#272522 !important",
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
    width: "165px",
    height: "50px",
    outline: "none",
    border: "none",
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
    color: "#88878F !important",
    width: "100px",
    height: "54px",
    display: "flex !important",
    alignContent: "center !important",
    justifyContent: "center !important",
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
  },
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
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px !important",
    lineHeight: "48px",
    textAlign: "center",
    textTransform: "capitalize",
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
});
