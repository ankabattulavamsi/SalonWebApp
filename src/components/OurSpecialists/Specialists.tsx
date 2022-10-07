/** @format */
import React, { Component } from "react";
import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { Styles } from "./specialist.styles";
import { withStyles } from "@mui/styles";
import {
	TeamData,
	specialistData,
	teamdata,
} from "../../utils/data/expertTeam/team";
import SpecialistCard from "./SpecialistCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	// desktop: {
	// 	breakpoint: { max: 3000, min: 1113 },
	// 	items: 3,
	// 	slidesToSlide: 3, // optional, default to 1.
	// },
	// tablet: {
	// 	breakpoint: { max: 1113, min: 763 },
	// 	items: 2,
	// 	slidesToSlide: 2, // optional, default to 1.
	// },
	mobile: {
		breakpoint: { max: 763, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};
class Specialists extends Component {
	render() {
		const { classes }: any = this.props;
		return (
			<>
				<Grid container sx={{ mt: 10 }}>
					<Grid item xs={1} sm={1} md={1} lg={1}></Grid>
					<Grid item xs={10} sm={10} md={10} lg={10}>
						<Stack className={classes.specialist}>
							<Box className={classes.specialistHeading}>
								<Stack>
									<Typography className={classes.blogHeading}>
										Our Specialists
									</Typography>
									<Typography
										className={classes.blogTitleLine}></Typography>
								</Stack>
								<Button className={classes.teamButton} variant="contained">
									Views All Teams
								</Button>
							</Box>
							<Stack className={classes.CardItems}>
								{specialistData.map((team: TeamData, index: number) => (
									<SpecialistCard key={index} team={team} />
								))}
							</Stack>
						</Stack>
						<Box className={classes.carouselSec}>
							<Container maxWidth="lg">
								<Box className="corosel-team-experts">
									<Carousel
										swipeable={false}
										draggable={false}
										showDots
										responsive={responsive}
										ssr={false} // means to render carousel on server-side.
										infinite
										autoPlay
										autoPlaySpeed={4000}
										keyBoardControl={true}
										customTransition="all 0.7"
										transitionDuration={700}
										containerClass="container"
										deviceType={"mobile  | tablet"}
										dotListClass="custom-dot-list-style">
										{teamdata.map((team: TeamData, index: number) => {
											return (
												<Card
													key={index}
													className="export-team"
													sx={{
														maxWidth: 345,
														display: "block",
														boxShadow: "none",
														borderRadius: "10px",
														mb: 5,
														ml: "auto",
														mr: "auto",
														overflow: "visible",
														alignSelf: "center",
														position: "relative",
													}}>
													<Box sx={{ minHeight: 310 }}>
														<CardMedia
															height={"410"}
															width={"90%"}
															component={"img"}
															src={team.imgeUrl}
															sx={{
																display: "block",
																position: "absolute",
																top: "-100px",
																objectFit: "cover",
																justifyContent: "center",
															}}
															alt={team.title}></CardMedia>
													</Box>
													<CardContent
														className="expert-team-content"
														sx={{
															bgcolor: "#FFF2E4",
															color: "black",
															borderBottomLeftRadius: "10px",
															borderBottomRightRadius: "10px",
														}}>
														<Typography variant="h5" align="center">
															{team.title}
														</Typography>
														<Typography align="center" variant="body2">
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
					</Grid>
					<Grid item xs={1} sm={1} md={1} lg={1}></Grid>
				</Grid>
			</>
		);
	}
}
export default withStyles(Styles)(Specialists);