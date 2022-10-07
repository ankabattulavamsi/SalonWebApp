import React, { Component, Fragment } from "react";
import { Grid } from "@mui/material";

import Footer from "../../components/common/Footer/Footer";
import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import { SalonMenu } from "../../utils/data/navbar_menus";
import BookingDashboard from "../../components/BookingsSection/BookingDashboard";

class SalonPartner extends Component {
  render() {
    return (
      <Fragment>
        <SalonNavbar link="Home" customer={false} menus={SalonMenu} />

        {/* salon page sections */}
        <BookingDashboard />

        <Footer salon={true} />
      </Fragment>
    );
  }
}

export default SalonPartner;
