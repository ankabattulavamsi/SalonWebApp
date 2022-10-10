import theme from "../../Theme/Theme";

export const Styles: any = {
    specialist: {
        // margin: "40px 180px",
        [theme.breakpoints.down("lg")]: {
        //    margin: "40px !important",
        },
    },
    CardItems: {
        display: "flex",
        flexDirection: "row !important",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "50px",
        [theme.breakpoints.down("lg")]: {
            display: "grid !important",
            gridTemplateColumns: "repeat(2 , 1fr) !important",
            gridGap: "10px !important",
            margin: "30px auto"
        },
        [theme.breakpoints.down("sm")]: {
            display: "none !important",
          
         },
    },
    carouselSec: {
        margin:"40px 0 !important",
        [theme.breakpoints.up("sm")]: {
            display: "none !important", 
         },
    },
    blogHeading:{
        fontFamily: 'Fira Sans !important',
        fontStyle: 'normal',
        fontWeight: '700 !important',
        fontSize: '35px !important',
        lineHeight: '48px',
        textAlign: 'center',
        letterSpacing: '0.01em',
        textTransform: 'capitalize',
        color: '#272522',
    },
    blogTitleLine:{
        position:'relative',
        width: "30px", 
        left:'0%', 
        top:'50%',
        borderBottom: "5px solid #EBB273",
    },
    specialistHeading: {
        display: "flex",
        justifyContent: "space-between !important",
        alignItems: "center !important",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column !important",
            alignItems: "start !important",
         },
    },
    teamButton: {
        background: "#000 !important",
        color: "white !important",
        textTransform: "capitalize !important",
        padding: "16px 32px !important",
        borderRadius: "10px !important",
        [theme.breakpoints.down("sm")]: {
            marginTop:"20px !important"
         },
    }

}