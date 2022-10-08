/** @format */

import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import { Styles } from "./GalleryStyles";

import { Grid, Card, CardMedia, Typography } from "@mui/material";
import {
  gallaryData,
  GallaryData,
} from "../../utils/data/GalleryOwner/Gallery";
import { Box, Container } from "@mui/system";

export class Gallery extends Component {
  render() {
    const { classes }: any = this.props;
    return (
      <Box sx={{ pt: 8 }}>
        <Container maxWidth="lg">
          <Box className={classes.titlebox}>
            <Box>
              <Typography
                className={`underline--our-expert-team ${classes.titleText}`}
              >
                Salon Gallery
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={2}>
            {gallaryData.map((images: GallaryData) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={images.id}>
                  <Card sx={{ width: "100%" }} className={classes.card}>
                    <CardMedia
                      component="img"
                      alt={`${images.id}`}
                      image={images.imgUrl}
                      src={images.imgUrl}
                      sx={{ borderRadius: "4px" }}
                      className={classes.imgCard}
                    />
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default withStyles(Styles)(Gallery);
