/** @format */

import { Box, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import Buttons from "../ButtonOfDrawer/Buttons";
import { Styles } from "./banner.style";

interface IProps {
	image: string;
	title: string;
	buttonTitle: string;
}
class Banner extends Component<IProps> {
	render() {
		const { classes }: any = this.props;
		return (
			<Box sx={{ mb: 5, mt: 5 }}>
				<Box
					sx={{
						background: `url(${this.props.image}) no-repeat`,
						height: "325px",
						backgroundSize: "cover",

						position: "relative",
						overflow: "visible",
						borderRadius: "10px",
					}}>
					<Box
						sx={{
							position: "absolute",
							width: "100%",
							height: "100%",
							bgcolor: "rgba(0,0,0,.6)",
							top: "50%",
							left: "50%",
							mx: "auto",
							transform: "translate(-50%,-50%)",
							borderRadius: "10px",
						}}>
						<Typography
							sx={{
								color: "white !important",
								width: "100%",
								height: "100%",
								display: "flex",
								alignItems: "center",
								textAlign: "center",
								justifyContent: "center",
							}}
							className={classes.titleText}>
							{this.props.title}
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Box
						sx={{
							transform: "translateY(-50%)",
							width: { xs: "50%", sm: "25%", lg: "15%" },
						}}>
						<Buttons
							title={this.props.buttonTitle}
							className={classes.capitalized}
						/>
					</Box>
				</Box>
			</Box>
		);
	}
}

export default withStyles(Styles)(Banner);
