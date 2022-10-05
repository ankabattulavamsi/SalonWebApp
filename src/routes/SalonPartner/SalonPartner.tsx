import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/common/Footer/Footer";
import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import { SalonMenu, CustomerMenu } from "../../utils/data/navbar_menus";

class SalonPartner extends Component{

  render() {
    return (
      <Fragment>
        <SalonNavbar 
          link="Home"
          customer={false}
          menus={SalonMenu}
        />
        <Outlet />
        <Footer 
          salon={true}
        />
      </Fragment>
    );
  }
}

export default SalonPartner;
