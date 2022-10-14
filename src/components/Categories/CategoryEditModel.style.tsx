export const style ={
    editmodelBox:{
        color: 'black',
        width: '680px',
        height: 'auto',
        margin: '0 auto',
        top: '30% !important',
        '& img':{
            width: '100%',
            height: '100%'
        },
        '@media screen and (max-width:1024px)':{
            top: '20% !important',
        },
        '@media screen and (max-width:900px)':{
            width: '400px',
            top: '10% !important',
        },
        '@media screen and (max-width:768px)':{
            width: '400px',
            top: '11% !important',
        },
        '@media screen and (max-width:576px)':{
            width: '300px',
            top: "20% !important",
        }
    },
    mainEditbox:{
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '30px',
        
        '@media screen and (max-width:576px)':{
            padding: '12px',
        }
    },
    editcontentbox:{
        padding: '40px 30px',
        '& h3':{
            paddingBottom: '15px'
        }
    },
    editInputfield:{
        width: '100%',
        color: 'black',
    },
    editButtonBox:{
        paddingTop: '15px',
        '& button':{
            border: '1px solid #E7A356',
            padding: '5px 13px !important',
            marginRight: '15px',
            borderRadius: '10px',
            width: '100px',
            marginTop: '10px',
            fontSize: '16px',
            '@media screen and (max-width:576px)':{
                width: '90px',
            }
        },
        '& button:hover':{
            background: '#E7A356',
            color: '#ffffff',
            transition: '0.5s'
        }
    },
    uploadImgBox:{
        marginLeft: '0!important',
        width: '100% !important',
        
    },
    uplaodmiddleBox:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#F0F0F0',
        paddingLeft: '0 !important',
        '@media screen and (max-width:900px)':{
            padding: '30px 0',
        },
        '@media screen and (max-width:768px)':{
            padding: '30px 0',
        }
    },
    browseBox:{
        textAlign: 'center' as 'center',
        '& h6':{
            color: '#272522',
            fontSize: '16px',
            fontWeight: 'bold',
            margin: '10px 0'
        },
        '& p':{
            color: '#A4A1A1',
            fontSize: '14px',
            '@media screen and (max-width:768px)':{
                fontSize: '13px',
            }
        },
        '& svg':{
            color: '#6495edba',
            fontWeight: 'bold',
        }
    },
    fileInputHide :{
        opacity: "0",
        zIndex: '10',
        width: '50%',
        position: 'absolute' as 'absolute',
        top: '100px',
        left: '10px',
        padding: '6px 8px',
        minHeight: '64px',
      }
}
 