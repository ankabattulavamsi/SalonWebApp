/** @format */

import React, { Component, Fragment } from "react";
import { Box, Grid } from "@mui/material";

import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import GalleryOwner from "../../components/GallerySalonOwner/GalleryOwner";
import OwnerDashboardCharts from "../../components/OwnerDashboardChart/OwnerDashboardCharts";
import SalonPatnerBestOffers from "../../components/OffersSection/SalonPatnerBestOffers";
import { salonMenu } from "../../utils/data/navbar_menus";
import BookingDashboard from "../../components/BookingsSection/BookingDashBoardSalonHomepage/BookingDashboard";
import Footer from "../../components/common/Footer/Footer";
import Specialists from "../../components/OurSpecialists/Specialists";
import SalonCategory from "../../components/Categories/SalonCategory";
import SalonBlogSection from "../../components/OurBlogs/SalonBlogSection";

class SalonPartner extends Component {
	render() {
		return (
			<Fragment>
				<SalonNavbar customer={false} menus={salonMenu} />
				<Grid container>
					{/* salon page sections */}
					<OwnerDashboardCharts />
					<Box sx={{ mx: "auto", width: "100%" }}>
						<BookingDashboard />
					</Box>
					<SalonCategory />
					<Box>
						<SalonPatnerBestOffers />
					</Box>

					<div id="/" style={{ margin: "100px auto", width: "100%" }}>
						<GalleryOwner />
					</div>

					<Specialists />
					<SalonBlogSection />
				</Grid>
				<Footer salon={true} />
			</Fragment>
		);
	}
}

export default SalonPartner;
