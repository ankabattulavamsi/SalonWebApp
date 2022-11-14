/** @format */

import { Button, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

import offerImg from "../../assets/images//OffersSection/Rectangle73.png";
import { SalonBestOffersData } from "../../utils/data/SalonPatnerBestOffers/SalonBestOffers";
import { StylesOffers } from "./BestOffers.styles";
import Banner from "../common/Banner/Banner";
import Layout from "../Layout/Layout";
import SalonBestOffersModel from "./SalonBestOffersModel";
import DeleteModal from "../common/DeleteModal/DeleteModal";
import AddNewOffer from "./AddNewOffer";
import OfferSalonCard from "./OfferSalonCard";

interface IsStateProps {
  classes: any;
}

interface IsState {
  open: boolean;
  openDeleteModel: boolean;
  addNewOfferOpen: boolean;
  SalonOffersData: any[];
  editId: string;
  editOfferTitle: string;
  editPrice: string;
  editDissPrice: string;
  editDescription: string;
  editImage: string;
  deleteId: string;
}

export class OffersSalon extends Component<IsStateProps> {
  state: IsState = {
    open: false,
    openDeleteModel: false,
    addNewOfferOpen: false,
    SalonOffersData: SalonBestOffersData || [],
    editId: "",
    editOfferTitle: "",
    editPrice: "",
    editDissPrice: "",
    editDescription: "",
    editImage: "",
    deleteId: "",
  };

  handleCloseAddOffer = () => {
    this.setState({ addNewOfferOpen: false });
  };

  onClose = () => {
    this.setState({ openDeleteModel: false });
  };

  onClickOpenModel = (item: any) => {
    this.setState({ open: true });
    this.setState({ editId: item.id });
    this.setState({ editOfferTitle: item.headingOff });
    this.setState({ editPrice: item.price });
    this.setState({ editDissPrice: item.dissPrice });
    this.setState({ editDescription: item.description });
    this.setState({ editImage: item.brideServeImg });
  };

  handleClickOpenAddModel = () => {
    this.setState({ addNewOfferOpen: true });
  };

  onSubmitEditModel = () => {
    const {
      SalonOffersData,
      editId,
      editOfferTitle,
      editPrice,
      editDissPrice,
      editDescription,
      editImage,
    } = this.state;
    const findIndex = SalonOffersData.findIndex((item) => item.id === editId);
    SalonOffersData[findIndex].headingOff = editOfferTitle;
    SalonOffersData[findIndex].price = editPrice;
    SalonOffersData[findIndex].dissPrice = editDissPrice;
    SalonOffersData[findIndex].description = editDescription;
    SalonOffersData[findIndex].brideServeImg = editImage;
    this.setState({ SalonBestOffersData: SalonBestOffersData });
    this.setState({ open: false });
    this.setState({ editOfferTitle: "" });
    this.setState({ editPrice: "" });
    this.setState({ editDissPrice: "" });
    this.setState({ editDescription: "" });
    this.setState({ editImage: "" });
  };

  handleCloseBage = () => {
    this.setState({
      editImage: "",
      id: this.state.editId,
    });
  };

  handleOnChangeImage = (e: any) => {
    this.setState({ editImage: URL.createObjectURL(e.target.files[0]) });
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
    this.setState({ editOfferTitle: "" });
    this.setState({ editPrice: "" });
    this.setState({ editDissPrice: "" });
    this.setState({ editDescription: "" });
    this.setState({ editImage: "" });
  };

  onClickDeleteOffer = (id: any) => {
    this.setState({ editId: id });
    this.setState({ openDeleteModel: true });
  };

  onClickOfferDelete = (id: any) => {
    this.setState({
      SalonOffersData: this.state.SalonOffersData.filter(
        (item) => item.id !== id
      ),
    });
    this.setState({ openDeleteModel: false });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      open,
      editId,
      editOfferTitle,
      editPrice,
      editDissPrice,
      editDescription,
      addNewOfferOpen,
      editImage,
    } = this.state;
    const { classes } = this.props;
    return (
      <>
        <Layout>
          <Box sx={{ pt: 10, pb: 5 }} className={classes.MainContainer}>
            <Container maxWidth="lg">
              <Banner
                image={offerImg}
                title="Best Offers"
                buttonTitle="Add new Offer"
                handleClick={this.handleClickOpenAddModel}
              />
              <Grid
                container
                justifyContent="center"
                columnSpacing={4}
                rowSpacing={3}
                sx={{ px: { sm: 0, xs: 0, md: 0, lg: 0 } }}
              >
                {SalonBestOffersData.map((item) => {
                  return (
                    <Grid item lg={6} md={6} xs={12} sm={6} key={item.id}>
                      <OfferSalonCard
                        onClickOpenModel={this.onClickOpenModel}
                        onClickDeleteOffer={this.onClickDeleteOffer}
                        item={item}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </Box>
        </Layout>
        <AddNewOffer
          addNewOfferOpen={addNewOfferOpen}
          handleCloseAddOffer={this.handleCloseAddOffer}
          editOfferTitle={editOfferTitle}
          editPrice={editPrice}
          editDissPrice={editDissPrice}
          editId={editId}
          editDescription={editDescription}
          editImage={editImage}
          onClicOfCloseBadge={this.handleCloseBage}
          handleOnChangeImage={this.handleOnChangeImage}
          onChangeeditOfferTitle={this.onChangeeditOfferTitle}
          onSubmitEditModel={this.onSubmitEditModel}
          onChangePrice={this.onChangePrice}
          onChangeDissPrice={this.onChangeDissPrice}
          onChangeDescription={this.onChangeDescription}
        />
        <SalonBestOffersModel
          open={open}
          handleClose={this.handleClose}
          editOfferTitle={editOfferTitle}
          editId={editId}
          editPrice={editPrice}
          editImage={editImage}
          editDissPrice={editDissPrice}
          editDescription={editDescription}
          onClicOfCloseBadge={this.handleCloseBage}
          handleOnChangeImage={this.handleOnChangeImage}
          onChangeeditOfferTitle={this.onChangeeditOfferTitle}
          onSubmitEditModel={this.onSubmitEditModel}
          onChangePrice={this.onChangePrice}
          onChangeDissPrice={this.onChangeDissPrice}
          onChangeDescription={this.onChangeDescription}
        />

        <DeleteModal
          jobTitle="Offer"
          open={this.state.openDeleteModel}
          onClose={this.onClose}
          handleConfirmDelete={this.onClickOfferDelete}
        />
      </>
    );
  }
}

export default withStyles(StylesOffers)(OffersSalon);
