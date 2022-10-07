import { Dialog, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";

interface IsStatePassProps {
  open: boolean, 
  handleClose: (id :any) => void,
}

class SalonBestOffersModel extends Component<IsStatePassProps> {
  render() {
    const { open, handleClose } = this.props;
    return (
      <Box>
        <Dialog onClose={handleClose} open={open}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Typography>image container</Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Typography>Textfield container</Typography>
            </Grid>
          </Grid>
        </Dialog>
      </Box>
    );
  }
}

export default SalonBestOffersModel;
