import { Box, Typography } from "@mui/material";
import React, { Component } from "react";

import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import ourBestServicesData from "../../utils/data/OurBestServicesData";

import "./OurBestServices.css";

class OurBestServices extends Component {
  render() {
    const responsiveForAllDevicesInServices = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    return (
      <Box maxWidth='xl' sx={{mx: 'auto', mb: 10, pt: 14}}  className='our-best-services-carousel-buttons'>
        <Box sx={{ mt:3, mb:3 }}>
            <Typography
              variant="h4"
              className="our-best-services-heading"
              sx={{
                fontSize: { xs: "20px", sm: "35px", lg: "42px" },
                fontWeight: "700",
                textAlign: "center",
                lineHeight: "28px",
                letterSpacing: "-0.01rem",
                textTransform: "capitalize",
                color: "#272522",
                fontFamily: "Fira sans",
              }}
            >
              Our Best Services
            </Typography>
        </Box>
        <Carousel
          additionalTransfrom={0}
          autoPlay
          autoPlaySpeed={2000}
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          responsive={responsiveForAllDevicesInServices}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          slidesToSlide={1}
          swipeable
        >
          {ourBestServicesData.map((item:any, index: number) => (
            <figure className="Our-best-Services-Carousel-main-container" style={{
              position: 'relative',
              width: '96%',
              height: 'auto', 
              marginBottom: '105px'}} 
              key={index}>
              <img
                src={item.mainImage}
                alt="item1"
                className="our-best-services-carousel-images"
                style={{}}
              />
              <h2 className="our-best-services-main-sub-heading">
                {item.heading}
              </h2>
              <figcaption>
                <img
                  src={item.icon}
                  alt="icon-item"
                  className="our-blogs-icon-image"
                  style={{ color: "#fff" }}
                />{" "}
                <h3 className="our-best-services-main-heading">
                  {item.heading}
                </h3>{" "}
                <p className="our-best-service-carousel-image-description">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </Box>
    );
  }
}

export default OurBestServices;
