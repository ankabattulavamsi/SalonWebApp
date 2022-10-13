import React, { Component } from "react";
import { Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import {
  gallaryData,
  GallaryData,
  galleryBanner,
} from "../../utils/data/GalleryOwner/Gallery";
import { Buttons, GalleryCards } from "../common";
import { galleryStyles } from "./GalleryOwners.styles";
interface GallerySalonProps {
  classes: any;
}
interface GallerySalonState {}
class GallerySalon extends Component<GallerySalonProps, GallerySalonState> {
  render() {
    const { classes } = this.props;
    return (
      <Container
        sx={{
          maxWidth: { xs: "100%", md: "lg" },
          pl: { xs: 0 },
          pr: { xs: 0 },
        }}
      >
        <Box sx={{ mb: 5 }}>
          <Box
            sx={{
              background: `url(${galleryBanner}) no-repeat`,
              height: "50vh",
              backgroundSize: "cover",
              position: "relative",
              overflow: "visible",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0,0,0,.6)",
                top: "50%",
                left: "50%",
                mx: "auto",
                transform: "translate(-50%,-50%)",
              }}
            >
              <Typography
                sx={{
                  color: "white !important",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
                className={classes.titleText}
              >
                Our Gallery
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                transform: "translateY(-50%)",
                width: { xs: "50%", sm: "25%", lg: "15%" },
              }}
            >
              <Buttons title="Add New Image" className={classes.capitalized} />
            </Box>
          </Box>
        </Box>
        <Container
          maxWidth="lg"
          sx={{
            pl: { md: 0 },
            pr: { md: 0 },
          }}
        >
          <Grid container spacing={2}>
            {gallaryData.map((images: GallaryData) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={images.id}>
                  <GalleryCards {...images} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Container>
    );
  }
}

export default withStyles(galleryStyles)(GallerySalon);
