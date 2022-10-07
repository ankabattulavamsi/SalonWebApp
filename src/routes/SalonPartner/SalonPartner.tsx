import React, { Component, Fragment } from "react";
import { Box, Grid } from "@mui/material";

import Footer from "../../components/common/Footer/Footer";
import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import { salonMenu } from "../../utils/data/navbar_menus";
import SalonBlog from "../../components/OurBlogs/SalonBlog";
import OwnerDashboardCharts from "../../components/OwnerDashboardChart/OwnerDashboardCharts";
import SalonPatnerBestOffers from "../../components/OffersSection/SalonPatnerBestOffers";

class SalonPartner extends Component{

  render() {
    return (
      <Fragment>
        <SalonNavbar 
          link="Home"
          customer={false}
          menus={salonMenu}
        />
        <Grid container>
          {/* salon page sections */}
          <OwnerDashboardCharts/>
          <Box sx={{mt: 10}}>
          <SalonPatnerBestOffers />
          </Box>
          <SalonBlog />
        </Grid>
        <Footer 
          salon={true}
        />
      </Fragment>
    );
  }
}

export default SalonPartner;
