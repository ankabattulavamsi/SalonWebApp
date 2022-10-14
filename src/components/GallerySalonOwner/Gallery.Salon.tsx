import React, { Component } from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import {
  gallaryData,
  GallaryData,
  galleryBanner,
} from "../../utils/data/GalleryOwner/Gallery";
import { GalleryCards, Banner } from "../common";
import { galleryStyles } from "./GalleryOwners.styles";
import Layout from "../Layout/Layout";
import GalleryAddModal from "./GalleryAddModal";
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

  handleGalleryOpenCloseModal = () => {
    this.setState({ openGalleryAddModal: !this.state.openGalleryAddModal });
  };
  render() {
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
          <Box sx={{ mt: 15 }}>
            <Banner
              OnClick={() => this.handleGalleryOpenCloseModal()}
              buttonTitle="Add New Image"
              image={galleryBanner}
              title="Our Gallery"
            />
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

          <GalleryAddModal
            handleClose={() => this.handleGalleryOpenCloseModal()}
            openGalleryAddModal={this.state.openGalleryAddModal}
          />
        </Container>
      </Layout>
    );
  }
}

export default withStyles(galleryStyles)(GallerySalon);
