import {
  Button,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

import bgImg from "../../assets/images/OffersSection/Rectangle73.png";

import { SalonBestOffersData } from "../../utils/data/SalonPatnerBestOffers/SalonBestOffers";
import { Buttons } from "../common";
import { StylesOffers } from "./BestOffers.styles";

interface IsStateProps {
  classes: any;
}

export class OffersSalon extends Component<IsStateProps> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Box sx={{ pt: 5, pb: 5 }} className={classes.MainContainer}>
          <Box>
            <Grid
              container
              justifyContent="center"
              sx={{ px: { sm: 4, xs: 0, md: 0, lg: 0 } }}
            >
              <Grid item lg={9} md={10} xs={12} sm={12}>
                <Box sx={{ mb: 5 }}>
                  <Box
                    sx={{
                      background: `url(${bgImg})`,
                      height: { xs: "30vh", sm: "25vh", lg: "40vh" },
                      backgroundSize: "cover",
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(40, 44, 44, 0.651)",
                        top: "50%",
                        left: "50%",
                        mx: "auto",
                        transform: "translate(-50%,-50%)",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white !important",
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                          fontSize: { xs: "22px", sm: "35px", lg: "36px" },
                          lineHeight: "48px",
                        }}
                      >
                        Best Offers
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        transform: "translateY(-50%)",
                        width: { xs: "50%", sm: "25%", lg: "15%" },
                      }}
                    >
                      <Buttons
                        title="Add New Offer"
                        className={classes.capitalized}
                      />
                    </Box>
                  </Box>
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
              {SalonBestOffersData.slice(0, 2).map((item) => {
                return (
                  <Grid item lg={4.5} md={5} xs={12} sm={6} key={item.id}>
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
                              // onClick={this.onClickOpenModel}
                              startIcon={<ModeEditIcon />}
                              className="best-offers-edit-btn-text"
                            >
                              Edit
                            </Button>

                            <Button
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
          </Box>
        </Box>
      </div>
    );
  }
}

export default withStyles(StylesOffers)(OffersSalon);
