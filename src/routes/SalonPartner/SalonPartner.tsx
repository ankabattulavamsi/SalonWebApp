import { Box } from "@mui/system";
import React, { Component, Fragment } from "react";
import { Grid } from "@mui/material";

import Footer from "../../components/common/Footer/Footer";
import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import SalonPatnerBestOffers from "../../components/OffersSection/SalonPatnerBestOffers";
import { salonMenu, CustomerMenu } from "../../utils/data/navbar_menus";
import { Outlet } from "react-router-dom";

class SalonPartner extends Component{

  render() {
    return (
      <Fragment>
        <SalonNavbar 
          link="Home"
          customer={false}
          menus={salonMenu}
        />
        <Outlet />
        <Box sx={{mt: 10}}>
        <SalonPatnerBestOffers />
        </Box>
        {/* <Footer /> */}
      </Fragment>
    );
  }
}

export default SalonPartner;
