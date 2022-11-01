import { Button, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Component } from "react";
import {
  timingDataMorning,
  timingDataAfternoon,
  timingDataEvening,
} from "../../utils/data/CustomerAppointment/TimingsData";
import { Styles } from "./AppointmentPage.Style";

class AppointmentPage extends Component {
  state = {
    isActiveIdM: '',
    isActiveIdA: 4,
    isActiveId: ''
  };

  setActiveAppM = (id: any) => {
    this.setState({ isActiveIdM: id });
  };

  setActiveAppA = (id: any) => {
    this.setState({ isActiveIdA: id });
  };

  setActiveApp = (id: any) => {
    this.setState({ isActiveId: id });
  };

  render() {
    const { classes }: any = this.props;
    return (
      <>
        <Box
          sx={{
            mt: 3,
            p: 4,
            backgroundColor: "#F8F8F8",
            width: "100%",
            borderRadius: "10px",
          }}
          className={classes.scroller}
        >
          <Typography variant="h6" className={classes.availableSlot} sx={{}}>
            Available Slot
          </Typography>
          <Box>
            <Box
              className={classes.AppointmentBox}
              sx={{ display: "flex", py: 2 }}
            >
              <Typography
                variant="h6"
                sx={{ mr: 5 }}
                className={classes.appointmentTimeTitle}
              >
                Morning
              </Typography>
              {timingDataMorning.map((item: any, index: any) => (
                <Button
                  onClick={(e) => this.setActiveAppM(index)}
                  sx={{
                    borderRadius: "10px !important",
                  }}
                >
                  <Typography
                    className={classes.appointmentTime}
                    sx={{
                      backgroundColor:
                        index === this.state.isActiveIdM ? "#E7A356" : "",
                      color: index === this.state.isActiveIdM ? "#fff" : "",
                    }}
                  >
                    {item.time}
                  </Typography>
                </Button>
              ))}
            </Box>

            <Box
              className={classes.AppointmentBox}
              sx={{ display: "flex", py: 2 }}
            >
              <Typography
                variant="h6"
                sx={{ mr: 3 }}
                className={classes.appointmentTimeTitle}
              >
                Afternoon
              </Typography>
              {timingDataAfternoon.map((item: any, index: any) => (
                <Button
                  onClick={(e) => this.setActiveAppA(index)}
                  sx={{
                    borderRadius: "10px !important",
                  }}
                  className={classes.dateTime}
                >
                  <Typography
                    className={classes.appointmentTime}
                    sx={{
                      backgroundColor:
                        index === this.state.isActiveIdA ? "#E7A356" : "",
                      color: index === this.state.isActiveIdA ? "#fff" : "",
                    }}
                  >
                    {item.time}
                  </Typography>
                </Button>
              ))}
            </Box>

            <Box
              className={classes.AppointmentBox}
              sx={{ display: "flex", py: 2 }}
            >
              <Typography
                variant="h6"
                sx={{ mr: 6 }}
                className={classes.appointmentTimeTitle}
              >
                Evening
              </Typography>
              {timingDataEvening.map((item: any, index: any) => (
                <Button
                  onClick={(e) => this.setActiveApp(index)}
                  sx={{
                    borderRadius: "10px !important",
                  }}
                >
                  <Typography
                    className={classes.appointmentTime}
                    sx={{
                      backgroundColor:
                        index === this.state.isActiveId ? "#E7A356" : "",
                      color: index === this.state.isActiveId ? "#fff" : "",
                    }}
                  >
                    {item.time}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(AppointmentPage);
