/** @format */

import React, { Component } from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { styles } from "./SalonCategory.style";

import withRouter from "../../hoc/withRouter";
import CategoryEditModal from "./CategoryEditModal";
import DeleteModal from "../common/DeleteModal/DeleteModal";
import EditDeleteCommonButton from "../common/CommonButtons/EditDeleteCommonButton";

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
  windowOffset = 0;
  onEditClose = () => {
    this.setState({ edit: false });
    document.body.style.overflow = "unset";
  };
  onDeleteClose = () => {
    this.setState({ open: false });

    document.body.style.overflow = "unset";
  };

  onDeleteClick = () => {
    this.setState({ open: true });
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  onEditClick = () => {
    this.setState({ edit: true });
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  render() {
    const { classes, item } = this.props;
    return (
      <>
        <Card className={`${classes.categoryCard} category-main-card`}>
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
              <EditDeleteCommonButton
                onClickEdit={this.onEditClick}
                onClickDelete={this.onDeleteClick}
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
