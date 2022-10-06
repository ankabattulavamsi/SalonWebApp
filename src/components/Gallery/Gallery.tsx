/** @format */

import React, { Component, Fragment } from "react";
import { withStyles } from "@mui/styles";
import { Styles } from "./GalleryStyles";

import { Grid, Typography, Box } from "@mui/material";
import { GallaryImgs } from "../../utils/fixtures/GallaryData";

export class Gallery extends Component {
	render() {
		const { classes }: any = this.props;
		return (
			<Grid sx={{ mb: 5 }}>
				<Box className={classes.Gallery_heading}>
					<Typography variant="h4">Salon Gallery</Typography>
				</Box>
				<Grid
					container
					alignItems="center"
					justifyContent="center"
					rowSpacing={2}
					columnGap={0}
					sx={{ px: { lg: 25, md: 25, sm: 1, xs: 1 } }}>
					{GallaryImgs.map((item: any, i: any) => {
						return (
							<Fragment key={item.id}>
								<Grid item lg={3} md={3} sm={12} xs={12}>
									<img src={item.img} width="100%" alt="gallery imgx" />
								</Grid>
								<Grid item lg={0.5} md={0.5} sm={12} xs={12}></Grid>
							</Fragment>
						);
					})}
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(Styles)(Gallery);
