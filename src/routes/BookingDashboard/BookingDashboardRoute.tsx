import { Box } from "@mui/system";
import React, { Component } from "react";
import BookingsMainPage from "../../components/BookingsSection/BookingsMainPage/BookingsMainPage";
import Footer from "../../components/common/Footer/Footer";
import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
import { salonMenu } from "../../utils/data/navbar_menus";

class BookingDashboardRoute extends Component {
  render() {
    return (
      <>
        <SalonNavbar link="Home" customer={false} menus={salonMenu} />

        <Box sx={{ pt: 10, mb: 10 }}>
          <BookingsMainPage />
        </Box>

        <Footer salon={true} />
      </>
    );
  }
}

export default BookingDashboardRoute;
