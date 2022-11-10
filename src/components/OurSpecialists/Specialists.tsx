/** @format */
import React, { Component } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
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
import { CommonViewAllButton } from "../common";
import withRouter from "../../hoc/withRouter";

const responsive = {
	mobile: {
		breakpoint: { max: 763, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};
interface IProps {
	navigate: any;
}
class Specialists extends Component<IProps> {
	onClickNavigateOffersPage = () => {
		this.props.navigate("/salon/team");
	};
	render() {
		const { classes }: any = this.props;

		return (
			<>
				<Grid container>
					<Grid item xs={1} sm={1} md={1.5} lg={1.5}></Grid>
					<Grid item xs={10} sm={10} md={9} lg={9}>
						<Stack className={classes.specialist}>
							<Box className={classes.specialistHeading}>
								<Stack sx={{ mb: { sm: 2, xs: 2 } }}>
									<Typography className={classes.blogHeading}>
										Our Specialists
									</Typography>
									<Typography
										className={classes.blogTitleLine}></Typography>
								</Stack>
								<CommonViewAllButton
									buttonName="view all teams"
									onClickNavigateOffersPage={
										this.onClickNavigateOffersPage
									}
								/>
							</Box>
							<Box className={classes.CardItems}>
								{specialistData.slice(0, 3).map((team: TeamData) => (
									<Box key={team.id} className="innerCard">
										<SpecialistCard team={team} />
									</Box>
								))}
							</Box>
						</Stack>
						<Box className={classes.carouselSec}>
							<Container maxWidth="lg">
								<Box className="corosel-team-specialist">
									<Carousel
										swipeable={false}
										draggable={false}
										showDots
										responsive={responsive}
										infinite
										autoPlay
										autoPlaySpeed={1000}
										customTransition="all 0.7"
										transitionDuration={700}
										containerClass="container"
										dotListClass="custom-dot-list-style">
										{teamdata.map((team: TeamData, index: number) => {
											return <SpecialistCard team={team} key={team.id} />;
										})}
									</Carousel>
								</Box>
							</Container>
						</Box>
					</Grid>
					<Grid item xs={1} sm={1} md={1.5} lg={1.5}></Grid>
				</Grid>
			</>
		);
	}
}
export default withStyles(Styles)(withRouter(Specialists));
