import React, { Component } from "react";
import {
  Typography,
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { withStyles } from "@mui/styles";
import { styles } from "./SalonCategory.style";

import { salonCategoryData } from "../../utils/data/SalonCategory/SalonCategory_data";
import withRouter from "../../hoc/withRouter";
import CategoryEditModal from "./CategoryEditModal";
import DeleteModal from "../common/DeleteModal/DeleteModal";
import { SalonBestOffersData } from "../../utils/data/SalonPatnerBestOffers/SalonBestOffers";
import SalonBestOffersModel from "../OffersSection/SalonBestOffersModel";
import EditButton from "../common/CommonButtons/EditButton";
import DeleteButton from "../common/CommonButtons/DeleteButton";

interface categoryProps {
  classes: any;
  navigate: any;
  edit: boolean;
  open: boolean;
}
class SalonCategoryCard extends Component<categoryProps> {
  state = {
    edit: false,
    open: false,
  };
  onEditClose = () => {
    this.setState({ edit: false });
  };
  onDeleteClose = () => {
    this.setState({ open: false });
  };
  onDeleteClick = () => {
    this.setState({ open: true });
  };
  onEditClick = () => {
    this.setState({ edit: true });
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid container spacing={4} className={classes.categoryImageBox}>
          {salonCategoryData.map((item: any) => {
            return (
              <Grid item lg={4} md={4} sm={6} xs={12} key={item.id}>
                <Card className={classes.categoryCard}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.categoryImage}
                      image={item.img}
                      title="categoryImg"
                    />
                    <CardContent className={classes.categoryContent}>
                      <Typography>{item.title}</Typography>
                    </CardContent>
                    <CardActions
                      className={classes.categoryButtonBox}
                    >
                      <EditButton
                        className=""
                        buttonName="Edit"
                        icon={<EditIcon />}
                        onClick={this.onEditClick}
                      />
                      <DeleteButton
                        className=""
                        buttonName="Delete"
                        icon={<DeleteIcon />}
                        onClick={this.onDeleteClick}
                      />
                      
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <DeleteModal
          jobTitle="Category"
          open={this.state.open}
          onClose={this.onDeleteClose}
        />
        <CategoryEditModal open={this.state.edit} onClose={this.onEditClose} />
      </>
    );
  }
}

export default withStyles(styles)(withRouter(SalonCategoryCard));
