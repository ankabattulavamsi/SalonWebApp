import { Box } from "@mui/system";
import React, { Component } from "react";
import Footer from "../../components/common/Footer/Footer";
import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import GallerySalon from "../../components/GallerySalonOwner/Gallery.Salon";
import { salonMenu } from "../../utils/data/navbar_menus";

export default class GalleryRoutes extends Component {
  render() {
    return (
      <>
        <SalonNavbar link="Home" customer={false} menus={salonMenu} />

        <Box sx={{ pt: 10, mb: 10 }}>
          <GallerySalon />
        </Box>

        <Footer salon={true} />
      </>
    );
  }
}
