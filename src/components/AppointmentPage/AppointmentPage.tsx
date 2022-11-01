/** @format */

import {
	Button,
	Container,
	FormControl,
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
} from "../../utils/data/CustomerAppointment/salonEmployeeData";
import { Styles } from "./AppointmentPage.Style";
import Layout from "../Layout/Layout";
import { salonEmpData } from "../../utils/data/CustomerAppointment/salonEmployeeData";
import CustomerPaymentDetail from "../common/CustomerPaymentDetail/CustomerPaymentDetail";

class CustomerAppointmentPage extends Component {
  state = {
    monthName: "",
    salonEmpSelected: 4,
    isActiveId: "",
    isActiveIdA: "",
    isActiveIdM: "",
  };
  handleMonthChange = (event: any) => {
    this.setState({ monthName: event.target.value });
  };
  salonEmpActive = (index: number) => {
    this.setState({ salonEmpSelected: index });
  };

  onclickActive = (time: string) => {
    this.setState({ isActiveTime: time });
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
      <Layout customer={true}>
        <Container maxWidth="lg" sx={{ py: 5, mt: { xs: 10, md: 4 } }}>
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
                displayEmpty
              >
                <MenuItem value="">January</MenuItem>
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
              width: "100%",
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
                  <Box>
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
                  </Box>
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
            <Box
              sx={{
                display: "flex",
                overflowY: "scroll",
              }}
            >
              {salonEmpData.map((emp: any, index: number) => {
                return (
                  <Button
                    onClick={() => this.salonEmpActive(index)}
                    key={index}
                    sx={{
                      width: { sm: "100px", md: "76px" },
                      height: "100px",
                      m: 2,
                    }}
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
            <Button
              variant="contained"
              className={classes.continueButton}
              sx={{
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#E7A356",
                },
              }}
            >
              Continue
            </Button>
          </Box>
        </Container>
      </Layout>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(
	CustomerAppointmentPage
);
