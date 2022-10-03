import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/common/Footer/Footer";
import Navbar from "../../components/common/Navbar/Navbar";
import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import SalonCategory from "../../components/Categories/SalonCategory";



class SalonPartner extends Component{

  render() {
    return (
      <Fragment>
        <SalonNavbar />
        <SalonCategory/>
        <Outlet />
        {/* <Footer /> */}
      </Fragment>
    );
  }
}

export default SalonPartner;
