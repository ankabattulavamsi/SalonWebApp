import { Box } from "@mui/system";
import React, { Component } from "react";
import Footer from "../../components/common/Footer/Footer";
import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import OffersSalon from "../../components/OffersSection/OffersSalon";
import { salonMenu } from "../../utils/data/navbar_menus";

export default class OffersRoutes extends Component {
  render() {
    return (
      <>
        <SalonNavbar link="Home" customer={false} menus={salonMenu} />

        <Box sx={{ pt: 9.8, }}>
            <OffersSalon />
        </Box>

        <Footer salon={true} />
      </>
    );
  }
}
