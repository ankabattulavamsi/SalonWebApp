import { Box } from "@mui/system";
import React, { Component, Fragment } from "react";
import { Grid } from "@mui/material";

import Footer from "../../components/common/Footer/Footer";
import SalonNavbar from "../../components/common/Navbar/SalonNavbar";
<<<<<<< HEAD
import { SalonMenu } from "../../utils/data/navbar_menus";
import OwnerDashboardCharts from "../../components/OwnerDashboardChart/OwnerDashboardCharts";
=======
import SalonPatnerBestOffers from "../../components/OffersSection/SalonPatnerBestOffers";
import { salonMenu, CustomerMenu } from "../../utils/data/navbar_menus";
>>>>>>> feature/SalonPage-SAL-63

class SalonPartner extends Component{

  render() {
    return (
      <Fragment>
        <SalonNavbar 
          link="Home"
          customer={false}
          menus={salonMenu}
        />
<<<<<<< HEAD
        <Grid container>
          {/* salon page sections */}
          <OwnerDashboardCharts/>
        </Grid>
        <Footer 
          salon={true}
        />
=======
        <Outlet />
        <Box sx={{mt: 10}}>
        <SalonPatnerBestOffers />
        </Box>
        {/* <Footer /> */}
>>>>>>> feature/SalonPage-SAL-63
      </Fragment>
    );
  }
}

export default SalonPartner;
