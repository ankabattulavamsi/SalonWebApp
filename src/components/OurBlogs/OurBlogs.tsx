import React, { Component } from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { withStyles } from "@mui/styles";

import { BlogStyles } from "./OurBlog.Style";
import { blogsData } from "../../utils/data/blogs/blogs_data";

interface blogProps {
  classes: any;
}
class OurBlogs extends Component<blogProps> {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Box sx={{ mb: 10 }}>
          <Box sx={{mb:4}}>
            <Typography className={classes.blogHeading}>
                Our Blogs
            </Typography>
            <Typography className={classes.blogTitleLine}></Typography>
          </Box>
          <Grid
            container
            justifyContent="center"
            columnSpacing={4}
            rowSpacing={3}
            sx={{ px: { sm: 4, xs: 2, md: 0, lg: 0 } }}
          >
            {blogsData.map((item) => {
              return (
                <Grid item lg={3} md={3} xs={12} sm={6} key={item.id}>
                  <Box className={classes.blogCard}>
                    <Box sx={{ position: "relative" }}>
                      <img
                        height="230"
                        width="100%"
                        src={item.image}
                        alt="blog 1"
                      />
                      <Box 
                        sx={{
                          width: "20%",
                          position: "absolute",
                          left: "40%",
                          top: "78%",
                          py: 1,
                          px: 1,
                          background: "#272522",
                          color: "#E7A356",
                          borderRadius: "5px",
                          "&:hover": {
                            background: "#E7A356",
                            color: "#fff",
                          },
                        }}
                      >
                        <Typography className={classes.blogDate}>
                          {item.date}
                        </Typography>
                        <Typography className={classes.blogMonth}>
                          {item.month}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography className={classes.blogCardTitle}>
                      {item.name}
                    </Typography>
                    <Typography className={classes.blogCardText}>
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </>
    );
  }
}

export default withStyles(BlogStyles)(OurBlogs);
