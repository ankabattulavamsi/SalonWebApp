/** @format */

import React, { Component } from "react";

import { Button, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { withStyles } from "@mui/styles";

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

import { SalonBestOffersData } from "../../utils/data/SalonPatnerBestOffers/SalonBestOffers";
import CommonViewAllButton from "../common/CommonSalonPatnerButtons/CommonViewAllButton";
import { StylesOffers } from "./BestOffers.styles";
import SalonBestOffersModel from "./SalonBestOffersModel";
import WithRouterHoc from "../common/CommonNavigateComp/WithRouterHoc";
import image from "../../assets/images/Blogimages/blogimg-1.png";
import "./SalonBestOffers.css";
import DeleteModal from "../common/DeleteModal/DeleteModal";

interface IsStateProps {
	classes: any;
	navigate?: any;
}
interface IsState {
	openDeleteModal: boolean;
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

export class SalonPatnerBestOffers extends Component<IsStateProps> {
	state: IsState = {
		open: false,
		openDeleteModal: false,
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

	// onClickOpenModel1 = () => {
	// 	this.setState({ open: true });
	// };

	// handleClose = () => {
	// 	this.setState({ open: false });
	// };

	onClickNavigateOffersPage = () => {
		this.props.navigate("/salon/offers");
	};
	closeDeleteModal = () => {
		this.setState({ openDeleteModal: false });
	};
	openDeleteModal = () => {
		this.setState({ openDeleteModal: true });
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
		this.setState({ editImage: item.offerImage });
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
		const findIndex = SalonOffersData.findIndex(
			(item) => item.id === editId
		);
		SalonOffersData[findIndex].headingOff = editOfferTitle;
		SalonOffersData[findIndex].price = editPrice;
		SalonOffersData[findIndex].dissPrice = editDissPrice;
		SalonOffersData[findIndex].description = editDescription;
		SalonOffersData[findIndex].offerImage = editImage;
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

	render() {
		const { classes } = this.props;
		const {
			open,
			openDeleteModel,
			editId,
			editOfferTitle,
			editPrice,
			editDissPrice,
			editDescription,
			addNewOfferOpen,
			editImage,
		} = this.state;

		const navigatePageButton = "View All Offers";

		return (
			<>
				<Box>
					<Box sx={{ pb: 11, mt: 4 }} className={classes.MainContainer}>
						<Grid
							container
							justifyContent="center"
							columnSpacing={4}
							rowSpacing={3}
							sx={{ px: { sm: 4, xs: 2, md: 0, lg: 0 }, mb: 5 }}>
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
										}}>
										Best Offers
									</Typography>
								</Box>
							</Grid>
							<Grid item lg={4.5} md={5} xs={12} sm={6}>
								<Box>
									<CommonViewAllButton
										buttonName={navigatePageButton}
										onClickNavigateOffersPage={
											this.onClickNavigateOffersPage
										}
									/>
								</Box>
							</Grid>
						</Grid>
						<Grid
							container
							justifyContent="center"
							columnSpacing={4}
							rowSpacing={3}
							sx={{ px: { sm: 4, xs: 2, md: 0, lg: 0 } }}>
							{SalonBestOffersData.slice(0, 2).map((item: any) => {
								return (
									<Grid item lg={4.5} md={5} xs={12} sm={6} key={item.id}>
										<Box>
											<Box
												sx={{ backgroundColor: "#FDF6EE" }}
												className="parent-container">
												<CardMedia
													component="img"
													image={item.editImage}
                          className={classes.CardImageOffer}
													alt="green iguana"
													src={item.offerImage}
												/>
												<Box>
													<Box className={classes.headingCardContainer}>
														<Typography
															className={classes.offersPercentageHead}
															sx={{ fontSize: "22px" }}>
															{item.headingOff}
														</Typography>
														<Box sx={{ display: "flex" }}>
															<Box className="best-offers-discount-price">
																<CurrencyRupeeIcon
																	sx={{ mt: 0.8 }}
																	className={classes.OffersRuppeIcon}
																/>
																<Typography
																	className={classes.OffersDissPrice}>
																	{item.dissPrice}
																</Typography>
															</Box>
															<Box className="best-offers-original-price">
																<CurrencyRupeeIcon
																	sx={{ mt: 0.8 }}
																	className={classes.OffersRuppeIcon}
																/>
																<Typography
																	className={classes.originalPrice}>
																	{item.price}
																</Typography>
															</Box>
														</Box>
													</Box>
													<Typography
														className={classes.offerDescription}
														sx={{ fontSize: "18px", mt: 2 }}>
														{item.description}
													</Typography>

													<Box
														className={
															classes.SalonEditDeleteButonsContainer
														}>
														<Button
															onClick={() => this.onClickOpenModel(item)}
															startIcon={<ModeEditIcon />}
															className="best-offers-edit-btn-text">
															Edit
														</Button>

														<Button
															onClick={this.openDeleteModal}
															startIcon={<DeleteIcon />}
															className="best-offers-delete-btn-text">
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
						<DeleteModal
							jobTitle="Best Offer"
							open={this.state.openDeleteModal}
							onClose={this.closeDeleteModal}
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
					</Box>
					{/* <SalonBestOffersModel open={open} handleClose={this.handleClose} /> */}
				</Box>
			</>
		);
	}
}

export default WithRouterHoc(
	withStyles(StylesOffers)(SalonPatnerBestOffers)
);
