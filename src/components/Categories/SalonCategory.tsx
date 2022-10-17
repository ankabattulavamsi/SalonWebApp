import React, { Component } from "react";
import {
  Box,
  Typography,
  Container,
} from "@mui/material";

import { withStyles } from "@mui/styles";
import { styles } from "./SalonCategory.style";

import CommonViewAllButton from "../common/CommonSalonPatnerButtons/CommonViewAllButton";
import withRouter from "../../hoc/withRouter";
import SalonCategoryCard from "./SalonCategoryCard";

interface categoryProps{
    classes: any,
    navigate: any
}
class SalonCategory extends Component <categoryProps> {
  
  onClickNavigateOffersPage = () => {
    this.props.navigate("/salon/category")
  }
  
  render() {
    const { classes } = this.props;
    
    return (
      <>
        <Container className={classes.categoryBox}>
          <Box className={classes.categoryTitleBox}>
            <Typography variant="h2">Category</Typography>
            <CommonViewAllButton 
              buttonName="View All Category" 
              onClickNavigateOffersPage={
                this.onClickNavigateOffersPage
              }
            />
          </Box>
          <SalonCategoryCard/>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(withRouter(SalonCategory));
