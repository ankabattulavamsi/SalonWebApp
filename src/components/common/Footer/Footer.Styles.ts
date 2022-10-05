import theme from "../../../Theme/Theme";

export const Styles:any = {
    footerText:{
        color: '#939290',
        fontFamily: 'Roboto',
        fontStyle:'normal',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '32px',
        letterSpacing: '0.01em',
        textTransform: 'lowercase',
        marginTop:'8% !important'
    },
    footerHeading:{
        color:'#fff',
        fontFamily: 'Fira Sans !important',
        fontStyle:'normal',
        fontWeight: 700,
        fontSize: '26px !important',
        lineHeight: '48px',
        letterSpacing: '0.01em',
        textTransform: 'capitalize',
    },
    CopyRightstext:{
        textAlign:'center',
        fontFamily: 'Fira Sans !important',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '22px !important',
        lineHeight: '48px',
        textTransform: 'capitalize',
        color:'#fff'
    },
    infoBox:{
        display:'flex', 
        alignItems:'center', 
        justifyContent:'left',
        marginBottom: '4%'
    },
    infoIcons:{
        marginRight: '8%',
        color:'#939290'
    },
    infoText:{
        fontFamily: 'Roboto',
        fontStyle:'normal',
        fontWeight: 500,
        fontSize: '18px !important',
        lineHeight: '34px',
        textTransform: 'lowercase',
        color: '#939290',
    },
    servicesList:{
        fontFamily: 'Roboto !important',
        fontStyle:'normal',
        fontWeight: 500,
        fontSize: '18px !important',
        lineHeight: '50px',
        letterSpacing: '0.01em',
        textTransform: 'capitalize',
        color: '#939290',
        cursor: 'pointer',
    },
    socialmedia:{
        marginTop:'10%',
        width: '60%',
        display:'flex',
        alignItems:'center', 
        justifyContent:'space-around'
    },
    socialBox:{
        backgroundColor:'#353331',
        padding: '8px 15px 8px 15px', 
        borderRadius:'4px'
    },
    salonFooterText:{
        color: '#939290',
        fontFamily: 'Roboto !important',
        fontStyle:'normal',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '32px',
        letterSpacing: '0.01em',
        textTransform: 'lowercase',
        marginTop:'4% !important',
        textAlign:'center',
    },
    salonSocialmedia:{
        marginTop:'5%',
        width: '20%',
        display:'flex',
        alignItems:'center', 
        justifyContent:'space-around',
        [theme.breakpoints.up("xs")]:{
            width:'80%',
            marginTop:'10%',
        },
        [theme.breakpoints.up("sm")]:{
            width:'30%',
            marginTop:'5%',
        },
        [theme.breakpoints.only("md")]:{
            width:'25%',
            marginTop:'5%',
        },
        [theme.breakpoints.up("lg")]:{
            width:'18%',
            marginTop:'5%',
        }
    },

}