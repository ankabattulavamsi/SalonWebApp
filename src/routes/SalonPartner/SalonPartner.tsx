import { Box } from "@mui/system";
import React, { Component, Fragment } from "react";

import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import SalonPatnerBestOffers from "../../components/OffersSection/SalonPatnerBestOffers";
import { salonMenu } from "../../utils/data/navbar_menus";
import Specialists from "../../components/OurSpecialists/Specialists";
import Footer from "../../components/common/Footer/Footer";
import OwnerDashboardCharts from "../../components/OwnerDashboardChart/OwnerDashboardCharts";
import { Grid } from "@mui/material";

class SalonPartner extends Component {
  render() {
    return (
      <Fragment>
				<SalonNavbar link="Home" customer={false} menus={salonMenu} />
				<Grid container>
					{/* salon page sections */}
					<OwnerDashboardCharts />
				</Grid>
				<Box sx={{ mt: 10 }}>
					<SalonPatnerBestOffers />
				</Box>
				<Specialists />
				<Footer salon={true} />
			
			</Fragment>
    );
  }
}

export default SalonPartner;
