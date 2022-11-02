/** @format */
import React, { Component } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Styles } from "../OurSpecialists/specialist.styles";
import { withStyles } from "@mui/styles";
import "react-multi-carousel/lib/styles.css";
import { CommonViewAllButton } from "../common";
import withRouter from "../../hoc/withRouter";
import { shopNearbyData } from "../../utils/data/customer/CustomerData";
import ShopNearByCard from "./ShopNearByCard";
import CustomerMap from "./CustomerMap";

interface IProps {
  navigate: any;
}
class NearByShop extends Component<IProps> {
  onClickNavigateOffersPage = () => {
    this.props.navigate("/customer/nearBy");
  };

  onClickNavigateServicePage = () => {
    this.props.navigate("/customer/service");
  };
  render() {
    const { classes }: any = this.props;

    return (
      <>
        <Grid container sx={{ mt: 10 }}>
          <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <Stack className={classes.specialist}>
              <Box
                sx={{ marginBottom: "40px" }}
                className={classes.specialistHeading}
              >
                <Stack sx={{ mb: { sm: 2, xs: 2 } }}>
                  <Typography className={classes.blogHeading}>
                    Popular Salon Nearby
                  </Typography>
                  <Typography className={classes.blogTitleLine}></Typography>
                </Stack>
                <CommonViewAllButton
                  buttonName="view all Salon"
                  onClickNavigateOffersPage={this.onClickNavigateOffersPage}
                />
              </Box>
              <CustomerMap />
              {shopNearbyData.map((data, index: number) => (
                <ShopNearByCard
                  data={data}
                  key={index}
                  onClickNavigateServicePage={this.onClickNavigateServicePage}
                />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
        </Grid>
      </>
    );
  }
}
export default withStyles(Styles)(withRouter(NearByShop));
