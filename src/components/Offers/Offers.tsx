import React, { Component } from "react";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./offers.css";

class Offers extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ padding: "7%" }}>
          <Grid item md={6} sm={12}>
            <Grid
              container
              className="single-offer-container"
              sx={{ bgcolor: "#EAF9FE" }}
            >
              <Grid item xs={4} sm={6} lg={8} className="offer-text-content">
                <Typography
                  variant="h3"
                  component="h3"
                  className="offer-discount"
                  sx={{ fontSize: { xs: "14px", sm: "22px" } }}
                >
                  30% off
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "22px" },
                    mt: 2,
                    mb: 2,
                  }}
                  className="offer-title"
                >
                  Long Hair Style
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "17px" }, mb: 2 }}
                  className="offer-description"
                >
                  Lorem ipsum dolor sit amet elit, consectetur adipiscing
                </Typography>
              </Grid>
              <Grid item xs={8} sm={6}>
                <img
                  src={require("../../assets/images/OffersSection/LandingpageOffer1.jpg")}
                  height="100%"
                  width="95%"
                  style={{ objectFit: "contain", borderRadius: "30px" }}
                  alt="offerimage"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Grid
              container
              className="single-offer-container"
              sx={{ bgcolor: "#e3e3e3" }}
            >
              <Grid item xs={4} sm={6} className="offer-text-content">
                <Typography
                  variant="h3"
                  component="h3"
                  className="offer-discount"
                  sx={{ fontSize: { xs: "14px", sm: "22px" } }}
                >
                  10% off
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "22px" },
                    mt: 2,
                    mb: 2,
                  }}
                  className="offer-title"
                >
                  Beard
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "17px" }, mb: 2 }}
                  className="offer-description"
                >
                  Lorem ipsum dolor sit amet elit, consectetur adipiscing
                </Typography>
              </Grid>
              <Grid item xs={8} sm={6}>
                <img
                  src={require("../../assets/images/OffersSection/LandingpageOffer2.png")}
                  height="100%"
                  width="100%"
                  style={{ objectFit: "contain" }}
                  alt="offerimage"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Offers;
