import {
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Component } from "react";
import BookingsCalendarComponent from "../BookingsSection/BookingsCalendarComponent/BookingsCalendarComponent";
import {
  timingDataMorning,
  timingDataAfternoon,
  timingDataEvening,
} from "../../utils/data/CustomerAppointment/TimingsData";
import { Styles } from "./AppointmentPage.Style";
import Layout from "../Layout/Layout";
import { salonEmpData } from "../../utils/data/CustomerAppointment/salonEmployeeData";

class AppointmentPage extends Component {
  state = { monthName: "", isActiveTime: "10:00 AM" };
  handleMonthChange = (event: any) => {
    this.setState({ monthName: event.target.value });
  };
  salonEmpActive = (index: number) => {
    this.setState({ salonEmpSelected: index });
  };

  onclickActive = (time: string) => {
    // this.setState({isActiveTime:})
    console.log(time);
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
          <Typography
            variant="h6"
            className={classes.availableSlot}
            sx={{ mx: 2 }}
          >
            Available Slot
          </Typography>
          <Box
            className={classes.AppointmentBox}
            sx={{ display: "flex", py: 2 }}
          >
            <Typography variant="h6" sx={{mr: 5}} className={classes.appointmentTimeTitle}>
              Morning
            </Typography>
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
              {timingDataMorning.map((item: any) => (
                <Button
                  sx={{
                    borderRadius: "10px !important",
                  }}
                >
                  <Typography className={classes.appointmentTime}>
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
              {timingDataAfternoon.map((item: any) => (
                <Button
                  sx={{
                    borderRadius: "10px !important",
                  }}
                  className={classes.dateTime}
                >
                  <Typography className={classes.appointmentTime}>
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
              {timingDataEvening.map((item: any) => (
                <Button
                  sx={{
                    borderRadius: "10px !important",
                  }}
                >
                  <Typography className={classes.appointmentTime}>
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
