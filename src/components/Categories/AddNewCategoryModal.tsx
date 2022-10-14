import React, { Component } from "react";
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { withStyles } from "@mui/styles";
import { style } from "./CategoryEditModel.style";

interface addCategoryprops{
  open: boolean;
  onClose: any,
  classes: any
}
class AddNewCategoryModal extends Component<addCategoryprops> {
  render() {
    const {open, onClose, classes} = this.props;
    return (
      <>
        <Modal open={open} onClose={onClose} className={classes.editmodelBox}>
          <Box className={classes.mainEditbox}>
            <Grid container columnSpacing={4} className={classes.uploadImgBox}>
              <Grid item lg={6} md={6} sm={12} xs={12} className={classes.uplaodmiddleBox}>
                <Box className={classes.browseBox}>
                  <input
                    accept="image/*"
                    className={classes.fileInputHide}
                    type="file"
                    name="image"
                  />
                  <CloudUploadIcon fontSize="large" />
                  <Typography component="h6">Uploaded Category Images</Typography>
                  <Typography component="p">Supported files PNG, JPEG, SVG, wEBP</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12} className={classes.editcontentbox}>
                <Box>
                  <Typography variant="h3">
                    Add New Category
                  </Typography>
                  <TextField className={classes.editInputfield} placeholder="Enter New category here"/>
                </Box>
                <Box className={classes.editButtonBox}>
                  <Button>
                    Create
                  </Button>
                  <Button onClick={this.props.onClose}>
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

export default withStyles(style)(AddNewCategoryModal);
