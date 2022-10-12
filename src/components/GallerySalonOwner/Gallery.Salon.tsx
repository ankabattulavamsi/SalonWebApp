/** @format */

import { Edit, Delete } from "@mui/icons-material";
import { Grid, Card, CardMedia, CardActions, Button } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import React, { Component } from "react";
import {
	gallaryData,
	GallaryData,
	galleryBanner,
} from "../../utils/data/GalleryOwner/Gallery";
import Banner from "../common/Banner/Banner";
import Layout from "../Layout/Layout";
import { galleryStyles } from "./GalleryOwners.styles";
interface GallerySalonProps {
	classes: any;
}
interface GallerySalonState {}
class GallerySalon extends Component<
	GallerySalonProps,
	GallerySalonState
> {
	render() {
		const { classes } = this.props;
		return (
			<Layout>
				<Box sx={{ pt: 10, mb: 10 }}>
					<Container maxWidth="lg">
						<Banner
							image={galleryBanner}
							title="Our Gallery"
							buttonTitle="Add New Image"
						/>
						<Grid container spacing={2}>
							{gallaryData.map((images: GallaryData) => {
								return (
									<Grid item xs={12} sm={6} md={4} key={images.id}>
										<Card
											sx={{ width: "100%" }}
											className={`cards ${classes.card}`}>
											<CardMedia
												component="img"
												alt={`${images.id}`}
												image={images.imgUrl}
												src={images.imgUrl}
												sx={{ borderRadius: "4px" }}
												className={classes.imgCard}
											/>

											<CardActions
												className={`cardActio ${classes.cardActions}`}>
												<Box
													sx={{
														width: "100%",
														mx: "auto",
														justifyContent: "center",
														gap: "50px",
													}}>
													<Button className={classes.buttonClass}>
														<Edit />
													</Button>
													<Button className={classes.buttonClass}>
														<Delete />
													</Button>
												</Box>
											</CardActions>
										</Card>
									</Grid>
								);
							})}
						</Grid>
					</Container>
				</Box>
			</Layout>
		);
	}
}

export default withStyles(galleryStyles)(GallerySalon);
