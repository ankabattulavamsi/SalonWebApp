import { Box } from "@mui/system";
import React, { Component, Fragment } from "react";
import { Grid } from "@mui/material";

import Footer from "../../components/common/Footer/Footer";
import SalonNavbar from "../../components/common/Navbar/SalonNavbar";


import OwnerDashboardCharts from "../../components/OwnerDashboardChart/OwnerDashboardCharts";

import SalonPatnerBestOffers from "../../components/OffersSection/SalonPatnerBestOffers";
import { salonMenu, CustomerMenu } from "../../utils/data/navbar_menus";
import BookingDashboard from "../../components/BookingsSection/BookingDashboard";
import { Outlet } from "react-router-dom";


class SalonPartner extends Component {
  render() {
    return (
      <Fragment>
        <SalonNavbar link="Home" customer={false} menus={salonMenu} />

        {/* salon page sections */}

        

        <Grid container>
          {/* salon page sections */}
          <OwnerDashboardCharts/>
        </Grid>
     
        <BookingDashboard />
        <Outlet />
        <Box sx={{mt: 10}}>
        <SalonPatnerBestOffers />
        </Box>
        {/* <Footer /> */}
        <Footer salon={true} />

      </Fragment>
    );
  }
}

export default SalonPartner;
