/** @format */

export const NotificationStyles: any = {
  MainDialogBox: {
    // width: "395px",
    height: "763px",
    "& .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop": {
      backgroundColor: "transparent",
    },
    "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
      position: "fixed",
      top: "43px",
      right: "10px",
      width: "390px",
      height: "600px",
      overflowX: "hidden",

      background: "#fff !important",
      boxShadow: "4px 4px 50px rgba(0, 0, 0, 0.15) !important",
      borderRadius: " 0px 0px 5px 5px",

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
    width: "100%",
    height: "62px",
  },
  listItemNotificationBox: {
    "&::-webkit-scrollbar": {
      width: "5px!important",
    },
    "&::-webkit-scrollbar-thumb": {
      width: "0.5px !important",
      background: "#27252233",

      borderRadius: "5px",
    },
  },
  listItemNotification: {
    "& .css-lxljjk-MuiListItem-root": {
      padding: "0px",
    },
  },
  listItemNotificationText: {
    marginLeft: "10px",
    "& .MuiListItemText-primary": {
      fontFamily: "Fira Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "17px",
      lineHeight: "22px",
      textTransform: "capitalize",
      color: " #272522",
    },
    "& .MuiTypography-body1": {
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
