import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { SalonBestOffersData } from "../../utils/data/SalonPatnerBestOffers/SalonBestOffers";
import CommonViewAllButton from "../common/CommonSalonPatnerButtons/CommonViewAllButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { StylesOffers } from "./BestOffers.styles";

import "./SalonBestOffers.css";
import SalonBestOffersModel from "./SalonBestOffersModel";
import WithRouterHoc from "../common/CommonNavigateComp/WithRouterHoc";

interface IsStateProps {
  classes: any;
  navigate?: any;
}

interface IsState {
  open: boolean;
}

export class SalonPatnerBestOffers extends Component<IsStateProps> {
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
    this.props.navigate("/best-offers");
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    const navigatePageButton = "View All Offers";

    return (
      <div>
        <Box sx={{ pt: 5, pb: 5, mt: 5 }} className={classes.MainContainer}>
          <Box maxWidth="xl">
            <Grid
              container
              justifyContent="center"
              columnSpacing={4}
              rowSpacing={3}
              sx={{ px: { sm: 4, xs: 2, md: 0, lg: 0 }, mb: 5 }}
            >
              <Grid item lg={5} md={5} xs={12} sm={5}>
                <Box sx={{mt:2}}>
                  <Typography
                    variant="h4"
                    className="salon-best-offers-heading"
                    sx={{
                      fontSize: { xs: "20px", sm: "32px", lg: "36px" },
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
              <Grid item lg={5} md={5} xs={12} sm={5}>
                <Box>
                  <CommonViewAllButton
                    buttonName={navigatePageButton}
                    onClickNavigateOffersPage={this.onClickNavigateOffersPage}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              columnSpacing={4}
              rowSpacing={3}
              sx={{ px: { sm: 4, xs: 2, md: 0, lg: 0 } }}
            >
              {SalonBestOffersData.map((item) => {
                return (
                  <Grid item lg={5} md={5} xs={12} sm={10} key={item.id}>
                    <Box>
                      <Card
                        sx={{ backgroundColor: "#FDF6EE" }}
                        className="parent-container"
                      >
                        <CardMedia
                          component="img"
                          image={item.offerImage}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Box className={classes.headingCardContainer}>
                            <Typography
                              className={classes.offersPercentageHead}
                              sx={{ fontSize: "22px" }}
                            >
                              {item.headingOff}
                            </Typography>
                            <Box sx={{ display: "flex", width: "101px" }}>
                              <Box className="best-offers-discount-price">
                                <CurrencyRupeeIcon
                                  style={{
                                    width: "18px",
                                    marginTop: 2,
                                  }}
                                />
                                <Typography sx={{ fontSize: "20px" }}>
                                  {item.dissPrice}
                                </Typography>
                              </Box>
                              <Box className="best-offers-original-price">
                                <CurrencyRupeeIcon
                                  style={{
                                    width: "18px",
                                    marginTop: 2,
                                  }}
                                />
                                <Typography sx={{ fontSize: "20px" }}>
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
                        </CardContent>
                        <Box className={classes.EditDeleteButonsContainer}>
                          <Box
                            onClick={this.onClickOpenModel}
                            className="edit-button1"
                          >
                            <ModeEditIcon className="edit-icon" />
                            <Button className="best-offers-edit-text">
                              {item.typeEdit}
                            </Button>
                          </Box>

                          <Divider
                            sx={{ border: "1px solid #88878F", opacity: "0.2" }}
                            className="buttons-border-line"
                          />

                          <Box className="delete-button2">
                            <DeleteIcon className="delete-icon" />
                            <Button className="best-offers-delete-text">
                              {item.typeDelete}
                            </Button>
                          </Box>
                        </Box>
                      </Card>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
        <SalonBestOffersModel open={open} handleClose={this.handleClose} />
      </div>
    );
  }
}

export default WithRouterHoc(withStyles(StylesOffers)(SalonPatnerBestOffers));
