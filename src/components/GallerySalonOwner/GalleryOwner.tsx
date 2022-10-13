import { Box, Container, Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import {
  gallaryData,
  GallaryData,
} from "../../utils/data/GalleryOwner/Gallery";
import { CommonViewAllButton, GalleryCards } from "../common";
import withRouter from "../../hoc/withRouter";
import { galleryStyles } from "./GalleryOwners.styles";
interface GalleryOwnerProps {
  classes: any;
  navigate?: any;
}
interface GalleryOwnerState {}
class GalleryOwner extends Component<GalleryOwnerProps, GalleryOwnerState> {
  render() {
    const { classes } = this.props;
    return (
      <Box>
        <Container maxWidth={"lg"}>
          <Box className={classes.titlebox}>
            <Box>
              <Typography
                className={`underline-download-app  ${classes.titleText}`}
              >
                Our Gallery
              </Typography>
            </Box>
            <Box className={classes.viewBox}>
              <CommonViewAllButton
                buttonName="view all gallery"
                onClickNavigateOffersPage={() => {
                  this.props.navigate("/salon/gallery");
                }}
              />
            </Box>
          </Box>

          <Grid container spacing={2}>
            {gallaryData.slice(0, 6).map((images: GallaryData) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={images.id}>
                  <GalleryCards {...images} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default withStyles(galleryStyles)(withRouter(GalleryOwner));
