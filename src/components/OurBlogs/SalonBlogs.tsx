/** @format */

import React, { Component } from "react";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/material";

import Banner from "../common/Banner/Banner";
import Layout from "../Layout/Layout";
import blogBanner from "../../assets/images/Blogimages/blog-banner.png";
import SalonBlogCard from "./SalonBlogCard";
import AddBlogModal from "./AddBlogModal";

interface ss {
  addBlog: boolean;
}
class SalonBlogs extends Component<{}, ss> {
  state = {
    addBlog: false,
  };

  handleClick = () => {
    this.setState({ addBlog: true });
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  handleClose = () => {
    this.setState({ addBlog: false });
    document.body.style.overflow = "unset";
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
                handleClick={this.handleClick}
              />
            </Container>
            <Box sx={{ mb: 5 }}>
              <SalonBlogCard />
            </Box>
          </Grid>
          <AddBlogModal open={this.state.addBlog} onClose={this.handleClose} />
        </Layout>
      </>
    );
  }
}

export default SalonBlogs;
