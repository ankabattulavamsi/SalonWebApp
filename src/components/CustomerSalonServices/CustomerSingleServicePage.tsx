import { Button, Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import React, { Component } from "react";
import WithRouterHoc from "../common/CommonNavigateComp/WithRouterHoc";
import Layout from "../Layout/Layout";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { hairStyle } from "./CustomerS.style";
interface IsSinglePageProps {
  location: any;
  classes: any;
}

class CustomerSingleServicePage extends Component<IsSinglePageProps> {
  render() {
    const { state } = this.props.location;
    const { classes } = this.props;
    console.log("location-data", state);
    return (
      <Layout customer={true}>
        <Container className={classes.headContainer}>
          <Grid container spacing={4} sx={{ p: { lg: 0 } }}>
            <Grid item xs={12} md={6} sm={6} lg={6}>
              <Box>
                <img
                  src={state.hairServeImg}
                  alt="hair"
                  style={{ width: "250px" }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} sm={6} lg={6}>
              <Typography className={classes.MainHeading}>
                {state.heading}
              </Typography>
              <Box className={classes.priceContianer}>
                <Box className={classes.priceContianerS}>
                  <CurrencyRupeeIcon
                    style={{ fontSize: "16px", color: "#E7A356" }}
                  />
                  <Typography variant="h3">{state.price}</Typography>
                </Box>

                <Box className={classes.priceContianerS}>
                  <CurrencyRupeeIcon
                    style={{ fontSize: "16px", marginLeft: "8px" }}
                  />
                  <Typography variant="h2">{state.dissPrice}</Typography>
                </Box>
              </Box>
              <Typography className={classes.descriptionP}>
                {state.description}
              </Typography>
              <Typography className={classes.descriptionW}>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble
              </Typography>
              <Button
                className={classes.AddBtn}
                startIcon={
                  <ShoppingBasketIcon
                    style={{ fontSize: "26px", marginBottom: "5px" }}
                  />
                }
              >
                Add To Cart
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

export default WithRouterHoc(withStyles(hairStyle)(CustomerSingleServicePage));
