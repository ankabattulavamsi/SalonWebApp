import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ourBestServicesData from "../../utils/data/OurBestServicesData";

import "./OurBestServices.css";

class OurBestServices extends Component {
  render() {
    return (
      <div
        style={{
          paddingTop: "30px",
          position: "relative",
        }}
      >
        <div style={{ marginTop: 3, marginBottom: 3 }}>
          <div className="our-best-services-position">
            <Typography variant="h4" className="our-best-services-heading" 
            sx={{
                fontSize: { xs: "20px", sm: "35px", lg: '42px' },
              fontWeight: "700",
              textAlign: "center",
              lineHeight: "28px",
              letterSpacing: "-0.01rem",
              textTransform: "capitalize",
              color: "#272522",
              fontFamily: "Fira sans",
            }}>
              Our Best Services <br /> <span className="our-best-services-undeline">___</span>
            </Typography>
            {/* <Typography variant="h3" className="our-best-services-undeline">
              ___
            </Typography> */}
          </div>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={1500}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
          //   transitionDuration={2000}
        >
          {ourBestServicesData.map((item) => (
            <figure>
              <img src={item.mainImage} alt="item1" className="our-best-services-carousel-images" style={{}} />
              <h2 style={{}}>{item.heading}</h2>
              <figcaption>
                {item.icon} <h3>{item.heading}</h3>{" "}
                <p style={{}}>{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default OurBestServices;
