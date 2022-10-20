/** @format */

import { Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Styles } from "./starIcons.style";
import { withStyles } from "@mui/styles";

interface IProps {
	classes: any;
}

class StarIcons extends React.Component<IProps> {
	render(): React.ReactNode {
		const { classes } = this.props;
		return (
			<>
				<Typography
					component="span"
					sx={{ display: "flex" }}
					className={classes.star}>
					<StarIcon className={classes.starIcon} />
					<StarIcon className={classes.starIcon} />
					<StarIcon className={classes.starIcon} />
					<StarIcon className={classes.starIcon} />
					<StarIcon className={classes.starIcon} />
				</Typography>
			</>
		);
	}
}

export default withStyles(Styles)(StarIcons);
