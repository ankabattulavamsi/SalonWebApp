/** @format */

import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import { Box, Grid, Stack } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import BannerCard from "./BannerCard";
import { customerData } from "../../utils/data/customer/CustomerData";

interface IProps {}
class CustomerBanner extends Component<IProps> {
	state = {};

	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
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
						backgroundColor: "#3e3e3e",
						border: "1px solid #000000",
						borderRadius: "0px 30px 30px 0px",
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
						backgroundColor: "#3e3e3e",
						width: " 44px",
						height: " 79px",
						alignItems: "center",
						borderRadius: " 30px 0px 0px 30px",
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
			<>
				<Grid container>
					<Grid item xs={1} sm={1} md={1} lg={1}></Grid>
					<Grid item xs={10} sm={10} md={10} lg={10}>
						<Box
							className="Banner banner-sec"
							sx={{
								width: "100%",
								margin: "auto",
							}}>
							<Slider
								{...settings}
								prevArrow={<PreviousBtn />}
								nextArrow={<NextBtn />}>
								{customerData.map((data, index) => {
									return (
										<Fragment key={index}>
											<BannerCard data={data} />
										</Fragment>
									);
								})}
							</Slider>
						</Box>
					</Grid>

					<Grid item lg={1} md={1} sm={1} xs={1}></Grid>
				</Grid>
			</>
		);
	}
}

export default CustomerBanner;
