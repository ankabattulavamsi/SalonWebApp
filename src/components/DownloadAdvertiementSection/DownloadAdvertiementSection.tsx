import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./DownloadAdvertiementSection.css";
import React, { Component } from "react";
import ButtonCust from "../common/DownloadButton/ButtonCust";
import {
  appleImage,
  googleImage,
  mobileImage,
} from "../../utils/fixtures/downloadApp/download";

export default class DownloadAdvertiementSection extends Component {
  render() {
    return (
      <Box className="section-download">
        <Container maxWidth="lg">
          <Grid container columnSpacing={2}>
            <Grid item md={6} sm={11}>
              <>
                <Box>
                  <Typography
                    className="underline-download-app"
                    textAlign={"left"}
                    variant="h3"
                    component={"h3"}
                  >
                    Download Salon App
                  </Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography className="para-css-download" textAlign={"left"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate aspernatur in aut deserunt et, accusamus dolorum
                    nostrum tempora nihil atque. Molestiae recusandae doloremque
                    itaque quis facere provident velit, accusantium
                    voluptatibus.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    gap: "4px",
                    mt: 5,
                  }}
                >
                  <ButtonCust
                    bgColor="#272522"
                    color="#fff"
                    avatar={googleImage}
                    subTitle="Get it On"
                    title="Google Play"
                  />
                  <ButtonCust
                    bgColor="#272522"
                    color="#fff"
                    avatar={appleImage}
                    subTitle="Download on"
                    title="App Store"
                  />
                </Box>
              </>
            </Grid>
            <Grid item md={6} sm={11}>
              <>
                <Box sx={{ mx: "auto" }}>
                  <img
                    src={mobileImage}
                    alt="mobile"
                    loading="lazy"
                    width={"100%"}
                    height="100%"
                  />
                </Box>
              </>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
}
