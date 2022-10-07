import React, { Component, Fragment } from "react";
import { Box, Grid } from "@mui/material";

import SalonNavbar from "../../components/common/Navbar/SalonNavbar";

import OwnerDashboardCharts from "../../components/OwnerDashboardChart/OwnerDashboardCharts";

import SalonPatnerBestOffers from "../../components/OffersSection/SalonPatnerBestOffers";
import { salonMenu, CustomerMenu } from "../../utils/data/navbar_menus";
import BookingDashboard from "../../components/BookingsSection/BookingDashboard";
import { Outlet } from "react-router-dom";
import Footer from "../../components/common/Footer/Footer";

import SalonBlog from "../../components/OurBlogs/SalonBlog";
import Specialists from "../../components/OurSpecialists/Specialists";

class SalonPartner extends Component {
  render() {
    return (
      <Fragment>
        <SalonNavbar link="Home" customer={false} menus={salonMenu} />

        {/* salon page sections */}
        <OwnerDashboardCharts />
        <BookingDashboard />

        <SalonPatnerBestOffers />

        <Specialists />
        <SalonBlog />

        <Outlet />

        {/* <Footer /> */}
        <Footer salon={true} />
      </Fragment>
    );
  }
}

export default SalonPartner;
