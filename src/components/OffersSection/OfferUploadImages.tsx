/** @format */

import React, { Component } from "react";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import { Button, Stack, Typography } from "@mui/material";

import { withStyles } from "@mui/styles";
import { StylesOffers } from "./BestOffers.styles";
import { Box } from "@mui/system";

interface IsProps {
 classes: any
}

export class OfferUploadImages extends Component<IsProps> {
  state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };
  imageHandler = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    const {classes} = this.props
    return (
      <Stack className="upload">
        <Stack >
          <img src={profileImg} alt="" id="img" className="edit-offer-upload-image" />
        </Stack>
        <Box className={classes.boxinput}>
          <input
            accept="image/*"
            className={"inputHide"}
            onChange={this.imageHandler}
            type="file"
            name="image"
          />
          <Button className={classes.btnCloud}>
            <CollectionsOutlinedIcon fontSize="large" />
            <span>Browse</span>
          </Button>
        </Box>
      </Stack>
    );
  }
}

export default withStyles(StylesOffers)(OfferUploadImages);
