/** @format */

import {
	Box,
	Stack,
	TextField,
	Typography,
	Button,
	InputAdornment,
} from "@mui/material";
import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import withRouter from "../../../hoc/withRouter";

interface PaymentProps {
	navigate: any;
}

class UPIPayment extends Component<PaymentProps> {
	state = {
		upi: "",
	};
	onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			upi: e.target.value,
		});
	};
	LoginHandler = () => {
		if (!this.state.upi) {
			const notify = () => toast.warn("Please Enter valid upi number!");
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
				<Stack className="input-group-sec">
					<Typography variant="h3" component="h3" mb={1}>
						UPI
					</Typography>
					<TextField
						value={this.state.upi}
						onChange={this.onChangeHandle}
						className="text-input"
						placeholder="1234567890                                                      @ybl"
					/>
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
export default withRouter(UPIPayment);
