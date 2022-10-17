import React, { Component } from "react";
import { Container } from "@mui/system";
import { Box } from "@mui/material";

import categoryBanner from "../../assets/images/SalonCategory/categoryBanner.png";
import Banner from "../common/Banner/Banner";
import Layout from "../Layout/Layout";
import SalonCategoryCard from "./SalonCategoryCard";
import AddNewCategoryModal from "./AddNewCategoryModal";
class SalonAllCategory extends Component { 
	state = {
		open: false,
	};
	onClose = () => {
		this.setState({ open: false });
	};
	handleClick = () => {
		this.setState({ open: true });
	};
  render() {
	
    return (
		<Layout>
			<Box sx={{ pt: 10, mb: 10 }}>
				<Container maxWidth="lg">
					<Banner
						image={categoryBanner}
						title="Category"
						buttonTitle="Add new category"
						handleClick={this.handleClick}
					/>
					<SalonCategoryCard />
					<AddNewCategoryModal open={this.state.open} onClose={this.onClose} />
				</Container>
			</Box>
		</Layout>
    );
  }
}

export default SalonAllCategory;
