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
    capitalized: {
        textTransform: "capitalize !important",
        margin: "auto !important",
        lineHeight: "40px",
        fontWeight:"500"
        
      },
}