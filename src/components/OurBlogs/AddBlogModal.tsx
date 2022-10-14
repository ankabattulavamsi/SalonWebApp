/** @format */
import React, { Component } from "react";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import { Stack } from "@mui/system";
import UploadImage from "../OurSpecialists/UploadImage";


interface IProps {
	open: boolean;
	close: ()=>void;
}

class AddTeam extends Component<IProps> {
	state = {
		profileImg:
			"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
	};
	imageHandler = (e: any) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				this.setState({ profileImg: reader.result });
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	};
	render() {
		return (
			<Dialog open={this.props.open} onClose={this.props.close}>
				<Box className="addBox">
					<Stack>
						<UploadImage />
					</Stack>
					<Stack className="addContent">
						<Stack className="inputBox">
							<Typography>Blog Title</Typography>
							<TextField variant="outlined" placeholder="Blog title" />
						</Stack>
						<Stack className="inputBox">
							<Typography>Blog Descripton</Typography>
							<TextField variant="outlined" placeholder="Blog description" />
						</Stack>

						<Stack className="groupButton">
							<Button
								variant="outlined"
								startIcon={<ClassOutlinedIcon />}
								className="save">
								Save
							</Button>
							<Button
								onClick={this.props.close}
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

export default AddTeam;
