import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/common/Footer/Footer";
import Navbar from "../../components/common/Navbar/Navbar";
import OwnerDashboardCharts from "../../components/OwnerDashboardChart/OwnerDashboardCharts"

class SalonPartner extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Outlet />
        <Footer />
        <OwnerDashboardCharts/>
      </Fragment>
    );
  }
}

export default SalonPartner;
