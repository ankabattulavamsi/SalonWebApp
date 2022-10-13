import React, { Component } from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import {
  gallaryData,
  GallaryData,
  galleryBanner,
} from "../../utils/data/GalleryOwner/Gallery";
import { GalleryCards, Banner, Inputs } from "../common";
import { galleryStyles } from "./GalleryOwners.styles";
import Layout from "../Layout/Layout";
import CommonModal from "../common/CommonModal/CommonModal";
import { Form, Formik } from "formik";
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
              OnClick={() => this.setState({ openGalleryAddModal: true })}
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

          <CommonModal
            handleClose={() => this.setState({ openGalleryAddModal: false })}
            open={this.state.openGalleryAddModal}
          >
            <Box sx={{ display: "flex", gap: 5, width: "100%" }}>
              <Box width={"47%"}>images component</Box>
              <Box width={"47%"}>
                <Box>
                  <Formik initialValues={{}} onSubmit={() => {}}>
                    <Form>
                      <Inputs
                        name="title"
                        placeholder="enter title"
                        label="Add Gallery Title"
                      />
                    </Form>
                  </Formik>
                </Box>
              </Box>
              {/* <Box sx={{ clear: "both" }}></Box> */}
            </Box>
          </CommonModal>
        </Container>
      </Layout>
    );
  }
}

export default withStyles(galleryStyles)(GallerySalon);
