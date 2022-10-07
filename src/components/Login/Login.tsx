/** @format */

import React, { Component } from "react";
import {
	Box,
	Button,
	ButtonGroup,
	Drawer,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Styles } from "./Login.style";
import { withStyles } from "@mui/styles";
import "./login.css";
import CustomerLogin from "./CustomerLogin";
import SalonLogin from "./SalonLogin";
import { navSate } from "../common/Navbar/Navbar";
interface LoginProps {
	open: boolean;
	onClose: any;
	handleLogin: (type?: string) => void;
	handleCustomerLogin?: () => void;
	handleSalonLogin?: () => void;
	classes: any;
	state: navSate;
}
interface State {}
class Login extends Component<LoginProps, State> {
	state: State = {};

	render() {
		const {
			classes,
			open,
			handleLogin,
			onClose,
			handleCustomerLogin,
			handleSalonLogin,
			state,
		}: LoginProps = this.props;
		return (
			<Drawer anchor="right" open={open} onClose={onClose}>
				<Box className="drawerSize" role="presentation">
					<CloseIcon style={{ cursor: "pointer" }} onClick={onClose} />
					<Typography className={classes.heading} variant="h2">
						Login
					</Typography>
					<ButtonGroup
						className={classes.button_group}
						variant="outlined"
						aria-label="outlined button group">
						<Button
							onClick={handleCustomerLogin}
							className={
								this.props.state.IsCustomerLogin
									? "buttons customer"
									: "buttons"
							}>
							I Am Customer
						</Button>
						<Button
							sx={{ borderleft: "1px solid black !important" }}
							onClick={handleSalonLogin}
							className={
								state.IsSalonLogin ? "buttons customer" : "buttons"
							}>
							Salon
						</Button>
						<div
							className={
								state.IsCustomerLogin
									? "traingle-sec"
									: state.IsSalonLogin
									? "traingle-sec1"
									: ""
							}>
							<p className="traingle"></p>
						</div>
					</ButtonGroup>
					{state.IsCustomerLogin ? (
						<CustomerLogin handleLogin={handleLogin} />
					) : state.IsSalonLogin ? (
						<SalonLogin handleLogin={handleLogin} />
					) : (
						<CustomerLogin handleLogin={handleLogin} />
					)}
					{/* {state.IsSalonLogin ? <SalonLogin /> : <CustomerLogin />} */}
				</Box>
			</Drawer>
		);
	}
}

export default withStyles(Styles)(Login);
