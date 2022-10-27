/** @format */

import { Divider, Stack, Typography } from "@mui/material";
import React, { Component } from "react";
import StarIcons from "../../components/common/Ratings/StarIcons";
import { CommentDataProps } from "../../utils/data/commentData/commentData";

interface IProps {
	item: CommentDataProps;
}
export default class CommentBox extends Component<IProps> {
	render() {
		const { image, comment, name, time } = this.props.item;
		return (
			<Stack mb={3}>
				<Typography variant="body1" className="address time">
					{time}
				</Typography>
				<Stack className="profile-email-sec">
					<img className="profile-image" src={image} alt="profile" />
					<Stack>
						<Typography variant="h3" component="h3">
							{name}
						</Typography>
						<StarIcons />
					</Stack>
				</Stack>
				<Typography variant="body1" className="address size" mt={2} mb={3}>
					{comment}
				</Typography>
				<Divider />
			</Stack>
		);
	}
}
