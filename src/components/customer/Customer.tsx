/** @format */

import { Box } from "@mui/material";
import React, { Component } from "react";
import Layout from "../Layout/Layout";
import CustomerBanner from "./CustomerBanner";
import "./customer.css";
import CustomerCatagory from "./CustomerCatagory";
import NearByShop from "./NearByShop";
import CustomerBlog from "./CustomerBlog";
export default class Customer extends Component {
	render() {
		return (
			<Layout customer={true}>
				<Box sx={{ pt: 10, mb: 10 }}>
					<CustomerBanner />
					<CustomerCatagory />
					<NearByShop />
					<CustomerBlog />
				</Box>
			</Layout>
		);
	}
}
