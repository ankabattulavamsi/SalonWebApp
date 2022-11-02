import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { Component } from "react";
import Layout from "../../Layout/Layout";
import { Styles } from "../../common/Banner/banner.style";
import OurBlogs from "../OurBlogs";
import { withStyles } from "@mui/styles";
import CustomerBlog from "../../customer/CustomerBlog";
import blogBanner from "../../../assets/images/Blogimages/blog-banner.png";

class CustomerBlogMainPage extends Component {
  render() {
    const { classes }: any = this.props;
    return (
      <Layout customer={true}>
        <div
          style={{
            background: "#FDF6EE",
            paddingTop: "100px",
            paddingBottom: "60px",
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ mb: 5, mt: 5 }}>
              <Box
                sx={{
                  background: `url(${blogBanner}) no-repeat`,
                  height: "50vh",
                  backgroundSize: "cover",
                  backgroundPosition: "100% 30%",
                  position: "relative",
                  overflow: "visible",
                  borderRadius: "10px",
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
                    borderRadius: "10px",
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
                    Our Blogs
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ marginTop: "-100px" }}>
              <CustomerBlog />
            </Box>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default withStyles(Styles)(CustomerBlogMainPage);
