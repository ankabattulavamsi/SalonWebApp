/** @format */
import React, { Component } from "react";
import { Container } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import CustomerBanner from "../../components/common/CustomerServeBanner/CustomerBanner";
import SalonOfferImg from "../../assets/images/CustomerServiceImg/07efaeff174f95bd94b6e4fbeec3e38f.png";
import SalonServiceDetail from "./SalonServiceDetail";
import withRouter from "../../hoc/withRouter";

interface IsProps {
	navigate: any
}

class SalonNearByPage extends Component<IsProps> {

	handleClickOpenCategories = () => {
		console.log("====================================");
		this.props.navigate("/customer/category");
	};

	handleClickOtherProps = () => {
		this.props.navigate("/customer/salonNearby")
	}

	render() {
		return (
			<Layout customer={true}>
				<Container maxWidth="lg" sx={{ mt: 15, mb: 10 }}>
					<CustomerBanner
						image={SalonOfferImg}
						title="Lakme Services"
						buttonTitle="Lakme Services"
						oiBtnTitle="Other Information"
						handleClick={this.handleClickOpenCategories}
						handleClickOther={this.handleClickOtherProps}
					/>
					<SalonServiceDetail />
				</Container>
			</Layout>
		);
	}
}


export default withRouter(SalonNearByPage)