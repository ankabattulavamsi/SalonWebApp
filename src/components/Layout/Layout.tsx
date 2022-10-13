/** @format */

import React from "react";
import { salonMenu } from "../../utils/data/navbar_menus";
import Footer from "../common/Footer/Footer";
import SalonNavbar from "../common/Navbar/SalonNavbar";

interface IProps {
	children: React.ReactNode;
}
class Layout extends React.Component<IProps> {
	render() {
		return (
			<>
				<>
					<SalonNavbar customer={false} menus={salonMenu} />

					{this.props.children}

					<Footer salon={true} />
				</>
			</>
		);
	}
}
export default Layout;
