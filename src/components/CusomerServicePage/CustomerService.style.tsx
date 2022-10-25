export const Style = {
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
        '& div':{
            '@media screen and (max-width: 600px)': {
                marginTop: '25px',
            },
        },
        '& button':{
            textTransform: 'capitalize',
            padding: '15px 0px',
        }
    },
}