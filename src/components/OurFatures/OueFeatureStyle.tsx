export const style = {
    feature_info_section:{
        padding: "55px 0 46px",
        ['@media screen and (max-width: 900px)']: {
            padding: '37px 0 46px',
        }
    },
    feature_content_section:{
        paddingRight: '30px',
        ['@media screen and (max-width: 900px)']: {
            padding: '0',
        }
    },
    feature_imageBox_section:{
        padding: "3px 0 0",
        display: "flex",
        justifyContent: "flex-end",
        ['@media screen and (max-width: 900px)']: {
            paddingTop: '57px',
        },
        "& img":{
            ['@media screen and (max-width: 900px)']: {
                width: "100%",
            },
        }
    },
    feature_title_section:{
        "& h4":{
            fontFamily: "Fira sans",
            fontWeight: "700",
            fontSize: "35px",
            lineHeight: "48px",
            textAlign: "left",
            letterSpacing: "-1px",
            color: "#272522",
            textTransform: 'capitalize',
            position: "relative",
            "&::after":{
                content: ' "" ',
                width: "27px",
                height: "6px",
                background: "#EBB273",
                position: "absolute",
                top: "54px",
                left: "0px"
            },
            ['@media screen and (max-width: 576px)']: {
                fontSize: '32px',
                lineHeight: "48px",
            }
        }
    },
    feature_paraLg_section:{
        "& p":{
            color: "#88878F",
            fontFamily: "Roboto",
            fontWeight: '400',
            fontStyle: "normal",
            fontSize: '18px',
            lineHeight: "30px",
            verticalAlign: 'top',
            marginTop: "30px",
            maxWidth: "91%",
            ['@media screen and (max-width: 900px)']: {
                maxWidth: "100%",
            },
            ['@media screen and (max-width: 576px)']: {
                marginBottom: "25px",
                fontSize: '16px',
                lineHeight: "28px",
            }
        }
        
    },
    feature_paraSm_section:{
        "& p":{
            color: "#88878F",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontSize: '18px',
            lineHeight: "30px",
            verticalAlign: 'top',
            margin: "45px 0",
            maxWidth: "91%",
            ['@media screen and (max-width: 900px)']: {
                maxWidth: "100%",
            },
            ['@media screen and (max-width: 576px)']: {
                display: "none"
            }
        }
        
    },
    feature_iconBox_section:{
        display: "flex",
        ['@media screen and (max-width: 576px)']: {
            paddingBottom: "20px"
        },
        "& img":{
            width: '56px',
            height: "66px",
            marginRight: "30px",
        },
        "& h3":{
            fontFamily: "Fira sans",
            fontWeight: "bolder",
            fontSize: "18px",
            lineHeight: "28px",
            textAlign: "left",
            letterSpacing: "0.5px",
            color: "#272522",
            margin: "19px 0"
        }
    }
}