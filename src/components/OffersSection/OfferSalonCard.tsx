/** @format */

import React, { Component } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { SalonOfferProps } from "../../utils/data/SalonPatnerBestOffers/SalonBestOffers";
import { StylesOffers } from "./BestOffers.styles";
import { withStyles } from "@mui/styles";
import EditDeleteCommonButton from "../common/CommonButtons/EditDeleteCommonButton";

interface IProps {
	classes?: any;
	item: SalonOfferProps;
	onClickOpenModel?: any;
	onClickDeleteOffer?: any;
}
class OfferSalonCard extends Component<IProps> {
	render() {
		const { classes, item } = this.props;
		return (
			<Box>
				<Box
					sx={{ backgroundColor: "#FDF6EE" }}
					className="parent-container">
					<CardMedia
						component="img"
						image={item.brideServeImg}
						className={classes.CardImageOffer}
						alt={`${item.id}`}
						src={item.brideServeImg}
						sx={{
							borderRadius: "4px",
							objectFit: "cover",
						}}
					/>
					<Box>
						<Box className={classes.headingCardContainer}>
							<Typography
								className={classes.offersPercentageHead}
								sx={{ fontSize: "22px" }}>
								{item.heading}
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
							sx={{ fontSize: "18px", mt: 2 }}>
							{item.description}
						</Typography>

						<Box className={classes.SalonEditDeleteButonsContainer}>
							<div className="offer-edit-delete">
								<EditDeleteCommonButton
									onClickEdit={() => this.props.onClickOpenModel(item)}
									onClickDelete={() =>
										this.props.onClickDeleteOffer(item.id)
									}
								/>
							</div>
						</Box>
					</Box>
				</Box>
			</Box>
		);
	}
}
export default withStyles(StylesOffers)(OfferSalonCard);
