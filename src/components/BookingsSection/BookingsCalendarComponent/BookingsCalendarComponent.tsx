import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import moment from "moment";
import React, { Component } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { datesArray } from "../../../utils/data/bookings/CalenderData";
import { withStyles } from "@mui/styles";

import { Styles } from "../BookingDashBoardSalonHomepage/BookingDashboard.Styles";
import "../BookingDashboard.css";

class BookingsCalendarComponent extends Component {
  state = {
    currentDate: moment().date(),
    activeDate: moment().date(),
  };
  onNextDate = () => {
    this.setState({ currentDate: this.state.currentDate + 1 });
  };

  onPreviousDate = () => {
    this.setState({ currentDate: this.state.currentDate - 1 });
  };

  handleActiveDate = (date: number) => {
    this.setState({ activeDate: date });
  };
  render() {
    const { classes }: any = this.props;
    const { currentDate } = this.state;
    return (
      <Container maxWidth="lg">
        <Box>
          <ScrollMenu
            LeftArrow={
              <Button
                className={classes.iconContainer}
                onClick={this.onPreviousDate}
              >
                <ArrowBackIosNewIcon className={classes.previousDateIcon} />
              </Button>
            }
            RightArrow={
              <Button
                className={classes.iconContainer}
                onClick={this.onNextDate}
              >
                <ArrowForwardIosIcon className={classes.nextDateIcon} />
              </Button>
            }
            itemClassName="bookings-container"
          >
            {datesArray
              .slice(currentDate - (moment().date() - 2), currentDate + 3)
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
                          {date.weekday}
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
                        src={require("../../../assets/images/SalonBookings/Triangle.png")}
                      />
                    ) : null}
                  </Box>
                );
              })}
          </ScrollMenu>
        </Box>
      </Container>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(
  BookingsCalendarComponent
);
