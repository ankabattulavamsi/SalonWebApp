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
import DeleteModal from "../common/DeleteModal/DeleteModal";
interface GallerySalonProps {
  classes: any;
}
interface GallerySalonState {
  openGalleryAddModal: boolean;
  ImagesData: GallaryData[];
  id?: string | number;
  item: GallaryData;
  title?: string;
  image: string;
  openDeleteModal: boolean;
  deletedId: string | number;
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
      openDeleteModal: false,
      item: {
        id: "",
        imgUrl: "",
        title: "",
      },
      deletedId: "",
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

  handleToggleDeleteModal = () =>
    this.setState({ openDeleteModal: !this.state.openDeleteModal });

  handleOnChangeImage = (e: any) => {
    console.log(e);
    this.setState({ image: URL.createObjectURL(e.target.files[0]) });
  };

  handleAdd = () => {
    console.log("called");
    this.setState({
      ImagesData: [
        ...this.state.ImagesData,
        { id: Date.now(), imgUrl: this.state.image, title: this.state.title },
      ],
    });

    this.handleGalleryCloseModal();
  };

  handleEditImage = (id: string | number, item: GallaryData) => {
    this.setState({
      id,
      item,
      image: item.imgUrl,
      title: item.title,
    });
    console.log({ item });
    this.handleGalleryOpenModal();
  };

  handleEdit = (id?: string | number) => {
    console.log("edit id", id);

    this.setState({
      ImagesData: this.state.ImagesData.map((item) => {
        if (item.id === id) {
          item.imgUrl = this.state.image;
          item.title = this.state.title;
        }
        return item;
      }),
    });

    this.handleGalleryCloseModal();
  };

  handleDeleteImage = (id: string | number) => {
    this.setState({ deletedId: id });
    this.handleToggleDeleteModal();
  };
  handleDelete = (id?: string | number) => {
    console.log("leted id", id);

    this.setState({
      ImagesData: this.state.ImagesData.filter((item) => item.id !== id),
    });

    this.handleToggleDeleteModal();
  };

  handleCloseBage = () => {
    this.setState({
      image: "",
      item: {
        id: this.state.item.id,
        imgUrl: "",
        title: this.state.item.title,
      },
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
              handleClick={() => this.handleGalleryOpenModal()}
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
            handleAdd={this.handleAdd}
            handleEdit={this.handleEdit}
          />
          <DeleteModal
            jobTitle="image"
            onClose={() => this.handleToggleDeleteModal()}
            open={this.state.openDeleteModal}
            deletedId={this.state.deletedId}
            handleConfirmDelete={this.handleDelete}
          />
        </Container>
      </Layout>
    );
  }
}

export default withStyles(galleryStyles)(GallerySalon);
