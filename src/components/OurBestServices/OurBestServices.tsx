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
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
      <Box maxWidth='xl' sx={{mx: 'auto'}}  className='our-best-services-carousel-buttons'>
        <Box style={{ marginTop: 3, marginBottom: 15 }}>
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
               {/* <br />{" "}
              <span className="our-best-services-undeline">___</span> */}
            </Typography>
        </Box>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          className="our-best-services-carousel-buttons"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsiveForAllDevicesInServices}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable 
        >
          {ourBestServicesData.map((item:any) => (
            <figure className="Our-best-Services-Carousel-main-container" style={{flex:' 1 1 auto',
              position: 'relative',
              width: '80%',
              height: 'auto', 
              marginBottom: '65px'}}>
              <img
                src={item.mainImage}
                alt="item1"
                className="our-best-services-carousel-images"
              />
              <h2 className="our-best-services-main-sub-heading">{item.heading}</h2>
              <figcaption>
              <img src={item.icon} alt='icon-item' className="our-blogs-icon-image" 
                style={{color: '#fff',}} />  <h3 className="our-best-services-main-heading">{item.heading}</h3>{" "}
                <p className="our-best-service-carousel-image-description">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </Box>
    );
  }
}

export default OurBestServices;
