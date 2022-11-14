export const Styles: any = (theme: any) => ({
  buttonName: {
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1.25rem !important",
    lineHeight: "1.625rem !important",
    textTransform: "capitalize",
    color: "#88878f",
  },
  buttonContainer: {
    height: "6rem !important",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    borderRadius: "10px !important",
    border: "solid 1px #f0f0f0 !important",
    "&.MuiButton-root": {
      [theme.breakpoints.down("sm")]: {
        width: "100% !important",
      },
    },
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  bookingHisoryTitlle: {
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px !important",
    lineHeight: "50px",
    textTransform: "capitalize",
    color: "#000000",
  },
  tableHeading: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "46px !important",
    textTransform: "capitalize !important",
    color: "#272522 !important",
  },
  tableRow: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "46px !important",
    textTransform: "capitalize !important",
    color: "#88878f",
  },
  //mobileTable styling
  profileNameContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
  },
  profileName: {
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px !important",
    lineHeight: "48px",
    textTransform: "capitalize",
    color: "#272522",
    marginTop: "9px !important",
    marginLeft: "20px !important",
  },
  mobileTableColumnHeading: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "46px !important",
    textTransform: "capitalize !important",
    color: "#272522 !important",
  },
  mobileTableValue: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "46px !important",
    textAlign: "right !important",
    textTransform: "capitalize !important",
    color: "#88878F",
  },
  salonOwnerName: {
    lineHeight: "50px",
    textTransform: "capitalize",
    color: "#000000",
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: "600",
  },
  salonOwnerEmail: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: "0.02em",
    textTransform: "lowercase",
    color: "#88878F",
  },
  changePasscodeButton: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    letterSpacing: "0.02em !important",
    textDecorationLine: "underline !important",
    textTransform: "capitalize !important",
    color: "#FF0034 !important",
  },
  editBussinessDeatailsButton: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "16px !important",
    height: "57px !important",
    textAlign: "center !important",
    letterSpacing: "0.05em !important",
    textTransform: "capitalize !important",
    color: "#FFFFFF !important",
    backgroundColor: "#272522 !important",
    borderRadius: "5px !important",
    padding: "5px !important",
    m: 2,
    "&:hover": {
      backgroundColor: "#272522 !important",
    },
  },
  ownerLogoutButton: {
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "18px !important",
    lineHeight: "48px !important",
    textAlign: "center !important",
    letterSpacing: "0.02em !important",
    textTransform: "capitalize !important",
    background: "#E7A356 !important",
    borderRadius: "5px !important",
    color: "#FFFFFF !important",
    "&:hover": {
      backgroundColor: "#E7A356 !important",
    },
    m: "2 !important",
  },

  profilePagination: {
    "& .MuiPagination-root": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f0f0 !important",
      borderRadius: "5px !important",
      '@media only screen and (max-width: 600px) ': {
        width: "100%",
      }
    },
  },

  //  .MuiPaginationItem-root":
  paginationItem: {
    color: "#FFFFFF !important",
    backgroundColor: "black !important",
    fontFamily: '"Roboto" !important',
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "20px !important",
    lineHeight: "30px",
    letterSpacing: "0.01em !important",
    textTransform: "capitalize !important",
    height: "66px !important",
    width: "46px !important",
  },
  paginationItemText: {
    "& .MuiPaginationItem-rounded": {
      fontFamily: "Roboto !important",
      fontStyle: "normal !important",
      fontWeight: "500 !important",
      fontSize: "20px !important",
      lineHeight: "30px !important",
      letterSpacing: "0.01em !important",
      textTransform: "capitalize !important",
      color: "#A4A1A1 ",
    },
  },
  buttonsContainer: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    backgroundColor: "#FFFFFF",
    boxSizing: "border-box",
    boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.07)",
    borderRadius: "10px",
    height: "85px",
  },
  nlContainer: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    backgroundColor: "#FFFFFF",
    border: "2px solid #F0F0F0",
    borderRadius: "10px",
    height: "85px",
  },
  btnName: {
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1.25rem !important",
    lineHeight: "1.625rem !important",
    textTransform: "capitalize",
    color: "#88878f !important",
  },
  searchTableInput: {
    "@media screen and (min-width: 360px)": {
      width: "20.5rem",
    },
    "@media screen and (min-width: 375px)": {
      width: "21.5rem",
    },
    "@media screen and (min-width: 384px)": {
      width: "21.8rem",
    },
    "@media screen and (min-width: 412px)": {
      width: "23.8rem",
    },
    "@media screen and (min-width: 768px)": {
      width: "21.8rem",
    },
  },
});
