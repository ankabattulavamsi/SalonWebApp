/** @format */

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
  item: any;
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
    const { classes, item } = this.props;
    return (
      <>
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
            <CardActions className={classes.categoryButtonBox}>
              {/* <Button onClick={this.onEditClick}>
								<EditIcon />
								{item.editButton}
							</Button>
							<Button onClick={this.onDeleteClick}>
								<DeleteIcon />
								{item.deleteButton}
							</Button> */}
              <EditButton
                className=""
                onClick={this.onEditClick}
                buttonName="Edit"
                icon={<EditIcon />}
              />
              <DeleteButton
                className=""
                onClick={this.onDeleteClick}
                buttonName="Delete"
                icon={<DeleteIcon />}
              />
            </CardActions>
          </CardActionArea>
        </Card>

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
