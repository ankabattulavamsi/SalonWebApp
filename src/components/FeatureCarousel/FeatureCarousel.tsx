import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import CarouselData from "../../utils/Data/FeatureCarosel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./FeatureCarousel.css";

type Props = {};

type State = {};

class FeatureCarousel extends Component<Props, State> {
  state = {};

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
            zIndex: "1",
            alignItems: "center",
            width: " 44px",
            height: " 79px",
            backgroundColor: "#545454",
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
            zIndex: "1",
            backgroundColor: "#545454",
            width: " 44px",
            height: " 79px",
            alignItems: "center",
            borderRadius: " 30px 0px 0px 30px",
            // transform: "matrix(-1, 0, 0, 1, 0, 0)",
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
          <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
          <Grid item lg={10} md={10} sm={10} xs={10}>
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
                            <Box className=" grid-item headings">
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
                                  fontWeight: "400",
                                  fontSize: "25px !important",
                                  lineHeight: "61px",
                                  textTransform: "capitalize",
                                }}
                                className="desc"
                                id="description"
                              >
                                {data.description}
                              </Typography>

                              <Stack
                                sx={{
                                  marginLeft: "-14%",
                                  marginTop: "20px",
                                  display: {
                                    lg: "block",
                                    md: "block",
                                    sm: "block",
                                    xs: "block",
                                  },
                                }}
                              >
                                <Button
                                  variant="outlined"
                                  className="see-all-btn"
                                >
                                  see all services
                                </Button>
                              </Stack>
                            </Box>
                          </Grid>
                          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Box className="grid-item bottle">
                              <img
                                alt="salonImage"
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

          <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
        </Grid>
      </>
    );
  }
}

export default FeatureCarousel;
