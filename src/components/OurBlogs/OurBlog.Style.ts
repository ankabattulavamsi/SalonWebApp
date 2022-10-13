import theme from "../../Theme/Theme";

export const BlogStyles :any = {
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
    blogCard:{
        marginTop: '5% !important',
        paddingBottom: '50px !important',
        '&:hover':{
            boxShadow:'-5px 10px 70px 10px #efefef',
            borderRadius: '10px !important',
        }
    },
    blogCardTitle:{
        fontFamily: 'Fira Sans !important',
        fontStyle: 'normal',
        fontWeight: '600 !important',
        fontSize: '1.3rem !important',
        padding: '0px 5px 0px 5px',
        lineHeight: '48px',
        textAlign: 'center',
        letterSpacing: '0.02em',
        textTransform: 'capitalize',
        color: '#272522',
        marginTop: '18% !important',
    },
    blogCardText:{
        fontFamily: 'Roboto !important',
        fontStyle: 'normal',
        padding: '0px 15px 0px 15px',
        fontSize: '18px !important',
        lineHeight: '30px',
        textAlign: 'center',
        textTransform: 'lowercase',
        color: '#272522',
        opacity:0.5,
        marginTop: '6% !important',
    },
    blogDate:{
        fontFamily: 'Fira Sans !important',
        fontStyle: 'normal',
        fontWeight: '600 !important',
        fontSize: '28px !important',
        textAlign: 'center',
        letterSpacing: '0.02em',
        textTransform: 'capitalize',
    },
    blogMonth:{
        fontFamily: 'Fira Sans !important',
        fontStyle: 'normal',
        fontWeight: '500 !important',
        fontSize: '1rem !important',
        lineHeight: '38px',
        textAlign: 'center',
        letterSpacing: '0.02em',
        textTransform: 'capitalize',
    },
    // salon page style
    salonBlogTitleBox:{
        margin:'0 13% 0 13%',
        display:'flex', 
        alignItems:'center', 
        justifyContent:'space-between',
        [theme.breakpoints.up("xs")]:{
            display:'block',
            margin:'0 0 2% 4%',
        },
        [theme.breakpoints.up("sm")]:{
            margin:'0 4% 2% 4%',
            display:'flex', 
        },
        [theme.breakpoints.up("md")]:{
            margin:'0 13% 1% 13%',
            display:'flex', 
        },
    },
    salonBlogHeading:{
        fontFamily: 'Fira Sans !important',
        fontStyle: 'normal',
        fontWeight: '700 !important',
        fontSize: '35px !important',
        lineHeight: '48px',
        letterSpacing: '0.01em',
        textTransform: 'capitalize',
        color: '#272522',
    },
    salonBlogTitleLine:{
        width: "30px", 
        borderBottom: "5px solid #EBB273",
    },
    salonBlogCard:{
        marginTop: '5% !important',
        paddingBottom: '40px !important',
        '&:hover':{
            boxShadow:'-2px 10px 20px 10px #efefef',
            borderRadius: '10px !important',
            background:'#fff'
        }
    },
    salonBlogCardTitle:{
        fontFamily: 'Fira Sans !important',
        fontStyle: 'normal',
        fontWeight: '600 !important',
        fontSize: '1.3rem !important',
        padding: '0px 5px 0px 5px',
        lineHeight: '48px',
        textAlign: 'center',
        letterSpacing: '0.02em',
        textTransform: 'capitalize',
        color: '#272522',
        marginTop: '14% !important',
    },
    salonBlogCardText:{
        fontFamily: 'Roboto !important',
        fontStyle: 'normal',
        padding: '0px 15px 0px 15px',
        fontSize: '18px !important',
        lineHeight: '30px',
        textAlign: 'center',
        textTransform: 'lowercase',
        color: '#272522',
        opacity:0.5,
        marginTop: '4% !important',
    },
    salonEditBtn:{
        borderRadius:'10px 0% 0% 10px !important',
        width:'35%',
        textTransform:'capitalize !important',
        fontSize:'1rem !important',
        padding:'15px 0 15px 0 !important',
        '&:hover':{
        background:'#E7A356 !important',
        color: '#fff !important',
        },
        [theme.breakpoints.up("sm")]:{
            width:'40%',
        },
        [theme.breakpoints.down("md")]:{
            width:'45%',
        },
        [theme.breakpoints.only("md")]:{
            width:'45%',
            fontSize:'.8rem !important',
            padding:'20px 0 20px 0',
        }
    },
    salonDelBtn:{
        borderRadius:'0 10px 10px 0 !important',
        width:'35%',
        textTransform:'capitalize !important',
        fontSize:'1rem !important',
        borderLeft:'1px solid #d7d9db !important',
        padding:'15px 0 15px 0 !important',
        '&:hover':{
        background:'#272522 !important',
        color: '#fff !important',
        },
        [theme.breakpoints.up("sm")]:{
            width:'40%',
        },
        [theme.breakpoints.down("md")]:{
            width:'45%',
        },
        [theme.breakpoints.only("md")]:{
            width:'48%',
            fontSize:'.8rem !important',
            padding:'20px 0 20px 0',
        }
    }
    // edit modal css 
    // editFeilds:{
    //     font-family: 'Roboto';
    //     font-style: normal;
    //     font-weight: 500;
    //     font-size: 17px;
    //     line-height: 30px;
    // }
}