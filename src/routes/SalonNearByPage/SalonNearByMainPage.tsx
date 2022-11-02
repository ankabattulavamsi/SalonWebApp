import React, { Component } from "react";
import NearByShop from "../../components/customer/NearByShop";
import Layout from "../../components/Layout/Layout";

class SalonNearByMainPage extends Component {
  render() {
    return (
      <Layout customer={true}>
        <NearByShop />
      </Layout>
    );
  }
}

export default SalonNearByMainPage;
