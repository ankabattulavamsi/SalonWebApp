import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

import { BlogStyles } from "./OurBlog.Style";
import CommonViewAllButton from "../common/CommonSalonPatnerButtons/CommonViewAllButton";
import SalonBlogCard from "./SalonBlogCard";
import withRouter from "../../hoc/withRouter";

interface blogProps {
  classes: any;
  navigate?: any;
}

class SalonBlogSection extends Component<blogProps> {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Box
          sx={{
            pb: 10,
            pt: { lg: 10, md: 10, sm: 5, xs: 5 },
            background: "#FDF6EE",
          }}
        >
          <Box className={classes.salonBlogTitleBox}>
            <Box sx={{ mb: { xs: 2, sm: 0, md: 0 } }}>
              <Typography className={classes.salonBlogHeading}>
                Our Blogs
              </Typography>
              <Typography className={classes.salonBlogTitleLine}></Typography>
            </Box>
            <CommonViewAllButton
              buttonName="View All Blogs"
              onClickNavigateOffersPage={() =>
                this.props.navigate("salon/blog")
              }
            />
          </Box>
          <SalonBlogCard />
        </Box>
      </>
    );
  }
}

export default withStyles(BlogStyles)(withRouter(SalonBlogSection));
