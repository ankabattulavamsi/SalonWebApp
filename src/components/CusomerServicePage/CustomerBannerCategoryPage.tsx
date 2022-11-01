import React, { Component } from "react";
import CustomerOffersServe from "./CustomerOffersServe";
import CustomerServeCat from "./CustomerServeCat";
import OurSpecialistCust from "./OurSpecialistCust";

class CustomerBannerCategoryPage extends Component {
  render() {
    return (
      <>
        <CustomerServeCat />
        <CustomerOffersServe />
        <OurSpecialistCust />
      </>
    );
  }
}

export default CustomerBannerCategoryPage;
