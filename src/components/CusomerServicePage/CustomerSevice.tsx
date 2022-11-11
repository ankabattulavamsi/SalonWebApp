/** @format */

import { Container } from "@mui/material";
import React, { Component } from "react";

import CustomerBanner from "../common/CustomerServeBanner/CustomerBanner";
import Layout from "../Layout/Layout";
import withRouter from "../../hoc/withRouter";

import SalonOfferImg from "../../assets/images/CustomerServiceImg/07efaeff174f95bd94b6e4fbeec3e38f.png";
import CustomerServeCat from "./CustomerServeCat";
import CustomerOffersServe from "./CustomerOffersServe";
import OurSpecialistCust from "./OurSpecialistCust";

interface IProps {
  navigate?: any;
}
class CustomerSevice extends Component<IProps> {
  handleClickOpenCategories = () => {
    this.props.navigate("/customer/service");
  };

  handleClickOtherProps = () => {
    this.props.navigate("/customer/salonNearby");
  };

  render() {
    return (
      <Layout customer={true}>
        <Container maxWidth="lg" sx={{ mt: {xs: 20, md: 13 }, mb: 10 }}>
          <CustomerBanner
            image={SalonOfferImg}
            title="Lakme Services"
            buttonTitle="Lakme Services"
            handleClick={this.handleClickOpenCategories}
            handleClickOther={this.handleClickOtherProps}
            oiBtnTitle="Other Information"
          />
          <CustomerServeCat />
          <CustomerOffersServe />
          <OurSpecialistCust />
        </Container>
      </Layout>
    );
  }
}

export default withRouter(CustomerSevice);
