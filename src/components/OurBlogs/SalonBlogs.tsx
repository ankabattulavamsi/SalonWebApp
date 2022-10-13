import React, { Component } from "react";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/material";

import Banner from "../common/Banner/Banner";
import Layout from "../Layout/Layout";
import blogBanner from "../../assets/images/Blogimages/blog-banner.png";
import SalonBlogCard from "./SalonBlogCard";

class SalonBlogs extends Component {
  
  render() {
    return (
      <>
        <Layout>
          <Grid container sx={{ pt: 10, background: "#FDF6EE" }}>
            <Container maxWidth="lg">
              <Banner
                image={blogBanner}
                title="Our Blogs"
                buttonTitle="Add new blog"
              />
            </Container>
            <Box sx={{ mb: 5 }}>
              <SalonBlogCard />
            </Box>
          </Grid>
        </Layout>
      </>
    );
  }
}

export default SalonBlogs;
