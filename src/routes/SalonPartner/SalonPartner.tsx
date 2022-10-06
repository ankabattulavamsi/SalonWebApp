import React, { Component, Fragment } from "react";

import Footer from "../../components/common/Footer/Footer";
import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import OurBlogs from "../../components/OurBlogs/OurBlogs";
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
        <Footer 
          salon={true}
        />
      </Fragment>
    );
  }
}

export default SalonPartner;
