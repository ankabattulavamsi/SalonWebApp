/** @format */

import { Box } from "@mui/material";
import React, { Component } from "react";
import Footer from "../../components/common/Footer/Footer";
import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import SpecialistTeam from "../../components/OurSpecialists/SpecialistTeam";
import { salonMenu } from "../../utils/data/navbar_menus";

export default class SpecialistTeamRoutes extends Component {
	render() {
		return (
			<>
				<SalonNavbar link="Home" customer={false} menus={salonMenu} />

				<Box sx={{ pt: 10, mb: 10 }}>
					<SpecialistTeam />
				</Box>

				<Footer salon={true} />
			</>
		);
	}
}
