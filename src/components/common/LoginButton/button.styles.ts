/** @format */

import { makeStyles } from "@mui/styles";
import theme from "../../../Theme/Theme";
export const useStyles = makeStyles({
  btnSec: {
    display: "inline-block !important",
    [theme.breakpoints.down("lg")]: {
      marginBottom: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: "0px",
      display: "flex !important",
    },
    [`& button`]: {
      color: "white",
      width: "100%",
      padding: "15px 20px",
      background: "#E7A356",
      "&:hover": {
        background: "#E7A356",
        color: "white",
      },
    },
  },
});
