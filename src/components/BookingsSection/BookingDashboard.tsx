import React, { Component } from "react";
import {
  Grid,
  Avatar,
  Typography,
  IconButton,
  CardHeader,
  Card,
  CardContent,
  Box,
  Button,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container } from "@mui/system";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Styles } from "./BookingDashboard.Styles";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { bookingSectionData } from "../../utils/data/bookings/BookingsDashboardData";
import { datesArray } from "../../utils/data/bookings/CalenderData";

import "./BookingDashboard.css";

interface DateProps {
  day: string;
  date: string;
}

class BookingsDashboard extends Component {
  state = { currentDate: new Date().getDate() };

  onNextDate = () => {
    const { currentDate } = this.state;
    this.setState({ currentDate: currentDate + 1 });
  };

  onPreviousDate = () => {
    const { currentDate } = this.state;
    this.setState({ currentDate: currentDate - 1 });
  };
  render() {
    const { classes, theme }: any = this.props;
    const { currentDate } = this.state;
    return (
      <Box
        sx={{
          backgroundColor: "#FDF6EE",
          paddingTop: 15,
        }}
      >
        <Container maxWidth="lg" sx={{ mx: "auto" }}>
          <Box>
            <ScrollMenu
              LeftArrow={
                <Button>
                  <ArrowBackIosNewIcon
                    className={classes.previousDateIcon}
                    onClick={this.onPreviousDate}
                  />
                </Button>
              }
              RightArrow={
                <Button>
                  <ArrowForwardIosIcon
                    onClick={this.onNextDate}
                    className={classes.nextDateIcon}
                  />
                </Button>
              }
            >
              {datesArray
                .slice(currentDate - 3, currentDate + 4)
                .map((date: any, index: number) => {
                  return (
                    <Box
                      sx={{
                        px: { md: "50", xs: "5px" },
                        // py: { md: "15px", xs: "5px" },
                        backgroundColor:
                          Number(date.date) === currentDate
                            ? "#E7A356"
                            : "#FFF",
                      }}
                    >
                      <Typography
                        variant="h4"
                        className={classes.calenderDateText}
                        sx={{
                          color:
                            Number(date.date) === currentDate
                              ? "#FFFFFF"
                              : "#272522",
                        }}
                      >
                        {date.date}
                      </Typography>

                      <Typography
                        variant="h6"
                        className={classes.calenderDayText}
                        sx={{
                          color:
                            Number(date.date) === currentDate
                              ? "#FFFFFF"
                              : "#272522",
                        }}
                      >
                        {date.day}
                      </Typography>
                    </Box>
                  );
                })}
            </ScrollMenu>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{
              py: "34px",
            }}
          >
            {bookingSectionData.slice(0, 4).map((item: any) => {
              return (
                <Grid item key={item.id} md={6} xs={12}>
                  <Card
                    className={classes.customerContainer}
                    sx={{ mx: "auto !important" }}
                  >
                    <CardHeader
                      classes={{
                        title: classes.customerName,
                        subheader: classes.bookingsSubHeading,
                      }}
                      sx={{
                        px: "16px",
                        paddingTop: "10px",
                      }}
                      avatar={
                        <Avatar
                          src={item.img}
                          aria-label="person"
                          className={classes.dashboardAvatar}
                        />
                      }
                      action={
                        <Box
                          sx={{
                            display: "flex",
                          }}
                        >
                          <Typography
                            variant="h5"
                            className={classes.profileHeaderCost}
                          >
                            ₹{item.cost}
                          </Typography>
                          <IconButton aria-label="settings">
                            <MoreVertIcon
                              sx={{ height: "28px", width: "28px" }}
                            />
                          </IconButton>
                        </Box>
                      }
                      title={item.title}
                      subheader="OD11721633"
                    />
                    <CardContent>
                      <Box>
                        <Typography
                          variant="h1"
                          className={classes.bookingsServicesTitle}
                        >
                          Services
                        </Typography>
                        <Grid container spacing={2}>
                          {item.services.map(
                            (service: string, index: number) => {
                              return (
                                <Grid
                                  item
                                  xs={4}
                                  sm={3}
                                  md={3}
                                  lg={3}
                                  key={index}
                                >
                                  <Box className={classes.serviceNameContainer}>
                                    <Typography
                                      variant="body2"
                                      align="center"
                                      className={classes.bookingsServicesName}
                                    >
                                      {service}
                                    </Typography>
                                  </Box>
                                </Grid>
                              );
                            }
                          )}
                        </Grid>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          my: 1.5,
                          [theme.breakpoints.down("sm")]: {
                            width: "228px",
                            height: "32px",
                          },
                        }}
                      >
                        <Typography
                          variant="h5"
                          className={classes.bookingTimeHeading}
                        >
                          Time
                          <Typography
                            variant="h3"
                            component="span"
                            className={classes.bookingTime}
                          >
                            Afternoon 3:00 Pm
                          </Typography>
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}

            <Button
              // className={classes.viewAllCustomersButton}
              sx={{
                color: "#999999",
                fontFamily: "Fira Sans",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "24px",
                letterSpacing: "0.02em",
                textTransform: "capitalize",
                marginTop: "58px",
                marginBottom: "91px",
                mx: "auto",
              }}
            >
              View all Bookings
              <KeyboardDoubleArrowRightOutlinedIcon />
            </Button>
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(BookingsDashboard);
