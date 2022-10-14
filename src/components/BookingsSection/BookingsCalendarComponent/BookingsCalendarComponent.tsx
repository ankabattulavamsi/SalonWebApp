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

class BookingsCalendarComponent extends Component<any> {
  state = {
    len: datesArray.length / 2,
    activeDate: moment().date(),
  };
  onNextDate = () => {
    this.setState({ len: this.state.len + 1 });
  };

  onPreviousDate = () => {
    this.setState({ len: this.state.len - 1 });
  };

  handleActiveDate = (date: number) => {
    this.setState({ activeDate: date });
  };
  render() {
    const { classes }: any = this.props;
    const { len } = this.state;
    return (
      <Container maxWidth="lg">
        <Box sx={{ width: "99%" }}>
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
          >
            {datesArray.slice(len - 4, len + 4).map((date: any) => {
              return (
                <Box
                  key={date.date}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      px: { md: "2.6em", sm: "1.05em", xs: "0.26em" },
                      py: { md: "15px", sm: 2.3, xs: "5px" },
                      backgroundColor:
                        Number(date.date) === this.state.activeDate
                          ? "#E7A356"
                          : "#FFF",
                      flexDirection: "column",
                    }}
                    onClick={() => this.handleActiveDate(date.date)}
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
