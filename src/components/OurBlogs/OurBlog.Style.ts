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
    blogCard:{
        borderRadius: '0px !important',
        boxshadow:'0px',
        '&:hover':{
            background:'#fff',
            boxshadow:'0px 90px 10px 0px rgba(0, 0, 0, 0.5) !important',
            borderRadius: '10px !important',
        }
    },
    blogCardTitle:{
        fontFamily: 'Fira Sans !important',
        fontStyle: 'normal',
        fontWeight: '600 !important',
        fontSize: '24px !important',
        lineHeight: '48px',
        textAlign: 'center',
        letterSpacing: '0.02em',
        textTransform: 'capitalize',
        color: '#272522',
    },
    blogCardText:{
        fontFamily: 'Roboto !important',
        fontStyle: 'normal',
        // fontWeight: '400 !important',
        fontSize: '18px !important',
        lineHeight: '30px',
        textAlign: 'center',
        textTransform: 'lowercase',
        color: '#272522',
        opacity:0.5,

    }
}