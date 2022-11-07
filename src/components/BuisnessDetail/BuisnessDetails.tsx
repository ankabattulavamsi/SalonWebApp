/** @format */

import { AlertColor, Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";
import { BusinessStyles } from "./BuisnessDetailsStyle";
import { withStyles } from "@mui/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./BuisnessDetails.css";
import {
	emailImage,
	locationImage,
	noteImage,
	profilesImage,
	storeImage,
	userImage,
} from "../../utils/data/businessdetailsandPayout/Busness.data";
import * as Yup from "yup";

import { Buttons, Drawers, Inputs } from "../common";
import { navSate } from "../common/Navbar/Navbar";
import { Form, Formik } from "formik";

interface BuisnessDetailsProps {
	handleToggleDrawer: () => void;
	open: boolean;
	classes: any;
	handleChange: (e: any) => void;
	handleImageChange: (e: any) => void;
	state: navSate;
	handleClickSave: () => void;
	handleError: (open: boolean, type: AlertColor, message: string) => void;
}
interface BuisnessDetailsState {}

class BuisnessDetails extends Component<
	BuisnessDetailsProps,
	BuisnessDetailsState
> {
	constructor(props: BuisnessDetailsProps) {
		super(props);
		this.state = {};
	}

	businessSchema = Yup.object().shape({
		// image: Yup.string().required("image is "),
		bname: Yup.string()
			.required("buseness name should not be empty")
			.min(2, "busness name is too short")
			.max(50, "too long"),
		owner: Yup.string()
			.required("owner name should not be empty")
			.min(2, "owner name is too short")
			.max(50, "too long"),
		GSTIN: Yup.string()
			.required("GSTIN number should not be empty")
			.min(5, "GSTIN number is too short")
			.max(13, "GSTIN number is  too long"),

		address: Yup.string()
			.required("adress should not be empty")
			.min(2, "address is too short")
			.max(100, "GSTIN number is  too long"),
		email: Yup.string()
			.email("Invalid email")
			.required("Please fill this field email"),
	});
	render() {
		const { classes, state } = this.props;

		return (
			<Box>
				<Drawers
					open={this.props.open}
					toggleDrawer={() => this.props.handleToggleDrawer()}>
					<Box>
						<Box>
							<Typography variant="h5" className={classes.busText}>
								Business Details
							</Typography>
						</Box>
						<Formik
							enableReinitialize={true}
							initialValues={{
								image: state.image,
								bname: state.bname,
								owner: state.owner,
								GSTIN: state.GSTIN,
								email: state.email,
								address: state.address,
							}}
							validationSchema={this.businessSchema}
							onSubmit={() => this.props.handleClickSave()}>
							<Form>
								<>
									<Box
										sx={{
											mt: 2,
											display: "flex",
											justifyContent: "flex-start",
											gap: 2,
											width: "90%",
											mx: "auto",
										}}>
										<Box width={"30%"}>
											<Box
												sx={{
													borderRadius: "50%",
													display: "flex",
													justifyContent: "flex-end",
													flex: 1,
												}}>
												<img
													className="img-profile"
													src={
														this.props.state.image
															? this.props.state.image
															: profilesImage
													}
													alt="imag"
												/>
											</Box>
										</Box>

										<Box width={"auto"}>
											<Box>
												<Typography
													variant="h4"
													className={classes.profilelabelText}>
													Upload Profile Picture
												</Typography>
												<Box className={classes.boxinput}>
													<input
														accept="image/*"
														className={"inputHide"}
														onChange={this.props.handleImageChange}
														type="file"
														name="image"
													/>
													<Button className={classes.btnCloud}>
														<CloudUploadIcon fontSize="large" />
														<span>Browse</span>
													</Button>
												</Box>
											</Box>
										</Box>
									</Box>
									<Box sx={{ mt: 1, width: "90%", mx: "auto" }}>
										<Inputs
											label={"Business name"}
											id={`${1}`}
											placeholder={"enter Business name"}
											required={true}
											type={"text"}
											handleChange={(e) => this.props.handleChange(e)}
											value={this.props.state.bname}
											icon={storeImage}
											name={"bname"}
										/>
										<Inputs
											label={"Owner name"}
											id={`${2}`}
											placeholder={"enter owner name"}
											required={true}
											type={"text"}
											handleChange={(e) => this.props.handleChange(e)}
											value={this.props.state.owner}
											icon={userImage}
											name={"owner"}
										/>
										<Inputs
											label={"Address"}
											id={`${3}`}
											placeholder="Enter Address"
											required={true}
											type={"textarea"}
											handleChange={(e) => this.props.handleChange(e)}
											value={this.props.state.address}
											icon={locationImage}
											name={"address"}
										/>

										<Inputs
											label={"GSTIN No"}
											id={`${4}`}
											placeholder="enter GSTIN no"
											required={true}
											type={"text"}
											handleChange={(e) => this.props.handleChange(e)}
											value={this.props.state.GSTIN}
											icon={noteImage}
											name={"GSTIN"}
										/>
										<Inputs
											label={"Email"}
											id={`${5}`}
											placeholder="enter email"
											required={true}
											type={"email"}
											handleChange={(e) => {
												this.props.handleChange(e);
											}}
											value={this.props.state.email}
											icon={emailImage}
											name={"email"}
										/>
									</Box>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "flex-end",
											ml: 0.5,
											mb: 2,
											mt: 1,
											width: "90%",
											mx: "auto",
										}}>
										<Buttons
											title="save & continue"
											type="submit"
											handleClick={() => {}}
										/>
									</Box>
								</>
							</Form>
						</Formik>
					</Box>
				</Drawers>
			</Box>
		);
	}
}

export default withStyles(BusinessStyles)(BuisnessDetails);
