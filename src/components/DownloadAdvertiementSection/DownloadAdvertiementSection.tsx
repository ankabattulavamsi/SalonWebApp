/** @format */

import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./DownloadAdvertiementSection.css";
import React, { Component } from "react";
import ButtonCust from "../common/DownloadButton/ButtonCust";
import {
	appleImage,
	bgImage,
	googleImage,
	mobileImage,
} from "../../utils/data/downloadApp/download";

interface DownloadProps {}
interface DownloadState {}

class DownloadAdvertiementSection extends Component<
	DownloadProps,
	DownloadState
> {
	render() {
		return (
			<Box
				className={`section-download `}
				sx={{
					background: `url(${bgImage}) no-repeat`,
					backgroundSize: { xs: "cover", md: "cover" },
					backgroundAttachment: "fixed",
					backgroundPosition: { xs: "19%  center", md: "center center" },
					width: "100%",
					mb: 5,
					mt: { xs: 5, md: 15 },
				}}>
				<Container maxWidth="lg" sx={{ mt: 8, padding: "0px !important" }}>
					<Grid container columnSpacing={2}>
						<Grid item md={6} sm={12} xs={11}>
							<>
								<Box sx={{ pl: 2 }}>
									<Typography
										className="underline-download-app"
										textAlign={"left"}
										variant="h3"
										component={"h3"}
										sx={{
											fontSize: { xs: "20px", sm: "22px", md: "35px" },
										}}>
										Download Salon App
									</Typography>
								</Box>
								<Box sx={{ mt: 3 }}>
									<Typography
										className="para-css-download"
										textAlign={{ xs: "justify", sm: "left" }}
										sx={{
											fontSize: { xs: "14px", sm: "16px", md: "18px" },
										}}>
										Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Cupiditate aspernatur in aut deserunt et,
										accusamus dolorum nostrum tempora nihil atque.
										Molestiae recusandae doloremque itaque quis facere
										provident velit, accusantium voluptatibus.
									</Typography>
								</Box>
								<Box
									sx={{
										display: "flex",
										justifyContent: "left",
										gap: "4px",
										flexWrap: { xs: "wrap", sm: "nowrap" },
										mt: 5,
										padding: 2,
									}}>
									<ButtonCust
										bgColor="#272522"
										color="#fff"
										avatar={googleImage}
										subTitle="Get it On"
										title="Google Play"
									/>
									<ButtonCust
										bgColor="#272522"
										color="#fff"
										avatar={appleImage}
										subTitle="Download on"
										title="App Store"
									/>
								</Box>
							</>
						</Grid>
						<Grid item md={6} sm={12} xs={12}>
							<>
								<Box
									sx={{
										mt: { xs: 10, sm: 20, md: 5, lg: 0 },
										minHeight: { xs: "260px", sm: "300px", md: "380px" },
										width: { xs: "90%", sm: "100%", md: "100%" },
										position: "relative",
										mx: "auto",
										mr: { xs: "auto", md: 0 },
									}}>
									<img
										src={mobileImage}
										alt="mobile"
										loading="lazy"
										className="image-download"
									/>
								</Box>
							</>
						</Grid>
					</Grid>
				</Container>
			</Box>
		);
	}
}
export default DownloadAdvertiementSection;
