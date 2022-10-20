import React, { Component, Fragment } from "react";
import { Grid } from "@mui/material";

import SalonNavbar from "../../components/common/Navbar/SalonNavbar";

import { CustomerMenu } from "../../utils/data/navbar_menus";
import Footer from "../../components/common/Footer/Footer";

class SalonCustomer extends Component {
  render() {
    return (
      <Fragment>
        <SalonNavbar customer={true} menus={CustomerMenu} />
        <Grid container>{/* salon Customer page sections */}</Grid>
        <Grid mt={20}>
          <Footer salon={true} />
        </Grid>
      </Fragment>
    );
  }
}

export default SalonCustomer;
