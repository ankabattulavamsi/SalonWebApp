import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/common/Footer/Footer";
import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import GalleryOwner from "../../components/GallerySalonOwner/GalleryOwner";
import { SalonMenu, CustomerMenu } from "../../utils/data/navbar_menus";

class SalonPartner extends Component {
  render() {
    return (
      <Fragment>
        <SalonNavbar link="Home" customer={false} menus={SalonMenu} />
        <Outlet />
        <div id="/" style={{ marginTop: "100px" }}>
          <GalleryOwner />
        </div>
        {/* <Footer /> */}
      </Fragment>
    );
  }
}

export default SalonPartner;
