/** @format */

import { Container } from "@mui/material";
import React, { Component } from "react";
import Layout from "../Layout/Layout";
import SalonOfferImg from "../../assets/images/CustomerServiceImg/07efaeff174f95bd94b6e4fbeec3e38f.png";
import CustomerServeCat from "./CustomerServeCat";
import OurSpecialistCust from "./OurSpecialistCust";
import CustomerBanner from "../common/CustomerServeBanner/CustomerBanner";
import CustomerOffersServe from "./CustomerOffersServe";
import withRouter from "../../hoc/withRouter";

interface IProps {
	navigate?: any;
}
class CustomerSevice extends Component<IProps> {
	handleClickOpenAddModel = () => {
		console.log("====================================");
		this.props.navigate("/customer/salonNearby");
	};

	render() {
		return (
			<Layout customer={true}>
				<Container maxWidth="lg" sx={{ mt: 15, mb: 10 }}>
					<CustomerBanner
						image={SalonOfferImg}
						title="Lakme Services"
						buttonTitle="Lakme Services"
						handleClick={this.handleClickOpenAddModel}
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
