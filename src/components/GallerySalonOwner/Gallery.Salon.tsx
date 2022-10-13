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
import Layout from "../Layout/Layout";
import CommonModal from "../common/CommonModal/CommonModal";
interface GallerySalonProps {
  classes: any;
}
interface GallerySalonState {
  openGalleryAddModal: boolean;
}
class GallerySalon extends Component<GallerySalonProps, GallerySalonState> {
  constructor(props: GallerySalonProps) {
    super(props);
    this.state = {
      openGalleryAddModal: false,
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <Container
          sx={{
            maxWidth: { xs: "100%", md: "lg" },
            pl: { xs: 0 },
            pr: { xs: 0 },
            mb: 5,
          }}
        >
          <Box sx={{ mb: 5, mt: 15 }}>
            <Box
              sx={{
                background: `url(${galleryBanner}) no-repeat`,
                height: "50vh",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                position: "relative",
                overflow: "visible",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,.6) , rgba(0,0,0,.6)) ",
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
                <Buttons
                  handleClick={() =>
                    this.setState({ openGalleryAddModal: true })
                  }
                  title="Add New Image"
                  className={classes.capitalized}
                />
              </Box>
            </Box>
          </Box>
          <Container
            maxWidth="lg"
            sx={{
              pl: { md: 0 },
              pr: { md: 0 },
              mt: -6,
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

          <CommonModal
            handleClose={() => this.setState({ openGalleryAddModal: false })}
            open={this.state.openGalleryAddModal}
          >
            <Box sx={{ display: "flex", gap: 5, width: "100%" }}>
              <Box width={"50%"}>1</Box>
              <Box width={"50%"}>2</Box>
              <Box sx={{ clear: "both" }}></Box>
            </Box>
          </CommonModal>
        </Container>
      </Layout>
    );
  }
}

export default withStyles(galleryStyles)(GallerySalon);
