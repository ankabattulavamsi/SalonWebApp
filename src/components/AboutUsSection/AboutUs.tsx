import React, { Component } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import ReactPlayer from "react-player";

import "./AboutUs.css";

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-section-container">
        <Container maxWidth="lg">
          <Grid
            container
            sx={{ padding: { xs: "5% 0", sm: "13% 0" }, mx: "auto" }}
          >
            <Grid item md={6} xs={12} className="about-us-video-container">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="97%"
              />
            </Grid>
            <Grid item md={6} xs={12} className="about-us-text-container">
              <h2 className="about-us-heading">ABOUT US</h2>
              <h1 className="about-us-sub-heading">Welcome To Saloon Shop</h1>
              <div className="about-us-heading-icon"></div>
              <p className="about-us-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <p className="about-us-description">
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default AboutUs;
