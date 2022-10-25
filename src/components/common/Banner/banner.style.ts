import { color } from "@mui/system"
import theme from "../../../Theme/Theme"

export const Styles: any = {
    titleText: {
        fontFamily: "Fira Sans !important",
        fontStyle: "normal !important",
        fontWeight: "700 !important",
    
        lineHeight: "48px !important",
    
        textTransform: "capitalize !important",
        fontSize: "35px !important",
    
        // color: "#272522 !important",
    
        [theme.breakpoints.down("md")]: {
          fontSize: "30px !important",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "35px !important",
        },
    },
    lakmeServeBtn: {
        textTransform: "capitalize !important",
        margin: "auto !important",
        lineHeight: "40px",
        fontWeight:"500",
        color: '#88878F !important',
        backgroundColor: '#F0F0F0 !important', 
        '&:hover': {
          backgroundColor: '#E7A356 !important', 
          color: '#fff !important',
        }
      },

      otherServeBtn : {
        textTransform: "capitalize !important",
        margin: "auto !important",
        lineHeight: "40px",
        fontWeight:"500",
        marginLeft: '6px !important', 
        color: '#88878F !important',
        backgroundColor: '#F0F0F0 !important', 
        '&:hover': {
          backgroundColor: '#E7A356 !important', 
          color: '#fff !important',
        }
      }
}