/** @format */

import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import withRouter from "../../../hoc/withRouter";

interface PaymentProps {
	navigate: any;
}
class CreditCardPayment extends Component<PaymentProps> {
	state = {
		cardNumber: "",
		cardName: "",
		date: "",
		cvv: "",
	};
	handleChange = (e: any) => {
		const { name, value } = e.target;
		this.setState({ ...this.state, [name]: value });
	};

	LoginHandler = () => {
		if (!this.state.cardNumber) {
			const notify = () =>
				toast.warn("Please Enter the 16 digits card number");
			notify();
		} else if (!this.state.cardName) {
			const notify = () =>
				toast.warn("Please Enter proper name of card holder!");
			notify();
		} else if (!this.state.date) {
			const notify = () => toast.warn("Please select the date");
			notify();
		} else if (!this.state.cvv) {
			const notify = () => toast.warn("Please enter 3 digits cvv number");
			notify();
		} else {
			this.props.navigate("/customer");
			const notify = () => toast.success("Your payment is Successful!!");
			notify();
		}
	};
	render() {
		return (
			<Box mt={5}>
				<ToastContainer
					position="top-right"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<Stack className="input-group-sec" mb={3}>
					<Typography variant="h3" component="h3" mb={1}>
						Card Number
					</Typography>
					<TextField
						name="cardNumber"
						value={this.state.cardNumber}
						onChange={this.handleChange}
						className="text-input"
						placeholder="1111 2222 3333 4444"
					/>
				</Stack>
				<Stack className="input-group-sec" mb={3}>
					<Typography variant="h3" component="h3" mb={1}>
						Name On Card
					</Typography>
					<TextField
						name="cardName"
						value={this.state.cardName}
						onChange={this.handleChange}
						type="text"
						className="text-input"
						placeholder="Steve Smith"
					/>
				</Stack>
				<Stack sx={{ flexDirection: "row !important" }}>
					<Stack className="input-group-sec" mb={3} mr={3}>
						<Typography variant="h3" component="h3" mb={1}>
							Expire Date
						</Typography>
						<TextField
							name="date"
							value={this.state.date}
							onChange={this.handleChange}
							type="date"
							className="text-input"
							placeholder="MM/YY"
						/>
					</Stack>
					<Stack className="input-group-sec" mb={3}>
						<Typography variant="h3" component="h3" mb={1}>
							CVV
						</Typography>
						<TextField
							name="cvv"
							value={this.state.cvv}
							onChange={this.handleChange}
							type="text"
							className="text-input"
							placeholder="***"
						/>
					</Stack>
				</Stack>
				<Button
					onClick={this.LoginHandler}
					className="continue-btn"
					fullWidth
					variant="contained">
					Continue
				</Button>
			</Box>
		);
	}
}
export default withRouter(CreditCardPayment);
