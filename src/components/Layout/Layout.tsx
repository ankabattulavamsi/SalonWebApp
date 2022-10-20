/** @format */

import React from "react";
import { CustomerMenu, salonMenu } from "../../utils/data/navbar_menus";
import Footer from "../common/Footer/Footer";
import SalonNavbar from "../common/Navbar/SalonNavbar";

interface IProps {
	children: React.ReactNode;
	customer?: boolean;
}
class Layout extends React.Component<IProps> {
	render() {
		return (
			<>
				<>
					{this.props.customer === true ? (
						<SalonNavbar customer={true} menus={CustomerMenu} />
					) : (
						<SalonNavbar customer={false} menus={salonMenu} />
					)}

					{this.props.children}

					<Footer salon={true} />
				</>
			</>
		);
	}
}
export default Layout;
