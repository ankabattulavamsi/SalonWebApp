import React, { Component, Fragment } from "react";

import { Button, Grid, Typography,Stack } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import WithRouterHoc from "../common/CommonNavigateComp/WithRouterHoc";
import Layout from "../Layout/Layout";
import { hairStyle } from "./CustomerS.style";
import { HairServiceData } from "../../utils/data/CustomerHairServiceData/CustomerHairData";

import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface IsSinglePageProps {
  location: any;
  classes: any;
}

class CustomerSingleServicePage extends Component<IsSinglePageProps> {
  render() {
    const { state } = this.props.location;
    const { classes } = this.props;
    
    const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
		};

		const PreviousBtn = (props: any) => {
			const { className, onClick } = props;
			return (
				<Stack
					id="pev"
					className={className}
					style={{
						marginLeft: "50px",
						zIndex: 1,
						alignItems: "center",
						width: " 44px",
						height: " 79px",
					}}
					onClick={onClick}>
					<ArrowBackIos
						id="arrowBtn"
						style={{
							color: "#FFFFFF",
							fontSize: "25px",
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
						marginRight: "50px",
						zIndex: 0,
						width: " 44px",
						height: " 79px",
						alignItems: "center",
					}}
					onClick={onClick}>
					<ArrowForwardIos
						id="arrowBtn"
						style={{
							color: "#FFFFFF",
							fontSize: "25px",
						}}
					/>
				</Stack>
			);
		};

    return (
      <Layout customer={true}>
        <Container className={classes.headContainer}>
          <Grid container spacing={4} sx={{ p: { lg: 0 } }}>
            <Grid item xs={12} md={6} sm={6} lg={6}>
            <Box
							className="Banner banner-sec-single ss"
							sx={{
								width: "100%",
								margin: "auto",
							}}>
							<Slider
								{...settings}
								prevArrow={<PreviousBtn />}
								nextArrow={<NextBtn />}>
								{HairServiceData.map((item:any, index:any) => {
									return (
										<Fragment key={index}>
											<img src={item.hairServeImg} alt='nnnn' width='100%' />
										</Fragment>
									);
								})}
							</Slider>
						</Box>
            </Grid>

            <Grid item xs={12} md={6} sm={6} lg={6}>
              <Typography className={classes.MainHeading}>
                {state.heading}
              </Typography>
              <Box className={classes.priceContianer}>
                <Box className={classes.priceContianerS}>
                  <CurrencyRupeeIcon
                    style={{ fontSize: "16px", color: "#E7A356" }}
                  />
                  <Typography variant="h3">{state.price}</Typography>
                </Box>

                <Box className={classes.priceContianerS}>
                  <CurrencyRupeeIcon
                    style={{ fontSize: "16px", marginLeft: "8px" }}
                  />
                  <Typography variant="h2">{state.dissPrice}</Typography>
                </Box>
              </Box>
              <Typography className={classes.descriptionP}>
                {state.description}
              </Typography>
              <Typography className={classes.descriptionW}>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble
              </Typography>
              <Button
                className={classes.AddBtn}
                startIcon={
                  <ShoppingBasketIcon
                    style={{ fontSize: "26px", marginBottom: "5px" }}
                  />
                }
              >
                Add To Cart
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

export default WithRouterHoc(withStyles(hairStyle)(CustomerSingleServicePage));
