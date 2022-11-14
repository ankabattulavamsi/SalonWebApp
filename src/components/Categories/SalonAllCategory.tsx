/** @format */

import React, { Component } from "react";
import { Container } from "@mui/system";
import { Box, Grid } from "@mui/material";

import categoryBanner from "../../assets/images/SalonCategory/categoryBanner.png";
import Banner from "../common/Banner/Banner";
import Layout from "../Layout/Layout";
import SalonCategoryCard from "./SalonCategoryCard";
import AddNewCategoryModal from "./AddNewCategoryModal";
import { salonCategoryData } from "../../utils/data/SalonCategory/SalonCategory_data";
import { styles } from "./SalonCategory.style";
import { withStyles } from "@mui/styles";

interface IProps {
  classes?: any;
}
class SalonAllCategory extends Component<IProps> {
  state = {
    open: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  onClose = () => {
    this.setState({ open: false });
  };
  handleClick = () => {
    this.setState({ open: true });
  };
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <Box sx={{ pt: 10, mb: 10 }}>
          <Container maxWidth="lg">
            <Banner
              image={categoryBanner}
              title="Category"
              buttonTitle="Add new category"
              handleClick={this.handleClick}
            />
            <Grid container spacing={4} className={classes.categoryImageBox}>
              {salonCategoryData.map((item) => {
                return (
                  <Grid item lg={4} md={4} sm={6} xs={12} key={item.id}>
                    <SalonCategoryCard item={item} />
                  </Grid>
                );
              })}
            </Grid>
            <AddNewCategoryModal
              open={this.state.open}
              onClose={this.onClose}
            />
          </Container>
        </Box>
      </Layout>
    );
  }
}

export default withStyles(styles)(SalonAllCategory);
