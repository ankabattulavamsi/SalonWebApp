import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Component } from "react";
import {
  timingDataAfternoon,
  timingDataEvening,
  timingDataMorning,
} from "../../utils/data/CustomerAppointment/timingsData";
import BookingsCalendarComponent from "../BookingsSection/BookingsCalendarComponent/BookingsCalendarComponent";
import { Styles } from "./CustomerAppointmentPage.Styles";
import TimingBox from "./TimingBox";

class CustomerAppointmentPage extends Component {
  state = { monthName: "", isActiveTime: "10:00 AM" };
  handleMonthChange = (event: any) => {
    this.setState({ monthName: event.target.value });
  };

  onclickActive = (time: string) => {
    // this.setState({isActiveTime:})
    console.log(time);
  };
  render() {
    const { classes }: any = this.props;
    return (
      <Container maxWidth="lg">
        <Box className={classes.AppointmentHeadingContainer}>
          <Typography variant="h6" className={classes.scheduleAppointment}>
            schedule your appointment
          </Typography>
          <FormControl>
            <Select
              labelId="monthName"
              id="monthName"
              value={this.state.monthName}
              onChange={this.handleMonthChange}
              name="monthName"
              className={classes.monthName}
            >
              <MenuItem value="january" defaultChecked>
                January
              </MenuItem>
              <MenuItem value="february">February</MenuItem>
              <MenuItem value="March">March</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            boxShadow: "2px 2px 2px 2px #F0F0F0",
            mt: 3,
            borderRadius: "10px",
          }}
        >
          <BookingsCalendarComponent />
        </Box>
        <Box
          sx={{
            mt: 3,
            ml: 2,
            p: 4,
            backgroundColor: "#F8F8F8",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h6"
            className={classes.availableSlot}
            sx={{ mx: 2 }}
          >
            Available Slot
          </Typography>
          <Box sx={{ display: "flex", mx: 2, py: 2 }}>
            <Typography variant="h6" className={classes.appointmentTimeTitle}>
              Morning
            </Typography>
            {timingDataMorning.map((time: string) => {
              return <TimingBox time={time} key={time} />;
            })}
          </Box>
          <Box sx={{ display: "flex", mx: 2, py: 2 }}>
            <Typography variant="h6" className={classes.appointmentTimeTitle}>
              Afternoon
            </Typography>
            {timingDataAfternoon.map((time: string) => {
              return <TimingBox time={time} key={time} />;
            })}
          </Box>
          <Box sx={{ display: "flex", mx: 2, py: 2 }}>
            <Typography variant="h6" className={classes.appointmentTimeTitle}>
              Evening
            </Typography>
            {timingDataEvening.map((time: string) => {
              return <TimingBox time={time} key={time} />;
            })}
          </Box>
        </Box>
      </Container>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(CustomerAppointmentPage);
