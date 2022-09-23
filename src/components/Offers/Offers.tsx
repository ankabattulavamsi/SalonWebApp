import React, { Component } from "react";
import { Card, Grid } from "@mui/material";
import { Container } from "@mui/system";
import "./offers.css";

class Offers extends Component {
  render() {
    return (
      <div className="offers-main-container">
        <Container maxWidth="lg">
        <Grid container spacing={2}>
            <Grid item lg={6} md={6} >
              <Card className="offers-single-offer-container">
                <Grid item sm={8} className="offer-text-content">
                  <h1 className="offer-discount">30% off</h1>
                  <h1 className="offer-title">Long Hair Style</h1>
                  <p className="offer-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </Grid>
              </Card>
            </Grid>
            <Grid item lg={6} md={6}>
              <Card className="second-offer-container">
                <Grid item sm={8} className="offer-text-content">
                  <h1 className="offer-discount">30% off</h1>
                  <h1 className="offer-title">Long Hair Style</h1>
                  <p className="offer-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </Grid>
              </Card>
            </Grid>
          </Grid> 
        </Container>
      </div>
    );
  }
}

export default Offers;
