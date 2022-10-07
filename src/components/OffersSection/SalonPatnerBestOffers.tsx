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
import { Link } from "react-router-dom";
import SalonBestOffersModel from "./SalonBestOffersModel";

interface IsStateProps {
  classes: any;
}

interface IsState {
  open: boolean
}

export class SalonPatnerBestOffers extends Component<IsStateProps> {

  state:IsState = { 
      open : false
  }

  onClickOpenModel = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const { classes } = this.props;
    const {open} = this.state 

    return (
      <div>
        <Box sx={{ pt: 5, pb: 5, mt:5 }} className={classes.MainContainer}>
          <Box maxWidth="xl">
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
                      fontSize: { xs: "20px", sm: "35px", lg: "40px" },
                      fontWeight: "700",
                      lineHeight: "28px",
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
                <Link to="/best-offers" style={{textDecoration: 'none'}}>
                  <CommonViewAllButton />
                </Link>
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
                            <Typography
                              className={classes.offersPercentageHead}
                              sx={{ fontSize: "22px" }}
                            >
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
                                  style={{
                                    width: "18px",
                                    marginRight: 0,
                                    marginTop: 2,
                                  }}
                                />
                                <Typography sx={{ fontSize: "20px", mb: 0 }}>
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
                                  style={{
                                    width: "18px",
                                    marginRight: 0,
                                    marginTop: 2,
                                  }}
                                />
                                <Typography sx={{ fontSize: "20px", ml: 0 }}>
                                  {item.price}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          <Typography
                            className={classes.offerDescription}
                            sx={{ textAlign: "start", fontSize: "18px", mt: 2 }}
                          >
                            {item.description}
                          </Typography>
                        </CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            borderRadius: "5px",
                            backgroundColor: "#FFFFFF",
                            m: 1,
                            width: "320px",
                          }}
                        >
                          <Box 
                          onClick={this.onClickOpenModel}
                            className="edit-button1"
                            sx={{
                              display: "flex",
                              cursor: "pointer",
                              p: 1,
                              pr: 4,
                              pl: 4,
                              borderTopLeftRadius: "5px",
                              borderBottomLeftRadius: "5px",
                            }}
                          >
                            <ModeEditIcon
                              style={{ marginTop: "10px" }}
                              className="edit-icon"
                            />
                            <Button
                              className="best-offers-edit-text"
                              sx={{
                                fontFamily: "Fira Sans",
                                fontWeight: 700,
                                fontSize: "20px",
                              }}
                            >
                              {item.typeEdit}
                            </Button>
                          </Box>

                          <Divider
                            sx={{ border: "1px solid #88878F", opacity: "0.2" }}
                            className="buttons-border-line"
                          />

                          <Box
                            className="delete-button2"
                            sx={{
                              display: "flex",
                              cursor: "pointer",
                              p: 1,
                              pl: 3,
                              pr: 5,
                              borderTopRightRadius: "5px",
                              borderBottomRightRadius: "5px",
                            }}
                          >
                            <DeleteIcon
                              style={{ marginTop: "10px" }}
                              className="delete-icon"
                            />
                            <Button
                              className="best-offers-delete-text"
                              sx={{
                                fontFamily: "Fira Sans",
                                fontWeight: 700,
                                fontSize: "20px",
                              }}
                            >
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

export default withStyles(StylesOffers)(SalonPatnerBestOffers);
