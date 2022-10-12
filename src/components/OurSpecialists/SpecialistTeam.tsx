/** @format */
import React, { Component } from "react";
import { Box, Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Container } from "@mui/system";

import {
	TeamBanner,
	specialistData,
	TeamData,
} from "../../utils/data/expertTeam/team";
import { Styles } from "./specialist.styles";
import SpecialistCard from "./SpecialistCard";
import Banner from "../common/Banner/Banner";
import Layout from "../Layout/Layout";
interface GallerySalonProps {
	classes: any;
}
interface GallerySalonState {}
class SpecialistTeam extends Component<
	GallerySalonProps,
	GallerySalonState
> {
	render() {
		return (
			<Layout>
				<Box sx={{ pt: 10, mb: 10 }}>
					<Container maxWidth="lg">
						<Banner
							image={TeamBanner}
							title="Our Team Member"
							buttonTitle="Add new team"
						/>
						<Grid container spacing={2}>
							{specialistData.map((team: TeamData, index: number) => (
								<Grid
									key={index}
									className="innerCardTeam"
									sx={{}}
									xs={12}
									sm={4}
									md={4}
									lg={4}
									item>
									<SpecialistCard team={team} />
								</Grid>
							))}
						</Grid>
					</Container>
				</Box>
			</Layout>
		);
	}
}

export default withStyles(Styles)(SpecialistTeam);
