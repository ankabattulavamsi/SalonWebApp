
export const CommonButtonEditDelete: any = (theme: any) => ({
  EditButton: {
    color: '#fff',
    background: '#F0F0F0',
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: "600",
    // fontSize: "20px",
    lineHeight: "30px",
    /* or 150% */

    textAlign: "center",
    // textTransform: "capitalize",
    
    // borderRadius: "10px",
    borderRadius: "10px 0% 0% 10px !important",
		width: "100%",
		textTransform: "capitalize !important",
		fontSize: "1rem !important",
		// padding: "15px 0 15px 0 !important",
		"&:hover": {
			background: "#E7A356 !important",
			color: "#fff !important",
		},
		[theme.breakpoints.up("sm")]: {
			width: "40%",
		},
		[theme.breakpoints.down("md")]: {
			width: "45%",
		},
		[theme.breakpoints.only("md")]: {
			width: "45%",
			fontSize: ".8rem !important",
			padding: "20px 0 20px 0",
		},
  },
  DeleteButton: {
    color: '#fff',
    background: '#F0F0F0',
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: "600",
    // fontSize: "18px",
    lineHeight: "30px",
    /* or 150% */

    textAlign: "center",
    // textTransform: "capitalize",
    borderRadius: "0 10px 10px 0 !important",
		width: "100%",
		textTransform: "capitalize !important",
		fontSize: "1rem !important",
		borderLeft: "1px solid #d7d9db !important",
		// padding: "15px 0 15px 0 !important",

		"&:hover": {
			background: "#272522 !important",
			color: "#fff !important",
		},
		[theme.breakpoints.up("sm")]: {
			width: "40%",
		},
		[theme.breakpoints.down("md")]: {
			width: "45%",
		},
		[theme.breakpoints.only("md")]: {
			width: "48%",
			fontSize: ".8rem !important",
			padding: "20px 0 20px 0",
		},
  },
});
