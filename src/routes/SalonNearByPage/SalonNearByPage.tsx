/** @format */
import React, { Component } from "react";
import { Container } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import CustomerBanner from "../../components/common/CustomerServeBanner/CustomerBanner";
import SalonOfferImg from "../../assets/images/CustomerServiceImg/07efaeff174f95bd94b6e4fbeec3e38f.png";
import SalonServiceDetail from "./SalonServiceDetail";
export default class SalonNearByPage extends Component {
	render() {
		return (
			<Layout customer={true}>
				<Container maxWidth="lg" sx={{ mt: 15, mb: 10 }}>
					<CustomerBanner
						image={SalonOfferImg}
						title="Lakme Services"
						buttonTitle="Lakme Services"
						oiBtnTitle="Other Information"
					/>
					<SalonServiceDetail />
				</Container>
			</Layout>
		);
	}
}
