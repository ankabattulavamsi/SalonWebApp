/** @format */

import {
	Box,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
	Button,
} from "@mui/material";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import withRouter from "../../../hoc/withRouter";
import {
	optionsBanksname,
	optionsBankName,
} from "../../../utils/data/businessdetailsandPayout/Busness.data";

interface PaymentProps {
	navigate: any;
}

class BankPayment extends Component<PaymentProps> {
	state = {
		chooseBank: "Select bank",
		nameOfBankHolder: "",
		accountNum: "",
		IFSC: "",
	};

	handleChange = (e: any) => {
		const { name, value } = e.target;
		this.setState({ ...this.state, [name]: value });
	};

	LoginHandler = () => {
		if (this.state.nameOfBankHolder === "") {
			const notify = () =>
				toast.warn("Please Enter the name of Bank holder!");
			notify();
		} else if (!this.state.accountNum) {
			const notify = () => toast.warn("Please Enter Account Number!");
			notify();
		} else if (!this.state.IFSC) {
			const notify = () => toast.warn("Please Enter IFSC code!");
			notify();
		} else if (!this.state.chooseBank) {
			const notify = () => toast.warn("Please Choose the bank!");
			notify();
		} else {
			this.props.navigate("/customer");
			const notify = () => toast.success("Your payment is Successful!!");
			notify();
		}
	};

	render() {
		return (
			<Box mt={4}>
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
						Account Holder Name
					</Typography>
					<TextField
						name="nameOfBankHolder"
						value={this.state.nameOfBankHolder}
						className="text-input"
						placeholder="Enter your account name"
						onChange={this.handleChange}
					/>
				</Stack>
				<Stack className="input-group-sec" mb={3}>
					<Typography variant="h3" component="h3" mb={1}>
						Account Number
					</Typography>
					<TextField
						name="accountNum"
						type="text"
						className="text-input"
						placeholder="1234 4567 7890 1111"
						value={this.state.accountNum}
						onChange={this.handleChange}
					/>
				</Stack>
				<Stack className="input-group-sec" mb={3}>
					<Typography variant="h3" component="h3" mb={1}>
						IFSC code
					</Typography>
					<TextField
						name="IFSC"
						value={this.state.IFSC}
						type="text"
						className="text-input"
						placeholder="SBIN0000432"
						onChange={this.handleChange}
					/>
				</Stack>

				<Box className="text-input">
					<Select
						name="chooseBank"
						id={"select"}
						onChange={this.handleChange}
						placeholder="select the bank"
						sx={{
							width: "100%",
							fontSize: "17px",
							":placeholder": {
								color: "red",
							},
						}}
						value={this.state.chooseBank}>
						<MenuItem value={this.state.chooseBank}>
							Select the bank
						</MenuItem>
						{optionsBankName.map((option: optionsBanksname) => {
							return (
								<MenuItem key={option.id} value={option.title}>
									<Box
										sx={{
											width: "100%",
											py: 2,
											height: "30px",
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
										}}>
										{option.icon && (
											<img
												style={{
													width: "20px",
													height: "20px",
													objectFit: "contain",
												}}
												src={option.icon}
												alt={`${option.id}`}
												className={"select-option-img"}
											/>
										)}

										<span style={{ width: "80%" }}>{option.title}</span>
									</Box>
								</MenuItem>
							);
						})}
					</Select>
				</Box>
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
export default withRouter(BankPayment);
