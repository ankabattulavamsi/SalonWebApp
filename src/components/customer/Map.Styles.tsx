import { makeStyles } from "@mui/styles";
import theme from "../../Theme/Theme";

export const useStyles = makeStyles({
  map: {
    width: "100%",
    height: "430px",
    margin: "auto",
    borderRadius: "10px",
    "& .leaflet-top, .leaflet-bottom": {
      zIndex:0, 
      //or 999
    },
    [theme.breakpoints.down(600)]: {
      display: "none",
    },
  },
  mapTooltip: {
    "& .leaflet-popup-content-wrapper, .leaflet-popup-tip": {
      background: "#272522",
      color: "#fff",
      borderRadius: " 15px 15px 15px 15px",
      textAlign: "center",
    },
  },
});
