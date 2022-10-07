/** @format */

import { Button, Stack } from "@mui/material";
// import { icon } from "leaflet";
import React from "react";
import { useStyles } from "./button.styles";

interface IProps {
	title: string;
	icon?: React.ReactNode;
	onClick?: any;
}

const LoginButton: React.FC<IProps> = ({ title, icon, onClick }) => {
	const classes = useStyles();
	return (
		<Stack className={classes.btnSec}>
			<Button onClick={onClick} startIcon={icon} variant="text">
				{title}
			</Button>
		</Stack>
	);
};

export default LoginButton;
