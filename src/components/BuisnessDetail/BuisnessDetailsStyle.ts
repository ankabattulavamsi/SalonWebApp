import { Theme } from "@mui/material";
import { createStyles } from "@mui/styles";

export const BusinessStyles: any = (theme: Theme) =>
  createStyles({
    busText: {
      fontFamily: "Fira Sans !Important",
      fontStyle: " normal !Important",
      fontWeight: "700 !Important",
      fontSize: "30px !Important",

      lineHeight: "48px !Important",
      textTransform: "capitalize",
      color: "#272522 !Important",
      ml: "2 !Important",
      marginTop: "20px !Important",
    },
    " @media (max-width: sm)": {
      busText: {
        background: "red",
      },
    },
    profilelabelText: {
      fontFamily: "Fira Sans !Important",
      fontStyle: "normal !Important",
      fontWeight: "600 !Important",
      fontSize: "18px !Important",
      lineHeight: "30px !Important",
      letterSpacing: " 0.01em !Important",
      textTransform: "capitalize",
      color: "#272522 !Important",
    },

    boxinput: {
      position: "relative",
      width: "70%",
    },
    btnCloud: {
      fontFamily: "Fira Sans !important",
      fontStyle: "normal",
      fontWeight: "600 !important",
      fontSize: "16px !important",
      lineHeight: "30px",
      letterSpacing: "0.01em",
      textTransform: "capitalize",
      color: " #A4A1A1 !important",
      display: "flex",
      justifyContent: "center",
      gap: 5,
      alignItem: "center",
      position: "absolute",
      top: 10,
      left: 5,
      backgroundColor: "#F0F0F0 !important",
      borderRadius: "5px !important",
      zIndex: 0,
      width: "100%",

      opacity: "1",
    },
  });
