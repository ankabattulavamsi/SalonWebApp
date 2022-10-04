/** @format */

import React, { Component } from "react";
import {
	Button,
	Divider,
	FormControl,
	MenuItem,
	Stack,
	TextField,
	Typography,
	Box,
	Select,
} from "@mui/material";
import flag from "../../assets/images/Login/flag.png";
import { PhonelinkLockOutlined } from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
export default class DropDownLogin extends Component {
	state = {
		selected: 10,
		number: "",
	};
	onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			number: e.target.value,
		});
	};
	render() {
		return (
			<div>
				<Box className="mobileNoChildBox1">
					<Box sx={{ maxWidth: 120 }}>
						<FormControl sx={{ m: 1, minWidth: 85 }}>
							<Select
								className="bgColor"
								value={this.state.selected}
								displayEmpty
								inputProps={{ "aria-label": "Without label" }}
								variant="standard"
								disableUnderline={true}>
								<MenuItem selected={true} value={10}>
									<Box
										sx={{
											display: "flex",
											border: "none",
											alignItems: "center",
											justifyContent: "center",
										}}>
										<img
											className="india"
											src={flag}
											width="20px"
											height="15px"
											alt="India"
										/>
										<Typography className="mobileNoChildBox2Typography">
											+91
										</Typography>
									</Box>
								</MenuItem>
								<MenuItem value={20}>
									<Box sx={{ display: "flex", border: "none" }}>
										<img
											className="india"
											src={flag}
											width="20px"
											height="15px"
											alt="India"
										/>
										<Typography className="mobileNoChildBox2Typography">
											+91
										</Typography>
									</Box>
								</MenuItem>
								<MenuItem value={30}>
									<Box sx={{ display: "flex", border: "none" }}>
										<img
											className="india"
											src={flag}
											width="20px"
											height="15px"
											alt="India"
										/>
										<Typography className="mobileNoChildBox2Typography">
											+91
										</Typography>
									</Box>
								</MenuItem>
							</Select>
						</FormControl>
					</Box>
					<Divider orientation="vertical" flexItem className="divider" />
					<Box
						className="text-phone"
						sx={{
							display: "flex",
							justifyContent: "space-evenly",
							alignItems: "center",
							marginLeft: "25px",
						}}>
						<Box className="mobileNoChildBox3">
							<TextField
								value={this.state.number}
								className="textField"
								select={false}
								onChange={this.onChangeHandle}
								variant="standard"
								placeholder="Phone Number"
								type="tel"
								required
								InputProps={{
									disableUnderline: true,
								}}></TextField>
						</Box>
						<Box className="childBox4">
							<PhoneIcon className="phoneIcon" />
						</Box>
					</Box>
				</Box>
			</div>
		);
	}
}
