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
interface LoginProps {
	open: boolean;
	onClose: any;
}
interface State {
	IsCustomerLogin: boolean;
	IsSalonLogin: boolean;
}
class Login extends Component<LoginProps, State> {
	state: State = {
		IsCustomerLogin: true,
		IsSalonLogin: false,
	};
	handleCustomerLogin = () => {
		console.log("customer");
		this.setState({
			IsCustomerLogin: true,
			IsSalonLogin: false,
		});
		console.log(this.state.IsCustomerLogin, "IsCustomerLogin from func");
	};
	handleSalonLogin = () => {
		this.setState({
			IsCustomerLogin: false,
			IsSalonLogin: true,
		});
	};
	render() {
		console.log(this.state.IsCustomerLogin, "IsCustomerLogin");
		const { classes }: any = this.props;
		return (
			<Drawer
				anchor="right"
				open={this.props.open}
				onClose={this.props.onClose}>
				<Box className="drawerSize" role="presentation">
					<CloseIcon
						style={{ cursor: "pointer" }}
						onClick={this.props.onClose}
					/>
					<Typography className={classes.heading} variant="h2">
						Login
					</Typography>
					<ButtonGroup
						className={classes.button_group}
						variant="outlined"
						aria-label="outlined button group">
						<Button
							onClick={this.handleCustomerLogin}
							className={
								this.state.IsCustomerLogin ? "buttons customer" : "buttons"
							}>
							I Am Customer
						</Button>
						<Button
							sx={{ borderleft: "1px solid black !important" }}
							onClick={this.handleSalonLogin}
							className={
								this.state.IsSalonLogin ? "buttons customer" : "buttons"
							}>
							Salon
						</Button>
						<div
							className={
								this.state.IsCustomerLogin
									? "traingle-sec"
									: this.state.IsSalonLogin
									? "traingle-sec1"
									: ""
							}>
							<p className="traingle"></p>
						</div>
					</ButtonGroup>
					{this.state.IsCustomerLogin ? (
						<CustomerLogin />
					) : this.state.IsSalonLogin ? (
						<SalonLogin />
					) : (
						<CustomerLogin />
					)}
					{/* {this.state.IsSalonLogin ? <SalonLogin /> : <CustomerLogin />} */}
				</Box>
			</Drawer>
		);
	}
}

export default withStyles(Styles)(Login);
