import React, { Component } from "react";
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import DeleteIcon from "@mui/icons-material/Delete";
import cateImg from '../../assets/images/SalonCategory/cateImg1.png';

import { withStyles } from "@mui/styles";
import { style } from "./CategoryEditModel.style";

interface categoryEditProps{
  open: boolean;
  onClose: any,
  classes: any
}
class CategoryEditModal extends Component<categoryEditProps> {

  render() {
    const {open, onClose, classes} = this.props;
    return (
      <>
        <Modal className={classes.editmodelBox} open={open} onClose={onClose}>
          <Box className={classes.mainEditbox}>
            <Grid container columnSpacing={4}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <img src={cateImg} alt="categor img"/>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} className={classes.editcontentbox}>
                  <Box>
                    <Typography variant="h3">
                        Category Title
                    </Typography>
                    <TextField className={classes.editInputfield} placeholder="edit category title here"/>
                  </Box>
                  <Box className={classes.editButtonBox}>
                    <Button startIcon={<ClassIcon />}>
                      Save
                    </Button>
                    <Button startIcon={<DeleteIcon />} onClick={() => onClose()}>
                      Cancel
                    </Button>
                  </Box>
                </Grid>
            </Grid>
          </Box>
        </Modal>
      </>
    );
  }
}

export default withStyles(style)(CategoryEditModal);
