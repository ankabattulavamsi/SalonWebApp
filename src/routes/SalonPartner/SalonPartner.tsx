import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";

import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import { salonMenu } from "../../utils/data/navbar_menus";

class SalonPartner extends Component{

  render() {
    return (
      <Fragment>
        <SalonNavbar 
          link="Home"
          customer={false}
          menus={salonMenu}
        />
        <Outlet />
        {/* <Footer /> */}
      </Fragment>
    );
  }
}

export default SalonPartner;
