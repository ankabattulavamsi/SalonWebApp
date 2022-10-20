/** @format */

import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import React, { Component } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CategoryData } from "../../utils/data/customer/CustomerData";

interface IProps {
	data: CategoryData;
}
export default class CategoryCard extends Component<IProps> {
	render() {
		const { title, image } = this.props.data;
		return (
			<Box>
				<Card className="category-card">
					<CardMedia
						component="img"
						height="215px"
						src={image}
						alt="green iguana"
					/>
					<CardContent className="card-content">
						<Typography
							className="category-title"
							gutterBottom
							variant="h4"
							component="h4">
							{title}
						</Typography>
						<ArrowForwardIcon className="arrow-icon" />
					</CardContent>
				</Card>
			</Box>
		);
	}
}
