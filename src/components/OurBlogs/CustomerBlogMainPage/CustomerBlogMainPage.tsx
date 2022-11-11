import { Box, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { Component } from "react";
import Layout from "../../Layout/Layout";

import { withStyles } from "@mui/styles";
import blogBanner from "../../../assets/images/Blogimages/blog-banner.png";
import { blogsData } from "../../../utils/data/blogs/blogs_data";
import OurBlogCard from "../OurBlogCard";
import { Styles } from "./CustomerBlogMainPage.Style";

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
            <Box sx={{ mb: 5, mt: {xs: 8, md: 5} }}>
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
              <Grid
                // sx={{ mt: 10 }}
                style={{
                  background: "#FDF6EE",
                  margin: "0px",
                  marginTop: "40px",
                  padding: "60px 0",
                  marginBottom: "-80px",
                }}
              >
                <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Stack className={classes.specialist}>
                    <Box
                      sx={{ marginBottom: "40px" }}
                      className={classes.specialistHeading}
                    >
                      <Stack sx={{ mb: { sm: 2, xs: 2 } }}>
                        <Typography className={classes.blogHeading}>
                          Our Blogs
                        </Typography>
                        <Typography
                          className={classes.blogTitleLine}
                        ></Typography>
                      </Stack>
                    </Box>
                    <Grid
                      container
                      justifyContent="center"
                      columnSpacing={4}
                      rowSpacing={3}
                      sx={{ px: { sm: 4, xs: 2, md: 0, lg: 0 } }}
                    >
                      {blogsData.map((data, index: number) => (
                        <React.Fragment key={index}>
                          <Grid item lg={4} md={3} xs={12} sm={6}>
                            <OurBlogCard item={data} />
                          </Grid>
                        </React.Fragment>
                      ))}
                    </Grid>
                  </Stack>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
              </Grid>
            </Box>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default withStyles(Styles)(CustomerBlogMainPage);
