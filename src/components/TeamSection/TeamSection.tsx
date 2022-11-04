/** @format */

import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import "./TeamSection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "@mui/system";
import React, { Component } from "react";
import { TeamData, teamdata } from "../../utils/data/expertTeam/team";

export default class TeamSection extends Component {
	render() {
		return (
			<Box>
				<Box sx={{mb: -9, pt: 15}}>
					<Typography
						variant="h3"
						className="underline--our-expert-team"
						component={"h3"}
						sx={{
							fontSize: { xs: "20px", sm: "35px" },
							fontWeight: "700",
							textAlign: "center",
							lineHeight: "48px",
							letterSpacing: "-0.01rem",
							textTransform: "capitalize",
							color: "#272522",
							fontFamily: "Fira sans",
						}}>
						Our Expert Team
					</Typography>
				</Box>
				<Container maxWidth="lg">
					<Box className="corosel-team-experts">
						<Carousel
							swipeable={false}
							draggable={false}
							showDots
							responsive={responsive}
							ssr={false} // means to render carousel on server-side.
							infinite
							// autoPlay
							autoPlaySpeed={4000}
							keyBoardControl={true}
							customTransition="all 0.7"
							transitionDuration={700}
							containerClass="container"
							deviceType={"mobile  | tablet"}
							dotListClass="custom-dot-list-style">
							{teamdata.map((team: TeamData, index: number) => {
								return (
									<Card key={index} className="export-team">
										<Box sx={{ position: "relative" }} className="">
											<div className="hero"></div>
											<CardMedia
												component={"img"}
												src={team.imgeUrl}
												sx={{
													height: "280px",
													display: "block",
													objectFit: "fill !important",
													justifyContent: "center",
													margin: "auto",
													width: "auto !important",
												}}
												alt={team.title}></CardMedia>
										</Box>
										<CardContent
											className="expert-team-content1"
											sx={{
												bgcolor: "#FFF2E4",
												color: "black",
												borderBottomLeftRadius: "10px",
												borderBottomRightRadius: "10px",
											}}>
											<Typography variant="h3" align="center">
												{team.title}
											</Typography>
											<Typography
												align="center"
												variant="body2"
												sx={{ color: "#88878F", marginTop: "10px" }}>
												{team.position}
											</Typography>
										</CardContent>
									</Card>
								);
							})}
						</Carousel>
					</Box>
				</Container>
			</Box>
		);
	}
}
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1113 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1113, min: 763 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	miniTablet: {
		breakpoint: { max: 763, min: 501 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 500, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};
