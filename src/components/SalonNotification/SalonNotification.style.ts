/** @format */
import theme from "../../Theme/Theme";

export const NotificationStyles: any = {
  MainDialogBox: {
    // width: "395px",
    // height: "763px",
    "& .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop": {
      backgroundColor: "transparent",
    },
    "& .MuiDialog-paper": {
      position: "fixed",
      top: "43px",
      right: "10px",
      width: "390px",
      height: "600px",
      overflowX: "hidden",
      background: "#fff !important",
      boxShadow: "4px 4px 50px rgba(0, 0, 0, 0.15) !important",
      borderRadius: " 0px 0px 5px 5px",

      [theme.breakpoints.down("sm")]: {
        position: "fixed",
        top: "148px",
        width: "100%",
        height: "766px",
        margin: "0px !important",
        right: "0px !important",
      },
      [theme.breakpoints.down("md")]: {
        position: "fixed",
        top: "148px",
        margin: "0px !important",
        right: "0px !important",
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
    // "& .MuiListItem-root": {
    //   padding: "0px",
    // },
  },
  listItemNotificationText: {
    marginLeft: "10px",
  },
};
