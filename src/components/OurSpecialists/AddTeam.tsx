/** @format */
import React, { Component } from "react";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import member from "../../assets/images/expertTeamSection/member1.png";
import { Stack } from "@mui/system";
import UploadImage from "./UploadImage";
interface IProps {
	open: boolean;
	onClose: any;
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
			<Dialog open={this.props.open} onClose={this.props.onClose}>
				<Box className="addBox">
					<Stack>
						{/* <img
							src={member}
							alt="member"
							style={{ width: "200px", height: "200px" }}
						/> */}
						{/* <TextField type="file" /> */}
						<UploadImage />
					</Stack>
					<Stack className="addContent">
						<Stack className="inputBox">
							<Typography>Name of Specialist</Typography>
							<TextField variant="outlined" placeholder="name" />
						</Stack>
						<Stack className="inputBox">
							<Typography>Job Title</Typography>
							<TextField variant="outlined" placeholder="job type" />
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

export default AddTeam;
