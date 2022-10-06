import theme from "../../Theme/Theme";

export const Styles: any = {
    specialist: {
        margin: "40px 180px",
        [theme.breakpoints.down("md")]: {
           margin: "40px",
        },
    },
    CardItems: {
        display: "flex",
        flexDirection: "row !important",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop:"50px"
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
        left:'48%', 
        top:'50%',
        borderBottom: "5px solid #EBB273",
    },
    specialistHeading: {
        display: "flex",
        justifyContent: "space-between !important",
        alignItems: "center !important"
    }

}