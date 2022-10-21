/** @format */

import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import React, { Component } from "react";
import { ShopNearbyData } from "../../utils/data/customer/CustomerData";
import StarIcons from "../common/Ratings/StarIcons";
import LocationOnIcon from "@mui/icons-material/LocationOn";
interface IProps {
	data: ShopNearbyData;
}
export default class ShopNearByCard extends Component<IProps> {
	render() {
		const { mainImage, profileImage, title, place, review } =
			this.props.data;
		return (
			<Grid container>
				<Card className="shopnear">
					<Grid md={5} lg={5} sm={5} xs={12} className="shopnear-img-sec">
						<Stack className="shop-img-container">
							<CardMedia
								component="img"
								src={mainImage}
								alt="green iguana"
								className="shop-img"
							/>
							<Box
								sx={{
									position: "absolute",
									width: "100%",
									height: "100%",
									background:
										"linear-gradient(135deg, rgba(0,0,0,.6) , rgba(0,0,0,.6)) ",
									top: "50%",
									left: "50%",
									mx: "auto",
									transform: "translate(-50%,-50%)",
									borderRadius: "10px",
									borderTopRightRadius: {
										xs: "10px",
										sm: "0px",
										md: "0px",
										lg: "0px",
									},
									borderBottomRightRadius: 0,
								}}></Box>
							<Stack className="floating-img webshow">
								<CardMedia
									className="float-img"
									component="img"
									src={profileImage}
									alt="green iguana"
								/>
							</Stack>
						</Stack>
					</Grid>
					<Grid md={7} lg={7} sm={7} xs={12}>
						<CardContent className="card-content1">
							<Stack className="floating-img1 mobileshow">
								<CardMedia
									className="float-img"
									component="img"
									src={profileImage}
									alt="green iguana"
								/>
							</Stack>
							<Stack>
								<Typography
									className="category-title"
									gutterBottom
									variant="h4"
									component="h4">
									{title}
								</Typography>
								<Stack className="location-sec">
									<LocationOnIcon
										sx={{
											fontSize: "18px",
											marginTop: "5px",
											marginLeft: "-5px",
										}}
									/>
									<Typography
										className="address"
										variant="body1"
										id="description">
										{place}
									</Typography>
								</Stack>
								<Stack className="icons-sec">
									<StarIcons />
									<Typography
										className="star-icon"
										variant="body1"
										id="description">
										{review}
									</Typography>
								</Stack>
							</Stack>
						</CardContent>
					</Grid>
				</Card>
			</Grid>
		);
	}
}
