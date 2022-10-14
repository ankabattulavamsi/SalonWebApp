/** @format */

import React, { Component } from "react";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import { Stack, Typography } from "@mui/material";
export class UploadImage extends Component {
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
		const { profileImg } = this.state;
		return (
			<Stack className="upload">
				<Typography variant="h3" className="heading">
					Add your Image
				</Typography>
				<Stack className="img-holder">
					<img src={profileImg} alt="" id="img" className="imageUpload" />
				</Stack>
				<input
					type="file"
					accept="image/*"
					name="image-upload"
					id="input"
					onChange={this.imageHandler}
				/>
				<Stack className="label">
					<label className="image-upload" htmlFor="input">
						<CollectionsOutlinedIcon />
						Choose your Photo
					</label>
				</Stack>
			</Stack>
		);
	}
}

export default UploadImage;
