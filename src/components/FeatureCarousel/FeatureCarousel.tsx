/** @format */


import React, { Component, Fragment } from "react";
import Slider from "react-slick";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import "./FeatureCarousel.css";
import { CarouselData } from "../../utils/data/featureCarousel/featureCarousel_data";



interface IProps {
  
}
class FeatureCarousel extends Component<IProps> {
  state = {
   
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
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
          onClick={onClick}
        >
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
          onClick={onClick}
        >
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
          <Grid item lg={.5} md={.5} sm={.5} xs={.5}></Grid>
          <Grid item lg={11} md={11} sm={11} xs={11}>
            <Box
              className="Banner"
              sx={{
                width: "100%",
                margin: "auto",
              }}
            >
              <Slider
                {...settings}
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
              >
                {CarouselData.map((data, index) => {
                  return (
                    <Fragment key={index}>
                      <Box className="main-div">
                        <Grid container>
                          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                            <Box className="text">
                              <Typography
                                variant="h2"
                                style={{ color: "white" }}
                                className="heading"
                              >
                                {data.heading}
                              </Typography>
                              <Typography
                                sx={{
                                  fontFamily: "Inter",
                                  fontStyle: "normal",
                                  fontWeight: "700",
                                  fontSize: "39px !important",
                                  lineHeight: "61px",
                                  textTransform: "capitalize",
                                }}
                                className="desc"
                                id="description"
                              >
                                {data.description}
                              </Typography>

                              <Stack
                              >
                                <Button variant="outlined" className="btn">
                                  see all services
                                </Button>
                              </Stack>
                            </Box>
                          </Grid>
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Box className="img">
                              <img
                                alt="SalonImg"
                                id="salonImg"
                                src={data.image}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Fragment>
                  );
                })}
              </Slider>
            </Box>
          </Grid>

          <Grid item lg={.5} md={.5} sm={.5} xs={.5}></Grid>
        </Grid>
      </>
    );
  }
}

export default FeatureCarousel;
