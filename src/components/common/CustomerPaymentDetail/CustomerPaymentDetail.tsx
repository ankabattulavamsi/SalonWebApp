/** @format */
import React, { Component } from "react";
import {
	Box,
	ButtonGroup,
	Drawer,
	Typography,
	Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { withStyles } from "@mui/styles";
import { Styles } from "../../Login/Login.style";
import { CustomerPaymentState } from "../../../routes/SalonNearByPage/SalonServiceDetail";
import BankPayment from "./BankPayment";
import UPIPayment from "./UPIPayment";
import CreditCardPayment from "./CreditCardPayment";

interface IProps {
	onClose: any;
	classes?: any;
	state: CustomerPaymentState;
	handleBankAccPayment: () => void;
	handleUPIPayment: () => void;
	handleCreditCardPayment: () => void;
}
class CustomerPaymentDetail extends Component<IProps> {
	render() {
		const {
			onClose,
			classes,
			handleBankAccPayment,
			handleUPIPayment,
			handleCreditCardPayment,
		} = this.props;
		return (
			<Drawer
				className="main-drawer-pay"
				anchor="right"
				open={this.props.state.open}
				onClose={onClose}>
				<Box className="drawerSize innerDraweSize" role="presentation">
					<CloseIcon style={{ cursor: "pointer" }} onClick={onClose} />
					<Typography className={classes.heading} variant="h2">
						Payment
					</Typography>
					<ButtonGroup
						className={classes.button_group}
						variant="outlined"
						aria-label="outlined button group">
						<Button
							onClick={handleBankAccPayment}
							className={
								this.props.state.bankAccount
									? "buttonsPay customer"
									: "buttonsPay"
							}>
							Bank Account
						</Button>
						<Button
							sx={{
								borderleft: "1px solid black !important",
								margin: "0px 1px !important",
							}}
							onClick={handleUPIPayment}
							className={
								this.props.state.upi ? "buttonsPay customer" : "buttonsPay"
							}>
							UPI
						</Button>
						<Button
							onClick={handleCreditCardPayment}
							className={
								this.props.state.creditCard
									? "buttonsPay customer"
									: "buttonsPay"
							}>
							Credit Card
						</Button>
						<div
							className={
								this.props.state.bankAccount
									? "traingle-sec2"
									: this.props.state.upi
									? "traingle-sec3"
									: this.props.state.creditCard
									? "traingle-sec4"
									: "display-none"
							}>
							<p className="traingle"></p>
						</div>
					</ButtonGroup>
					{this.props.state.bankAccount ? (
						<BankPayment />
					) : this.props.state.upi ? (
						<UPIPayment />
					) : this.props.state.creditCard ? (
						<CreditCardPayment />
					) : null}
				</Box>
			</Drawer>
		);
	}
}

export default withStyles(Styles)(CustomerPaymentDetail);
