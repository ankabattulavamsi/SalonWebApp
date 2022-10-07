import React, { Component, Fragment } from "react";
import { Box, Grid } from "@mui/material";

import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import GalleryOwner from "../../components/GallerySalonOwner/GalleryOwner";
import OwnerDashboardCharts from "../../components/OwnerDashboardChart/OwnerDashboardCharts";
import SalonPatnerBestOffers from "../../components/OffersSection/SalonPatnerBestOffers";
import { salonMenu } from "../../utils/data/navbar_menus";
import BookingDashboard from "../../components/BookingsSection/BookingDashboard";
import Footer from "../../components/common/Footer/Footer";
import SalonBlog from "../../components/OurBlogs/SalonBlog";
import Specialists from "../../components/OurSpecialists/Specialists";

class SalonPartner extends Component {
  render() {
    return (
      <Fragment>
        <SalonNavbar link="Home" customer={false} menus={salonMenu} />
        <Grid container>
        {/* salon page sections */}
        <OwnerDashboardCharts />
        <BookingDashboard />
        <Box sx={{ mt: 10 }}>
          <SalonPatnerBestOffers />
        </Box>

        <div id="/" style={{ marginTop: "100px" }}>
          <GalleryOwner />
        </div>
        <Specialists />
        <SalonBlog />
        </Grid>
        <Footer salon={true} />
      </Fragment>
    );
  }
}

export default SalonPartner;
