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
  ImagesData: GallaryData[];
  id?: string | number;
  item: GallaryData;
  title: string;
  image: string;
}
class GallerySalon extends Component<GallerySalonProps, GallerySalonState> {
  constructor(props: GallerySalonProps) {
    super(props);
    this.state = {
      openGalleryAddModal: false,
      ImagesData: gallaryData || [],
      id: "",
      title: "",
      image: "",
      item: {
        id: "",
        imgUrl: "",
        title: "",
      },
    };
  }

  handleGalleryOpenModal = () => {
    this.setState({
      openGalleryAddModal: true,
    });
  };
  handleGalleryCloseModal = async () => {
    this.setState({
      openGalleryAddModal: false,
    });
    this.setState({
      id: "",
      image: "",
      item: {
        id: "",
        imgUrl: "",
        title: "",
      },
      title: "",
    });
  };

  handleOnChangeImage = (e: any) => {
    console.log(e);
    this.setState({ image: URL.createObjectURL(e.target.files[0]) });
  };
  handleEditImage = (id: string | number, item: GallaryData) => {
    this.setState({ id, item });
    console.log({ item });
    this.handleGalleryOpenModal();
  };
  handleDeleteImage = (id?: string | number) => {
    console.log(id);
  };

  handleCloseBage = () => {
    this.setState({
      image: "",
    });
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
              OnClick={() => this.handleGalleryOpenModal()}
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
              {this.state.ImagesData.map((images: GallaryData) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={images.id}>
                    <GalleryCards
                      {...images}
                      handleEditImage={this.handleEditImage}
                      handleDeleteImage={this.handleDeleteImage}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Container>

          <GalleryAddModal
            handleClose={() => this.handleGalleryCloseModal()}
            openGalleryAddModal={this.state.openGalleryAddModal}
            editId={this.state.id}
            item={this.state.item}
            title={this.state.title}
            onChange={(e?: any) => this.setState({ title: e.target.value })}
            image={this.state.image}
            handleOnChangeImage={this.handleOnChangeImage}
            onClicOfCloseBadge={this.handleCloseBage}
          />
        </Container>
      </Layout>
    );
  }
}

export default withStyles(galleryStyles)(GallerySalon);
