export const NotificationStyles: any = {
  MainDialogBox: {
    width: "395px",
    height: "700px",

    "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
      position: "fixed",
      top: "45px",
      right: "65px",
      width: "390px",
      height: "600px",
      overflowX: "hidden",

      "@media only screen and (max-width: 660px) ": {
        position: "fixed",
        top: "45px",
        right: "-32px",
        width: "100%",
        height: "766px",
      },
    },
  },
  DialogTitleBox: {
    width: "390px",
    height: "62px",
  },
  listItemNotification: {
    "& .css-lxljjk-MuiListItem-root": {
      padding: "0px",
    },
  },
  listItemNotificationText: {
    marginLeft: "10px",
    "& .css-7v2efm-MuiTypography-root": {
      fontFamily: "Fira Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "17px",
      lineHeight: "22px",
      textTransform: "capitalize",
      color: " #272522",
    },
    "& .css-14boj9e-MuiTypography-root": {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "15px",
      lineHeight: "30px",
      textTransform: "uppercase ",
      color: " #272522",
    },
  },
};
