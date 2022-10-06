/** @format */
import React, { Component } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Styles } from "./specialist.styles";
import { withStyles } from "@mui/styles";
import {
	TeamData,
	specialistData,
} from "../../utils/data/expertTeam/team";
import SpecialistCard from "./SpecialistCard";

class Specialists extends Component {
	render() {
		const { classes }: any = this.props;
		return (
			<Stack className={classes.specialist}>
				<Box className={classes.specialistHeading}>
					<Stack>
						<Typography className={classes.blogHeading}>
							Our Specialists
						</Typography>
						<Typography className={classes.blogTitleLine}></Typography>
					</Stack>
					<Button variant="contained">Views All Teams</Button>
				</Box>
				<Stack className={classes.CardItems}>
					{specialistData.map((team: TeamData, index: number) => (
						<SpecialistCard key={index} team={team} />
					))}
				</Stack>
			</Stack>
		);
	}
}
export default withStyles(Styles)(Specialists);
