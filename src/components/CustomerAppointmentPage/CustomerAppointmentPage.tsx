import {
  Button,
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
import { salonEmpData } from "../../utils/data/CustomerAppointment/salonEmployeeData";
import {
  timingDataAfternoon,
  timingDataEvening,
  timingDataMorning,
} from "../../utils/data/CustomerAppointment/timingsData";
import BookingsCalendarComponent from "../BookingsSection/BookingsCalendarComponent/BookingsCalendarComponent";
import { Styles } from "./CustomerAppointmentPage.Styles";
import TimingBox from "./TimingBox";

class CustomerAppointmentPage extends Component {
  state = { monthName: "", isActiveTime: "10:00 AM", salonEmpSelected: 4 };
  handleMonthChange = (event: any) => {
    this.setState({ monthName: event.target.value });
  };

  salonEmpActive = (index: number) => {
    this.setState({ salonEmpSelected: index });
  };

  render() {
    const { classes }: any = this.props;
    return (
      <>
        <Container maxWidth="lg" sx={{ py: 5 }}>
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
            <Box sx={{ display: "flex", py: 2 }}>
              <Typography variant="h6" className={classes.appointmentTimeTitle}>
                Morning
              </Typography>
              {timingDataMorning.map((time: string) => {
                return <TimingBox time={time} key={time} />;
              })}
            </Box>
            <Box sx={{ display: "flex", py: 2 }}>
              <Typography variant="h6" className={classes.appointmentTimeTitle}>
                Afternoon
              </Typography>
              {timingDataAfternoon.map((time: string) => {
                return <TimingBox time={time} key={time} />;
              })}
            </Box>
            <Box sx={{ display: "flex", py: 2 }}>
              <Typography variant="h6" className={classes.appointmentTimeTitle}>
                Evening
              </Typography>
              {timingDataEvening.map((time: string) => {
                return <TimingBox time={time} key={time} />;
              })}
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#F8F8F8",
              borderRadius: "10px",
              p: 5,
              mt: 3,
            }}
          >
            <Typography variant="h4" className={classes.selectYourStylish}>
              Select Your Stylish
            </Typography>
            <Box sx={{ display: "flex", overflowY: "visible" }}>
              {salonEmpData.map((emp: any, index) => {
                return (
                  <Button
                    onClick={() => this.salonEmpActive(index)}
                    key={index}
                  >
                    <Box sx={{ m: 1 }}>
                      <img
                        src={emp.img}
                        alt="name"
                        width="76px"
                        height="76px"
                        style={{
                          border:
                            index === this.state.salonEmpSelected
                              ? "4px solid #E7A356"
                              : "",
                          borderRadius: "12px",
                        }}
                      />
                      <Typography
                        variant="h6"
                        className={classes.employeeName}
                        sx={{
                          color:
                            index === this.state.salonEmpSelected
                              ? "#E7A356"
                              : "#88878F",
                        }}
                      >
                        {emp.name}
                      </Typography>
                    </Box>
                  </Button>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              minWidth: "100px",
            }}
          >
            <Button variant="contained" className={classes.continueButton}>
              Continue
            </Button>
          </Box>
        </Container>
      </>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(CustomerAppointmentPage);
