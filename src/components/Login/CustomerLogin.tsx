/** @format */

import { Box, Stack, Typography } from "@mui/material";
import React, { Component } from "react";
import OtpInput from "react-otp-input";
import LoginButton from "../common/LoginButton/LoginButton";
import DropDownLogin from "./DropDownLogin";
import { withStyles } from "@mui/styles";
import { Styles } from "./Login.style";
import withRouter from "../../hoc/withRouter";
import { modalConstants } from "../../utils/data/constants/loginRegistration";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface CustomerLoginProps {
	navigate: any;
	handleLogin: (type?: string) => void;
}
interface CustomerLoginState {
	loginOtp: string;
	number: string;
	numberOfInputs: number;
}
class CustomerLogin extends Component<
	CustomerLoginProps,
	CustomerLoginState
> {
	state = {
		loginOtp: "",
		number: "",
		numberOfInputs: 6,
	};
	loginOtpHandler = (loginOtp: any) =>
		this.setState({ loginOtp, numberOfInputs: 6 });
	onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			number: e.target.value,
		});
	};
	LoginHandler = () => {
		if (!this.state.number || this.state.loginOtp.length < 6) {
			const notify = () => toast.warn("Please Enter valid data!");
			notify();
		} else if (this.state.number.length < 10) {
			const notify = () => toast.warn("Please enter valid phone number!");
			notify();
		} else {
			this.props.navigate("/customer");
		}
	};
	render() {
		const { classes }: any = this.props;
		return (
			<div>
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
				<Stack>
					<Typography
						className={classes.typoPara}
						mt={3}
						mb={2}
						component="p">
						Mobile No
					</Typography>
					<Stack>
						<DropDownLogin
							onChangeHandle={this.onChangeHandle}
							number={this.state.number}
						/>
					</Stack>
				</Stack>
				<Stack>
					<Typography
						className={classes.typoPara}
						mt={3}
						mb={2}
						component="p">
						Passcode
					</Typography>
					<Box className="passcodeParentDiv">
						<OtpInput
							data-testid="otp-input"
							placeholder="******"
							inputStyle={{
								width: "100%",
								height: "40px",
								borderRadius: "5%",
								border: "none",
								margin: "0 3px",
								fontSize: "15px",
							}}
							numInputs={this.state.numberOfInputs}
							value={this.state.loginOtp}
							onChange={this.loginOtpHandler}
							className="otp"
							isInputSecure
							isInputNum={true}
						/>
					</Box>
				</Stack>
				<Stack className={classes.forgetPasscode}>
					<Typography className={classes.typoPara}>
						Forget Passcode?
					</Typography>
				</Stack>
				<Stack mt={4} mb={4}>
					<LoginButton onClick={this.LoginHandler} title="Login" />
				</Stack>
				<Stack sx={{ textAlign: "center" }}>
					<Typography component="p">
						Don't have an account?{" "}
						<span
							className={classes.registerSpan}
							onClick={() =>
								this.props.handleLogin(modalConstants.REGISTER_DRAWER)
							}>
							Register Now
						</span>
					</Typography>
				</Stack>
			</div>
		);
	}
}
export default withStyles(Styles)(withRouter(CustomerLogin));
