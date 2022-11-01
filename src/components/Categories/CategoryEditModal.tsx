/** @format */
import React, { Component } from "react";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import member from "../../assets/images/SalonCategory/cateImg1.png";
import { Stack } from "@mui/system";
interface IProps {
	open: boolean;
	onClose: any;
}

class EditCategory extends Component<IProps> {
	render() {
		return (
			<Dialog
				disableScrollLock={true}
				open={this.props.open}
				onClose={this.props.onClose}>
				<Box className="addBox">
					<Stack sx={{ marginRight: "40px" }}>
						<img src={member} alt="member" className="imageMember" />
						{/* <TextField type="file" /> */}
						{/* <UploadImage /> */}
					</Stack>
					<Stack className="addContent">
						<Stack className="inputBox">
							<Typography>Name of Category</Typography>
							<TextField variant="outlined" placeholder="name" />
						</Stack>

						<Stack className="groupButton">
							<Button
								variant="outlined"
								startIcon={<ClassOutlinedIcon />}
								className="save">
								Save
							</Button>
							<Button
								onClick={this.props.onClose}
								startIcon={<ClearOutlinedIcon />}
								variant="outlined"
								className="cancel1">
								Cancel
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Dialog>
		);
	}
}

export default EditCategory;
