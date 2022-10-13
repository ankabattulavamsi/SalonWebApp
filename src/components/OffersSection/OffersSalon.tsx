import { Button, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

import offerImg from "../../assets/images/OffersSection/Rectangle73.png";

import { SalonBestOffersData } from "../../utils/data/SalonPatnerBestOffers/SalonBestOffers";
import { Buttons } from "../common";
import { StylesOffers } from "./BestOffers.styles";
import Banner from "../common/Banner/Banner";
import Layout from "../Layout/Layout";
import SalonBestOffersModel from "./SalonBestOffersModel";

interface IsStateProps {
  classes: any;
}

interface IsState {
  open: boolean;
  SalonOffersData: any[]
}

export class OffersSalon extends Component<IsStateProps> {
  state: IsState = {
    open: false,
    SalonOffersData: SalonBestOffersData
  };

  onClickOpenModel = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onClickDeleteOffer = (id: any) => {
    let filterData = this.state.SalonOffersData.filter((item) => item.id !== id);
    this.setState({SalonOffersData: filterData})
    console.log('delete', filterData)
  };

  render() {
    const { open, SalonOffersData } = this.state;
    const { classes } = this.props;
    return (
      <>
        <Layout>
          <Box sx={{ pt: 8, pb: 5 }} className={classes.MainContainer}>
            <Container maxWidth="lg">
              <Banner
                image={offerImg}
                title="Best Offers"
                buttonTitle="Add new Offer"
              />
              <Grid
                container
                justifyContent="center"
                columnSpacing={4}
                rowSpacing={3}
                sx={{ px: { sm: 0, xs: 0, md: 0, lg: 0 } }}
              >
                {SalonOffersData.map((item, index: number) => {
                  return (
                    <Grid item lg={6} md={6} xs={12} sm={6} key={index}>
                      <Box>
                        <Box
                          sx={{ backgroundColor: "#FDF6EE" }}
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
                                  <Typography
                                    className={classes.OffersDissPrice}
                                  >
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
                                startIcon={<ModeEditIcon />}
                                className="best-offers-edit-btn-text"
                              >
                                Edit
                              </Button>

                              <Button
                                onClick={(e) =>
                                  this.onClickDeleteOffer(index)
                                }
                                startIcon={<DeleteIcon />}
                                className="best-offers-delete-btn-text"
                              >
                                Delete
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </Box>
        </Layout>
        <SalonBestOffersModel open={open} handleClose={this.handleClose} />
      </>
    );
  }
}

export default withStyles(StylesOffers)(OffersSalon);
