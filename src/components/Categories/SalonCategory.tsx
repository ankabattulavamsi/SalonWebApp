/** @format */

import React, { Component } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

import { withStyles } from "@mui/styles";
import { styles } from "./SalonCategory.style";

import CommonViewAllButton from "../common/CommonSalonPatnerButtons/CommonViewAllButton";
import withRouter from "../../hoc/withRouter";
import SalonCategoryCard from "./SalonCategoryCard";
import { salonCategoryData } from "../../utils/data/SalonCategory/SalonCategory_data";

interface categoryProps {
	classes: any;
	navigate: any;
}
class SalonCategory extends Component<categoryProps> {
	onClickNavigateOffersPage = () => {
		this.props.navigate("/salon/category");
	};

	render() {
		const { classes } = this.props;

		return (
			<>
				<Container className={classes.categoryBox}>
					<Box className={classes.categoryTitleBox}>
						<Typography variant="h2">Category</Typography>
						<CommonViewAllButton
							buttonName="View All Category"
							onClickNavigateOffersPage={this.onClickNavigateOffersPage}
						/>
					</Box>
					<Grid container spacing={4} className={classes.categoryImageBox}>
						{salonCategoryData.slice(0, 6).map((item) => {
							return (
								<Grid item lg={4} md={4} sm={6} xs={12} key={item.id}>
									<SalonCategoryCard item={item} />
								</Grid>
							);
						})}
					</Grid>
				</Container>
			</>
		);
	}
}

export default withStyles(styles)(withRouter(SalonCategory));
