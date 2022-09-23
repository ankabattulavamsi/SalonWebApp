import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/Navbar/Navbar";
import TeamSection from "../../components/TeamSection/TeamSection";

class LandingPageNavigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Outlet />
      </Fragment>
    );
  }
}

export default LandingPageNavigation;
