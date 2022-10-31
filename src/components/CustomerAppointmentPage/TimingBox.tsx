import { Button, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Component } from "react";
import { Styles } from "./CustomerAppointmentPage.Styles";

interface ITime {
  time: string;
}

class TimingBox extends Component<ITime> {
  render() {
    const { classes, time, onClickActive, key }: any = this.props;

    return (
      <Button
        sx={{
          backgroundColor: "#ffffff",
          mx: 2,
          borderRadius: "10px !important",
        }}
      >
        <Typography variant="body2" className={classes.appointmentTime} sx={{}}>
          {time}
        </Typography>
      </Button>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(TimingBox);
