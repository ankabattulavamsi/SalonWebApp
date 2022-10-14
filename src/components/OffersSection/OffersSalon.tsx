import { Button, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

import offerImg from "../../assets/images//OffersSection/Rectangle73.png";
import { SalonBestOffersData } from "../../utils/data/SalonPatnerBestOffers/SalonBestOffers";
import { Buttons } from "../common";
import { StylesOffers } from "./BestOffers.styles";
import Banner from "../common/Banner/Banner";
import Layout from "../Layout/Layout";
import SalonBestOffersModel from "./SalonBestOffersModel";
import DeleteModal from "../common/DeleteModal/DeleteModal";

interface IsStateProps {
  classes: any;
}

interface IsState {
  open: boolean;
  openDeleteModel: boolean;
  SalonOffersData: any[];
  editId: string;
  editOfferTitle: string;
  editPrice: string;
  editDissPrice: string;
  editDescription: string;
}

export class OffersSalon extends Component<IsStateProps> {
  state: IsState = {
    open: false,
    openDeleteModel: false,
    SalonOffersData: SalonBestOffersData || [],
    editId: "",
    editOfferTitle: "",
    editPrice: "",
    editDissPrice: "",
    editDescription: "",
  };

  onClose = () => {
    this.setState({ openDeleteModel: false });
  };

  onClickOpenModel = (item: any) => {
    this.setState({ open: true });
    console.log("item", item);
    this.setState({ editId: item.id });
    this.setState({ editOfferTitle: item.headingOff });
    this.setState({ editPrice: item.price });
    this.setState({ editDissPrice: item.dissPrice });
    this.setState({ editDescription: item.description });
  };

  onSubmitEditModel = () => {
    const {
      SalonOffersData,
      editId,
      editOfferTitle,
      editPrice,
      editDissPrice,
      editDescription,
    } = this.state;
    const findIndex = SalonOffersData.findIndex((item) => item.id === editId);
    SalonOffersData[findIndex].headingOff = editOfferTitle;
    SalonOffersData[findIndex].price = editPrice;
    SalonOffersData[findIndex].dissPrice = editDissPrice;
    SalonOffersData[findIndex].description = editDescription;
    this.setState({ SalonBestOffersData: SalonBestOffersData });
    this.setState({ open: false });
  };

  onChangeeditOfferTitle = (e: any) => {
    this.setState({ editOfferTitle: e.target.value });
  };

  onChangePrice = (e: any) => {
    this.setState({ editPrice: e.target.value });
  };

  onChangeDissPrice = (e: any) => {
    this.setState({ editDissPrice: e.target.value });
  };

  onChangeDescription = (e: any) => {
    this.setState({ editDescription: e.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onClickDeleteOffer = (id: any) => {
    let filterData = this.state.SalonOffersData.filter(
      (item) => item.id !== id
    );
    this.setState({ SalonOffersData: filterData });
    this.setState({openDeleteModel: true})
  };

  render() {
    const {
      open,
      SalonOffersData,
      editId,
      editOfferTitle,
      editPrice,
      editDissPrice,
      editDescription,
    } = this.state;
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
                OnClick={() => this.setState({ open: true })}
              />
              <Grid
                container
                justifyContent="center"
                columnSpacing={4}
                rowSpacing={3}
                sx={{ px: { sm: 0, xs: 0, md: 0, lg: 0 } }}
              >
                {SalonBestOffersData.map((item: any, index: number) => {
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
                                onClick={() => this.onClickOpenModel(item)}
                                startIcon={<ModeEditIcon />}
                                className="best-offers-edit-btn-text"
                              >
                                Edit
                              </Button>

                              <Button
                                onClick={(e) => this.onClickDeleteOffer(index)}
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
        <SalonBestOffersModel
          open={open}
          handleClose={this.handleClose}
          editOfferTitle={editOfferTitle}
          editPrice={editPrice}
          editDissPrice={editDissPrice}
          editDescription={editDescription}
          onChangeeditOfferTitle={this.onChangeeditOfferTitle}
          onSubmitEditModel={this.onSubmitEditModel}
          onChangePrice={this.onChangePrice}
          onChangeDissPrice={this.onChangeDissPrice}
          onChangeDescription={this.onChangeDescription}
        />

        <DeleteModal
          jobTitle="Specialist"
          open={this.state.openDeleteModel}
          onClose={this.onClose}
        />
      </>
    );
  }
}

export default withStyles(StylesOffers)(OffersSalon);
