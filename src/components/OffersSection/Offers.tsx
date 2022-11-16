/** @format */

import React, { Component } from "react";
import {
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";

import { Offer, offerArray } from "../../utils/data/offerSection/offer";

import "./offers.css";

class Offers extends Component {
	render() {
		return (
			<Box
				sx={{
					paddingTop: { md: 12, sm: 10, xs: 11 },
				}}>
				<Container maxWidth="lg" sx={{ padding: "0px !important" }}>
					<Typography
						variant="h6"
						className="offer-heading"
						sx={{
							fontSize: { xs: "20px", sm: "35px", lg: "42px" },
							fontWeight: "700",
							textAlign: "center",
							lineHeight: "28px",
							letterSpacing: "-0.01rem",
							textTransform: "capitalize",
							color: "#272522",
							fontFamily: "Fira sans",
							pb: { sm: 1, md: 2 },
						}}>
						Offers
					</Typography>
					<Grid
						spacing={2}
						container
						sx={{
							display: "flex",
							justifyContent: "space-evenly",
							flexWrap: "wrap",
							width: "100%",
						}}>
						{offerArray.slice(0, 2).map((offer: Offer) => {
							return (
								<Grid item md={6} xs={12} key={offer.id}>
									<Card
										sx={{
											maxHeight: { xs: "100%", sm: "350px " },
											display: "flex",
											mx: { md: "auto" },
											marginLeft: "15px",
											px: "auto",
											mt: { xs: 5, md: 0 },
											bgcolor: offer.bgColor,
											borderRadius: "20px",
										}}>
										<CardContent
											sx={{
												width: { xs: "50%", sm: "48%" },
												paddingTop: "8%",
												paddingLeft: "7%",
												paddingRight: 0,
												mx: "auto",
											}}>
											<Typography
												variant="h5"
												sx={{
													mt: 2,
													fontSize: { xs: "16px", md: "22px" },
													backgroundColor: "#fff",
													color: "#272522",
													fontFamily: "Praise",
													fontWeight: 400,
													fontStyle: "normal",
													width: { xs: "90%", sm: "70%" },
													textAlign: "center",
													lineHeight: "38px",
													letterSpacing: "0.15em",
													letter: "15%",
												}}>
												{offer.discount}% OFF
											</Typography>
											<Typography
												gutterBottom
												variant="h5"
												component="div"
												sx={{
													mt: 2,
													fontSize: { xs: "22px", sm: "26px" },
													fontFamily: "Fira Sans",
													fontWeight: 600,
													color: "#272522",
													lineHeight: "38px",
												}}>
												{offer.title}
											</Typography>
											<Typography
												variant="h5"
												color="text.secondary"
												sx={{
													mt: 2,
													fontSize: { xs: "14px", sm: "17px" },
													fontfamily: "Roboto",
													fontWeight: 400,
													color: "#000000",
													opacity: 0.5,
													lineHeight: { xs: "20px", sm: "26px" },
													fontStyle: "normal",
												}}>
												{offer.description}...
											</Typography>
										</CardContent>
										<Box
											sx={{
												width: {
													xs: "70%",
													sm: "50%",
													md: "50%",
													lg: "100%",
												},
												marginTop: "auto",
												height: "100%",
											}}>
											<CardMedia
												component="img"
												width="100%"
												height="100%"
												image={offer.imgUrl}
												alt="green iguana"
												sx={{ objectFit: { xs: "contain" }, mx: "auto" }}
											/>
										</Box>
									</Card>
								</Grid>
							);
						})}
					</Grid>
				</Container>
			</Box>
		);
	}
}

export default Offers;
