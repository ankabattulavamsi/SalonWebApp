import React, { Component } from "react";

import {
  Button,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { withStyles } from "@mui/styles";

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { SalonBestOffersData } from "../../utils/data/SalonPatnerBestOffers/SalonBestOffers";
import CommonViewAllButton from "../common/CommonSalonPatnerButtons/CommonViewAllButton";
import WithRouterHoc from "../common/CommonNavigateComp/WithRouterHoc";

import "../OffersSection/SalonBestOffers.css";
import './CustomerServe.css'
import { StylesOffers } from "../OffersSection/BestOffers.styles";

interface IsStateProps {
  classes: any;
  navigate?: any;
}

interface IsState {
  open: boolean;
}

export class CustomerOffersServe extends Component<IsStateProps> {
  state: IsState = {
    open: false,
  };

  onClickOpenModel = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onClickNavigateOffersPage = () => {
    this.props.navigate("/salon/offers");
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    const navigatePageButton = "View All Offers";

    return (
      <>
        <Box>
          <Box sx={{pb: 11, mt: 4 }} className=''>
            <Grid
              container
              columnSpacing={4}
              rowSpacing={3}
              sx={{ px: { sm: 0, xs: 0, md: 0, lg: 0 }, mb: 5 }}
            >
              <Grid item lg={4.5} md={5} xs={12} sm={6}>
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="h4"
                    className="salon-best-offers-heading"
                    sx={{
                      fontSize: { xs: "30px", sm: "32px", lg: "36px" },
                      fontWeight: "700",
                      lineHeight: "18px",
                      letterSpacing: "-0.01rem",
                      textTransform: "capitalize",
                      color: "#272522",
                      fontFamily: "Fira sans",
                    }}
                  >
                    Best Offers
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              columnSpacing={4}
              rowSpacing={3}
              sx={{ px: { sm: 0, xs: 0, md: 0, lg: 0 } }}
            >
              {SalonBestOffersData.slice(0, 2).map((item:any) => {
                return (
                  <Grid item lg={6} md={6} xs={12} sm={6} key={item.id}>
                    <Box>
                      <Box
                        className="parent-container"
                      >
                        <CardMedia
                          component="img"
                          image={item.offerImage}
                          alt="green iguana"
                        />
                        <Box>
                          <Box className={classes.headingCardContainer}>
                            <Typography
                              className={classes.offersPercentageHead}
                              sx={{ fontSize: "22px" }}
                            >
                              {item.headingOff}
                            </Typography>
                            <Box sx={{ display: "flex" }}>
                              <Box className="best-offers-discount-price">
                                <CurrencyRupeeIcon
                                  sx={{ mt: 0.8 }}
                                  className={classes.OffersRuppeIcon}
                                />
                                <Typography className={classes.OffersDissPrice}>
                                  {item.dissPrice}
                                </Typography>
                              </Box>
                              <Box className="best-offers-original-price">
                                <CurrencyRupeeIcon
                                  sx={{ mt: 0.8 }}
                                  className={classes.OffersRuppeIcon}
                                />
                                <Typography className={classes.originalPrice}>
                                  {item.price}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          <Typography
                            className={classes.offerDescription}
                            sx={{ fontSize: "18px", mt: 2 }}
                          >
                            {item.description}
                          </Typography>

                          <Box
                            className={classes.SalonEditDeleteButonsContainer}
                          >
                            <Button
                              onClick={this.onClickOpenModel}
                              startIcon={<ShoppingBasketIcon />}
                              className="best-offers-edit-btn-text-cust"
                            >
                              Add To Cart
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </>
    );
  }
}

export default WithRouterHoc(withStyles(StylesOffers)(CustomerOffersServe));
