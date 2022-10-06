import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React, { Component } from "react";
  import { withStyles } from "@mui/styles";
  import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { SalonBestOffersData } from "../../utils/data/SalonPatnerBestOffers/SalonBestOffers";
import CommonViewAllButton from "../common/CommonSalonPatnerButtons/CommonViewAllButton";
import { StylesOffers } from "./BestOffers.styles";
  
import "./SalonBestOffers.css";
import CommonEditDeleteButtons from "../common/CommonSalonPatnerButtons/CommonEditDeleteButtons";


  interface IsStateProps {
    classes: any;
  }
  
  export class SalonPatnerBestOffers extends Component<IsStateProps> {
    render() {
      const { classes } = this.props;
      return (
        <div>
          <Box sx={{  pt: 5, pb: 5 }} className={classes.MainContainer} >
            <Box maxWidth='xl' >
            <Grid
              container
              justifyContent="center"
              columnSpacing={4}
              rowSpacing={3}
              sx={{ px: { sm: 4, xs: 2, md: 0, lg: 0 }, mb: 5 }}
            >
              <Grid item lg={5} md={5} xs={12} sm={5}>
                <Box>
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
                <Box sx={{mt:-2}}>
                <CommonViewAllButton />
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
                          sx={{
                            maxHeight: { xs: "100%", sm: "300px" },
                            display: "flex",
                            mx: "auto",
                          }}
                          component="img"
                          image={item.offerImage}
                          alt="green iguana"
                          className="card-image-salon-offers"
                        />
                        <CardContent>
                          <Box className={classes.headingCardContainer}>
                            <Typography className={classes.offersPercentageHead} sx={{fontSize: '22px'}}>
                              {item.headingOff}
                            </Typography>
                            <Box sx={{ display: "flex", width: "101px" }}>
                              <Box
                                className="best-offers-discount-price"
                                sx={{
                                  display: "flex",
                                }}
                              >
                                <CurrencyRupeeIcon
                                  style={{ width: "18px", marginRight: 0, marginTop: 2 }}
                                />
                                <Typography sx={{  fontSize: "20px", mb:0 }}>
                                  {item.dissPrice}
                                </Typography>
                              </Box>
                              <Box
                                className="best-offers-original-price"
                                sx={{
                                  display: "flex",
                                }}
                              >
                                <CurrencyRupeeIcon
                                  style={{ width: "18px", marginRight: 0, marginTop: 2 }}
                                />
                                <Typography
                                  sx={{ fontSize: "20px", ml: 0 }}
                                >
                                  {item.price}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          <Typography
                            className={classes.offerDescription}
                            sx={{ textAlign: "start", fontSize: '18px', mt: 2 }}
                          >
                            {item.description}
                          </Typography>
                        </CardContent>
                        <Box sx={{}}>
                          <CommonEditDeleteButtons />
                        </Box>
                      </Card>
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
  
  export default withStyles(StylesOffers)(SalonPatnerBestOffers);
  