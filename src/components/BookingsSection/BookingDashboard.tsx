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
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

import { bookingSectionData } from "../../utils/data/bookings/BookingsDashboardData";
import { datesArray } from "../../utils/data/bookings/CalenderData";

import { Styles } from "./BookingDashboard.Styles";
import "./BookingDashboard.css";

class BookingsDashboard extends Component {
  state = {
    currentDate: new Date().getDate(),
    activeDate: new Date().getDate(),
  };

  onNextDate = () => {
    const { currentDate } = this.state;
    this.setState({ currentDate: currentDate + 1 });
  };

  onPreviousDate = () => {
    const { currentDate } = this.state;

    this.setState({ currentDate: currentDate - 1 });
  };

  handleActiveDate = (date: number) => {
    this.setState({ isActiveClicked: true });
    this.setState({ activeDate: date });
  };

  render() {
    const { classes, theme }: any = this.props;
    const { currentDate } = this.state;
    return (
      <div
        style={{
          backgroundColor: "#FDF6EE",
          marginTop: 60,
          paddingTop: 100,
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Box>
            <ScrollMenu
              LeftArrow={
                <Button
                  disabled={
                    currentDate === new Date().getUTCDate() - 6 ? true : false
                  }
                  className={classes.iconContainer}
                  onClick={this.onPreviousDate}
                >
                  <ArrowBackIosNewIcon className={classes.previousDateIcon} />
                </Button>
              }
              RightArrow={
                <Button
                  disabled={
                    currentDate === new Date().getUTCDate() + 4 ? true : false
                  }
                  className={classes.iconContainer}
                  onClick={this.onNextDate}
                >
                  <ArrowForwardIosIcon className={classes.nextDateIcon} />
                </Button>
              }
              itemClassName="bookings-container"
            >
              {datesArray
                .slice(currentDate - 9, currentDate)
                .map((date: any) => {
                  return (
                    <Box
                      key={date.date}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        zIndex: 0,
                      }}
                    >
                      <Box
                        sx={{
                          width: {
                            xs: "4.3rem !important",
                            sm: "100% !important",
                            md: "145px !important",
                          },
                          position: "relative",
                          px: { md: 5.3, sm: 2, xs: "5px" },
                          py: { md: "15px", sm: 2.3, xs: "5px" },
                          backgroundColor:
                            Number(date.date) === this.state.activeDate
                              ? "#E7A356"
                              : "#FFF",
                        }}
                        onClick={() => this.handleActiveDate(date.date)}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            variant="h4"
                            className={classes.calenderDateText}
                            sx={{
                              color:
                                Number(date.date) === this.state.activeDate
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
                                Number(date.date) === this.state.activeDate
                                  ? "#FFFFFF"
                                  : "#272522",
                            }}
                          >
                            {date.days}
                          </Typography>
                        </Box>
                      </Box>
                      {this.state.activeDate === date.date ? (
                        <Box
                          component="img"
                          sx={{
                            alignSelf: "center",
                          }}
                          alt="triangle"
                          src={require("../../assets/images/SalonBookings/Triangle.png")}
                        />
                      ) : null}
                    </Box>
                  );
                })}
            </ScrollMenu>
          </Box>
        </Container>
        <Container maxWidth="lg" sx={{ paddingBottom: 0, paddingTop: 6 }}>
          <Grid
            container
            spacing={2}
            sx={{ paddingTop: "24px", paddingBlock: 0 }}
          >
            {bookingSectionData.slice(0, 4).map((item: any, index: number) => {
              return (
                <Grid item key={item.id} md={6} sm={6} xs={12}>
                  <Card
                    className={classes.customerContainer + " customerCard"}
                    sx={{ mx: "auto !important", boxShadow: "none" }}
                  >
                    <CardHeader
                      classes={{
                        title: classes.customerName + " customerTitleHeading",
                        subheader: classes.customerId + " customerSubHeading",
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
                            className={
                              classes.customerPaidAmount + " personPrice"
                            }
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
                                  sm={4}
                                  md={3}
                                  lg={3}
                                  key={service}
                                >
                                  <Box className={classes.serviceNameContainer}>
                                    <Typography
                                      variant="body2"
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
              className={classes.viewAllCustomersButton}
              sx={{
                mx: "auto",
                textTransform: "capitalize",
              }}
            >
              View all Bookings
              <KeyboardDoubleArrowRightOutlinedIcon />
            </Button>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(BookingsDashboard);
