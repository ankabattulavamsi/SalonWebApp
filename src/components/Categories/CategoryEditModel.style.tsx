export const style ={
    editmodelBox:{
        width: '680px',
        height: 'auto',
        margin: '0 auto',
        top: '30% !important',
        overflowY: 'scroll' as 'scroll',
        '& img':{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        '@media screen and (max-width:1024px)':{
            top: '20% !important',
        },
        '@media screen and (max-width:900px)':{
            width: '400px',
            top: '5% !important',
        },
        '@media screen and (max-width:768px)':{
            width: '400px',
            top: '9% !important',
        },
        '@media screen and (max-width:576px)':{
            width: '300px',
            top: "15% !important",
        }
    },
    mainEditbox:{
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '30px',
        '@media screen and (max-width:768px)':{
            padding: '15px',
        },
    },
    editcontentbox:{
        padding: '40px 30px',
        '& h3':{
            paddingBottom: '15px',
            fontSize: '22px'
        },
        '@media screen and (max-width:576px)':{
            padding: '10px',
            paddingLeft: '10px !important'
        }
    },
    editInputfield:{
        width: '100%',
        color: 'black',
    },
    editButtonBox:{
        paddingTop: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        '& button':{
            padding: '8px 13px !important',
            borderRadius: '5px',
            width: '120px',
            marginTop: '10px',
            fontSize: '16px',
            '@media screen and (max-width:576px)':{
                width: '90px',
            }
        },
        '& :nth-child(1)':{
            background: '#E7A356',
            color: '#ffffff',
            '& span, & svg':{
                background: 'transparent !important',
            }
        },
        '& :nth-child(2)':{
            background: '#272522',
            color: '#ffffff',
            '& span':{
                background: 'transparent',
            }
        },
        '& :nth-child(1):hover':{
            background: '#272522',
            color: '#ffffff',
            transition: '0.5s'
        },
        '& :nth-child(2):hover':{
            background: '#E7A356',
            color: '#ffffff',
            transition: '0.5s',
            '& :nth-child(1)':{
                background: 'transparent',
            }
        }
    },
    uplaodmiddleBox:{
        '@media screen and (max-width:1024px)':{
            paddingLeft: '0 !important',
        },
        '& .upload':{
            '@media screen and (max-width:900px)':{
                marginRight: '0 !important'
            },
        },
    },
    uploadImgBox:{
        marginLeft: '0!important',
        width: '100% !important',
    },
}
 