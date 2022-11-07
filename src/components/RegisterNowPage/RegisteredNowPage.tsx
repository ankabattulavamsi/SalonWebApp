/** @format */

import * as React from "react";
import { AlertColor, Box, Checkbox, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import {
	emailImage,
	optionsStateName,
	userImage,
} from "../../utils/data/businessdetailsandPayout/Busness.data";
import { modalConstants } from "../../utils/data/constants/loginRegistration";
import {
	Buttons,
	Drawers,
	DropDownLogin,
	Inputs,
	OtpPass,
} from "../common";
import { navSate } from "../common/Navbar/Navbar";

import { registeredStyles } from "./RegisteredNowPage.Styles";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
interface RegisteredNowPageProps {
	open: boolean;
	toogleDrawer: (type?: string) => void;
	classes: any;
	handleChange: (e: any) => void;
	state: navSate;
	handleOnClick: () => void;
	handleChangePassword?: (e: any) => void;
	confirmPassChangehandle?: (password: any) => void;
	handleError: (open: boolean, type: AlertColor, message: string) => void;
}

interface RegisteredNowPageState {
	errorEmail: string;
	isChecked: boolean;
	error: string;
}

class RegisteredNowPage extends React.Component<
	RegisteredNowPageProps,
	RegisteredNowPageState
> {
	constructor(props: RegisteredNowPageProps) {
		super(props);
		this.state = {
			isChecked: false,
			errorEmail: "",
			error: "",
		};
	}

	handleNavigate = () => {
		this.props.toogleDrawer(modalConstants.VERIFICATION_DRAWER);
		this.setState({
			isChecked: false,
			errorEmail: "",
			error: "",
		});
	};

	registeredSchema = Yup.object().shape({
		fname: Yup.string()
			.min(2, "Too Short!")
			.max(50, "Too Long!")
			.required("Please fill this field full name"),
		mobileNumber: Yup.string()
			.matches(/^[7-9][0-9]{9}$/, "Phone number is not valid")
			.required("This field is Required mobile number"),
		password: Yup.string()
			.min(2, "Too Short!")
			.max(50, "Too Long!")
			.required("Please fill this field password"),
		email: Yup.string()
			.email("Invalid email")
			.required("Please fill this field email"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), null], "Passwords must be match")
			.required("Required"),
		city: Yup.string().required("required"),
		isChecked: Yup.boolean()
			.oneOf([true], "You need to accept the terms and conditions")
			.required("You need to accept the terms and conditions"),
	});
	render() {
		const {
			classes,
			state,
			handleChange,
			handleChangePassword,
			confirmPassChangehandle,
		} = this.props;
		return (
			<Drawers
				open={this.props.open}
				toggleDrawer={() =>
					this.props.toogleDrawer(modalConstants.REGISTER_DRAWER)
				}>
				<Box>
					<Box>
						<Typography className={classes.heading}>
							Registered Now
						</Typography>
					</Box>
					<Formik
						enableReinitialize={true}
						initialValues={{
							fname: state.fname,
							email: state.email,
							password: state.password,
							confirmPassword: state.confirmPassword,
							mobileNumber: state.mobileNumber,
							city: state.city,
							isChecked: this.state.isChecked,
						}}
						validationSchema={this.registeredSchema}
						onSubmit={(values) => {
							this.handleNavigate();
						}}>
						{({ values }) => {
							return (
								<Form>
									<Box>
										<Inputs
											label="Full Name"
											name="fname"
											handleChange={handleChange}
											placeholder="Enter Full Name"
											icon={userImage}
											type="text"
											value={state.fname}
										/>
										<Box sx={{ mt: 2, mb: 1 }}>
											<Box>
												<Typography>Mobile No</Typography>
											</Box>
											<DropDownLogin
												handleChange={(e) => {
													handleChange(e);
													// this.handleValidateMobileNumber(e);
												}}
												name={"mobileNumber"}
												value={state.mobileNumber}
											/>
										</Box>
										<Inputs
											label="email"
											name="email"
											handleChange={(e) => {
												handleChange(e);
												// this.handleValidateEmail(e);
											}}
											placeholder="enter email"
											icon={emailImage}
											type="email"
											value={state.email}
										/>
										<OtpPass
											numberInputs={6}
											label="password"
											placeholder="******"
											value={state.password}
											handleChange={handleChangePassword}
											name="password"
										/>
										<OtpPass
											numberInputs={6}
											label="confirm password"
											placeholder="******"
											handleChange={confirmPassChangehandle}
											value={state.confirmPassword}
											name="confirmPassword"
										/>
										<Inputs
											value={state.city}
											isSelect
											label="State"
											name="city"
											options={optionsStateName}
											handleChange={handleChange}
										/>
									</Box>
									<Box>
										<Box>
											<Box className={classes.agreementBox}>
												<Checkbox
													name="isChecked"
													required
													color={
														this.state.isChecked ? "success" : "default"
													}
													value={this.state.isChecked}
													onChange={() =>
														this.setState({
															isChecked: !this.state.isChecked,
														})
													}
												/>
												<Typography className={classes.termandcondition}>
													Agree Terms & Conditions
												</Typography>
											</Box>
											<ErrorMessage
												name="isChecked"
												component={"P"}
												className="error-message"
											/>
										</Box>

										<Box>
											<Buttons
												type="submit"
												disabled={false}
												title="Register now"
												handleClick={() => {}}
											/>
										</Box>
									</Box>
								</Form>
							);
						}}
					</Formik>
				</Box>
			</Drawers>
		);
	}
}

export default withStyles(registeredStyles)(RegisteredNowPage);
