export const styles:any = {
    categoryBox:{
        margin: "100px 0",
        paddingTop: "39px",
        '@media screen and (max-width: 600px)': {
            margin: "10px 0",
            paddingBottom: "50px",
        },
    },
    categoryTitleBox:{
        display: 'flex',
        justifyContent: 'space-between',
        '@media screen and (max-width: 600px)': {
            display: 'block',
        },
        '& h2':{
            fontFamily: 'Fira Sans',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '35px',
            lineHeight: '48px',
            color: "#272522",
            position: 'relative',
            '@media screen and (max-width: 600px)': {
                fontSize: '32px',
            },
            '&::after':{
                content: " '' ",
                width: '29px',
                height: '5px',
                background: '#EBB273',
                position: 'absolute',
                top: '50px',
                left: '0'
            }
        },
        '& button':{
            background: "#272522",
            fontFamily: 'Fira Sans',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '22px',
            textTransform: 'capitalize',
            color: '#FFFFFF',
            padding: '18px 30px',
            borderRadius: '8px',
            '&:hover':{
                background: '#272522',
            },
            '@media screen and (max-width: 600px)': {
                marginTop: '25px',
            },
        }
    },
    categoryImage:{
        width: '100%',
        height: '215px'
    },
    categoryImageBox:{
        marginTop: '0 !important'
    },
    categoryContent:{
        '& p':{
            marginLeft: '14px',
            fontFamily: 'Fira Sans',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '48px',
            color: '#272522',
        }
    },
    categoryButton:{
        padding: '0 20px 30px !important',
        '& button':{
            color: '#88878F',
            background: '#F0F0F0',
            fontFamily: 'Fira Sans',
            fontStyle: 'normal',
            fontWeight: '600',  
            fontSize: '20px',
            lineHeight: '30px',
            textTransform: 'capitalize',
            padding: '19px 49px 21px 47px',
            width: '160px',
            borderRadius: '0',
            marginLeft: '0 !important',
            '@media screen and (max-width: 600px)': {
                fontSize: '18px',
            },
        },
        '& :nth-child(1)':{
            borderRadius: '10px 0 0 10px',
            borderRight: "1px solid #88878F"
        },
        '& :nth-child(2)':{
            borderRadius: '0 10px 10px 0'
        },
        '& :nth-child(1):hover':{
            background: '#E7A356',
            color: '#FFFFFF',
            borderRadius: '10px 0 0 10px',  
            '& svg:hover':{
                background: 'none',
            }
        },
        '& :nth-child(2):hover':{
            background: '#272522',
            color: '#FFFFFF',
            borderRadius: '0 10px 10px 0',
            '& svg:hover':{
                background: 'none',
            }
        },
        '& svg':{
            marginRight: '8px',
            borderRight: "none !important"
        }
    },
    categoryCard:{
        boxShadow:  'none !important',
        '&:hover':{
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.07) !important'
        },
        '& span':{
           opacity: '0 !important',
        }
    },
    
}