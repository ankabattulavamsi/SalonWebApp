import { Box } from "@mui/system";
import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/common/Footer/Footer";
import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import SalonPatnerBestOffers from "../../components/OffersSection/SalonPatnerBestOffers";
import { salonMenu, CustomerMenu } from "../../utils/data/navbar_menus";

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
        <Box>
        <SalonPatnerBestOffers />
        </Box>
        {/* <Footer /> */}
      </Fragment>
    );
  }
}

export default SalonPartner;
