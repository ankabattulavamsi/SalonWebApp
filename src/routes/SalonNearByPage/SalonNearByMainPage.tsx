/** @format */

import { Box, Grid, Stack, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import CustomerMap from "../../components/customer/CustomerMap";
import ShopNearByCard from "../../components/customer/ShopNearByCard";
import Layout from "../../components/Layout/Layout";
import withRouter from "../../hoc/withRouter";
import { shopNearbyData } from "../../utils/data/customer/CustomerData";
import { Styles } from "../../components/OurSpecialists/specialist.styles";

interface SalonNearByMainPageProps {
	navigate: any;
}

class SalonNearByMainPage extends Component<SalonNearByMainPageProps> {
	onClickNavigateServicePage = () => {
		this.props.navigate("/customer/service");
	};
	render() {
		const { classes }: any = this.props;
		return (
			<Layout customer={true}>
				<>
					<Grid container sx={{ mt: 10 }}>
						<Grid item xs={1} sm={1} md={1} lg={1}></Grid>
						<Grid item xs={10} sm={10} md={10} lg={10}>
							<Stack className={classes.specialist}>
								<Box
									sx={{ marginBottom: { sm: "0px", md: "40px" } }}
									className={classes.specialistHeading}>
									<Stack
										sx={{
											mb: { sm: 2, xs: 2 },
											mt: {
												xs: "100px",
												md: "20px",
												lg: "20px",
												sm: "100px",
											},
										}}>
										<Typography className={classes.blogHeading}>
											Popular Salon Nearby
										</Typography>
										<Typography
											className={classes.blogTitleLine}></Typography>
									</Stack>
								</Box>
								<CustomerMap />
								{shopNearbyData.map((data, index: number) => (
									<ShopNearByCard
										data={data}
										key={index}
										onClickNavigateServicePage={
											this.onClickNavigateServicePage
										}
									/>
								))}
							</Stack>
						</Grid>
						<Grid item xs={1} sm={1} md={1} lg={1}></Grid>
					</Grid>
				</>
			</Layout>
		);
	}
}

export default withStyles(Styles)(withRouter(SalonNearByMainPage));
