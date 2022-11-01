/** @format */

import {
	Box,
	Button,
	Divider,
	Grid,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { sliderImages } from "../../utils/data/SliderImages/SliderImages";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import profile from "../../assets/images/customer/profile1.png";
import location from "../../assets/images/customer/location.png";
import "./salonNear.css";
import StarIcons from "../../components/common/Ratings/StarIcons";
import { commentData } from "../../utils/data/commentData/commentData";
import CommentBox from "./CommentBox";
import CustomerPaymentDetail from "../../components/common/CustomerPaymentDetail/CustomerPaymentDetail";

export interface CustomerPaymentState {
	open: boolean;
	bankAccount: boolean;
	upi: boolean;
	creditCard: boolean;
}
export default class SalonServiceDetail extends Component {
	state: CustomerPaymentState = {
		open: false,
		bankAccount: true,
		upi: false,
		creditCard: false,
	};
	handleClose = () => {
		this.setState({
			open: false,
		});
	};
	handleOpenModel = () => {
		this.setState({
			open: true,
		});
	};
	handleBankAccPayment = () => {
		this.setState({
			bankAccount: true,
			upi: false,
			creditCard: false,
		});
	};
	handleUPIPayment = () => {
		this.setState({
			upi: true,
			bankAccount: false,
			creditCard: false,
		});
	};
	handleCreditCardPayment = () => {
		this.setState({
			creditCard: true,
			upi: false,
			bankAccount: false,
		});
	};
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			// autoplay: true,
		};

		const PreviousBtn = (props: any) => {
			const { className, onClick } = props;
			return (
				<Stack
					id="pev"
					className={className}
					style={{
						marginLeft: "21px",
						zIndex: 1,
						alignItems: "center",
						width: " 44px",
						height: " 79px",
					}}
					onClick={onClick}>
					<ArrowBackIos
						id="arrowBtn"
						style={{
							color: "white",
							fontSize: "25px",
							marginTop: "25px",
							marginLeft: "7px",
						}}
					/>
				</Stack>
			);
		};
		const NextBtn = (props: any) => {
			const { className, onClick } = props;
			return (
				<Stack
					id="pev"
					className={className}
					style={{
						marginRight: "20px",
						marginLeft: "21px",
						zIndex: 0,
						width: " 44px",
						height: " 79px",
						alignItems: "center",
					}}
					onClick={onClick}>
					<ArrowForwardIos
						id="arrowBtn"
						style={{
							color: "#ffffff",
							fontSize: "25px",
							marginTop: "25px",
							marginLeft: "5px",
						}}
					/>
				</Stack>
			);
		};

		return (
			<Grid container mt={5}>
				<Grid
					item
					xs={12}
					sm={12}
					md={8.5}
					lg={8.5}
					className="main-container-box"
					sx={
						{
							// boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.07) !important",
							// paddingRight: "20px !important",
						}
					}>
					<Stack>
						<Slider
							{...settings}
							prevArrow={<PreviousBtn />}
							nextArrow={<NextBtn />}>
							{sliderImages.map((item) => (
								<Box sx={{ mb: 5 }} key={item.id}>
									<Box
										sx={{
											background: `url(${item.image}) no-repeat`,
											height: "50vh",
											backgroundSize: "cover",
											backgroundPosition: "100% 30%",
											position: "relative",
											overflow: "visible",
											borderRadius: "10px",
										}}>
										<Box
											sx={{
												position: "absolute",
												width: "100%",
												height: "100%",
												background:
													"linear-gradient(135deg, rgba(0,0,0,.3) , rgba(0,0,0,.3)) ",
												top: "50%",
												left: "50%",
												mx: "auto",
												transform: "translate(-50%,-50%)",
												borderRadius: "10px",
											}}></Box>
									</Box>
								</Box>
							))}
						</Slider>
					</Stack>
					<Stack>
						<Stack>
							<Typography variant="h2" component="h2">
								Lakme Salon
							</Typography>
							<Stack className="locationAddress">
								<LocationOnIcon
									sx={{
										fontSize: "18px",
										marginTop: "5px",
										marginLeft: "-5px",
										color: "#616e7a",
									}}
								/>
								<Typography
									className="address address-sec"
									variant="body1">
									Lakme Salon, Plot No, I 26, “ Neha Villa” First Floor,
									Tatya Tope Nagar, Nagpur, Maharashtra 440015
								</Typography>
							</Stack>
						</Stack>
						<Stack className="email-sec">
							<Stack className="profile-email-sec">
								<img
									className="profile-image"
									src={profile}
									alt="profile"
								/>
								<Stack>
									<Typography variant="h3" component="h3">
										Steve Smith
									</Typography>
									<Typography variant="body1" className="address">
										stevesmithexaple@gmail.com
									</Typography>
								</Stack>
							</Stack>
							<Stack className="icons-sec">
								<StarIcons />
								<Typography
									className="star-icon"
									variant="body1"
									id="description">
									(3.2) 65 Reviews...
								</Typography>
							</Stack>
						</Stack>
						<Divider />
						<Stack className="about-sec" mt={3} mb={3}>
							<Typography variant="h2" component="h2">
								About Salon
							</Typography>
							<Typography
								className="address"
								variant="body1"
								mb={5}
								mt={2}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Quis ipsum suspendisse ultrices gravida. Risus
								commodo viverra maecenas accumsan lacus vel facilisis Quis
								ipsum suspendisse ultrices gravida Risus commodo viverra
								send do eiusmod maecenas accumsan lacus vel facilisis.
							</Typography>
							<Typography className="address" variant="body1">
								It is a long established fact that a reader will be
								distracted by the readable content of a page when looking
								at its layout. Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore
								et dolore magna aliqua. Quis ipsum suspendisse ultrice Quis
								ipsum suspendisse ultrices gravida Risus commodo viverra
								send do eiusmod maecenas accumsan lacus vel facilisis.
							</Typography>
						</Stack>
						<Divider />
						<Stack className="map-sec">
							<Typography variant="h2" component="h2" mt={3} mb={2}>
								Location
							</Typography>
							<Stack>
								<img
									className="location-image"
									src={location}
									alt="location"
								/>
							</Stack>
						</Stack>
					</Stack>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={3.5}
					lg={3.5}
					sx={{
						paddingTop: "0px !important",
						paddingLeft: "10px !important",
					}}>
					<Stack>
						<Stack className="timing-sec">
							<Typography variant="h3" component="h3" mb={2}>
								Salon Timing
							</Typography>
							<Stack className="timing">
								<Typography variant="body1" className="address size">
									Monday to Friday
								</Typography>
								<Typography variant="body1" className="address size">
									10:00 - 8:00 PM
								</Typography>
							</Stack>
							<Stack className="timing" mt={2} mb={2}>
								<Typography variant="body1" className="address size">
									Saturday
								</Typography>
								<Typography variant="body1" className="address size">
									10:00 - 7:00 PM
								</Typography>
							</Stack>
							<Stack className="timing">
								<Typography variant="body1" className="address size">
									Sunday
								</Typography>
								<Typography variant="body1" className="address size">
									10:00 - 4:00 PM
								</Typography>
							</Stack>
						</Stack>
						<Stack mt={2} className="timing-sec">
							<Typography variant="h3" component="h3" mb={2}>
								Comments
							</Typography>
							{commentData.map((item) => (
								<React.Fragment key={item.id}>
									<CommentBox item={item} />
								</React.Fragment>
							))}
						</Stack>
						<Stack mt={2} className="timing-sec">
							<Typography variant="h3" component="h3" mb={2}>
								Write A Comment
							</Typography>
							<TextField
								fullWidth
								multiline
								rows={8}
								variant="standard"
								InputProps={{ disableUnderline: true }}
								placeholder="Type Comments..."
								sx={{
									backgroundColor: "#F0F0F0",
									borderRadius: "5px",
									justifyContent: "center",
									pl: 2,
								}}
							/>
							<Button
								onClick={this.handleOpenModel}
								className="comment-btn"
								variant="contained">
								Send Comment
							</Button>
							<CustomerPaymentDetail
								// open={this.state.open}
								onClose={this.handleClose}
								handleBankAccPayment={this.handleBankAccPayment}
								handleUPIPayment={this.handleUPIPayment}
								handleCreditCardPayment={this.handleCreditCardPayment}
								state={this.state}
							/>
						</Stack>
					</Stack>
				</Grid>
			</Grid>
		);
	}
}
