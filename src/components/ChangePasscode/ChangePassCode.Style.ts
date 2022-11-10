import { Theme } from "@mui/material";

export const ChangeProfileDetails: any = (theme: Theme) => ({
  editableDialogue: {
    "& .MuiDialog-paper": {
      backgroundColor: "transparent !important",
      borderRadius: "4px",
      boxShadow: "none !important",
      maxWidth: "150% !important",
      overflow: "hidden",
      padding: "16px 24px !important",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0 !important",
        marginRight: "0 !important",
        padding: "10px !important",
      },
    },
  },
  iconButton: {
    width: "35px !important",
    height: "35px !important",
  },
  changePasscode: {
    fontFamily: "Fira Sans !important",
    fontStyle: " normal !important",
    fontWeight: "700 !important",
    lineHeight: "48px !important",
    color: "#272522",
    fontSize: "24px !important",
  },
  mainBoxContainer: {
    backgroundColor: "#fff !important",
    marginTop: "30px !important",
    borderRadius: "5px !important",
    padding: "30px 25px !important",
  },
});
