/** @format */

import { Box } from "@mui/system";
import React, { Component, Fragment } from "react";
import { Grid } from "@mui/material";

import Footer from "../../components/common/Footer/Footer";
import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import { salonMenu } from "../../utils/data/navbar_menus";
import OwnerDashboardCharts from "../../components/OwnerDashboardChart/OwnerDashboardCharts";
import SalonPatnerBestOffers from "../../components/OffersSection/SalonPatnerBestOffers";
import { Outlet } from "react-router-dom";
import Specialists from "../../components/OurSpecialists/Specialists";

class SalonPartner extends Component {
	render() {
		return (
			<Fragment>
				<SalonNavbar link="Home" customer={false} menus={salonMenu} />
				<Grid container>
					{/* salon page sections */}
					<OwnerDashboardCharts />
				</Grid>

				<Outlet />
				<Box sx={{ mt: 10 }}>
					<SalonPatnerBestOffers />
				</Box>
				<Specialists />
				<Footer salon={true} />
				{/* <Footer /> */}
			</Fragment>
		);
	}
}

export default SalonPartner;
