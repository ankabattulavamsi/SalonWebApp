import React, { Component } from "react";
import { Grid, Button } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Container } from "@mui/system";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

import BookingsProfileCard from "../BookingsProfileCard/BookingsProfileCard";
import BookingsCalendarComponent from "../BookingsCalendarComponent/BookingsCalendarComponent";
import { bookingSectionData } from "../../../utils/data/bookings/BookingsDashboardData";

import { Styles } from "./BookingDashboard.Styles";
import "../BookingDashboard.css";

class BookingsDashboard extends Component {
  render() {
    const { classes }: any = this.props;

    return (
      <div
        style={{
          backgroundColor: "#FDF6EE",
          marginTop: 60,
          paddingTop: 100,
          width: "100%",
        }}
      >
        <BookingsCalendarComponent />
        <Container maxWidth="lg" sx={{ paddingBottom: 0, paddingTop: 6 }}>
          <Grid
            container
            spacing={2}
            sx={{ paddingTop: "24px", paddingBlock: 0 }}
          >
            {bookingSectionData.slice(0, 4).map((item: any, index: number) => {
              return (
                <Grid item key={item.id} md={6} sm={6} xs={12}>
                  <BookingsProfileCard item={item} />
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
