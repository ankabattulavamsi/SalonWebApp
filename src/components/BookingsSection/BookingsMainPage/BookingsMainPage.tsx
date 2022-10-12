import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { Component } from "react";
import { bookingSectionData } from "../../../utils/data/bookings/BookingsDashboardData";
import BookingsCalendarComponent from "../BookingsCalendarComponent/BookingsCalendarComponent";
import BookingsProfileCard from "../BookingsProfileCard/BookingsProfileCard";
import { withStyles } from "@mui/styles";
import { Styles } from "../BookingDashBoardSalonHomepage/BookingDashboard.Styles";


class BookingsMainPage extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#FDF6EE",
          paddingTop: 150,
          width: "100%",
        }}
      >
        <BookingsCalendarComponent />
        <Container maxWidth="lg" sx={{ paddingBottom: 10, paddingTop: 6 }}>
          <Grid
            container
            spacing={2}
            sx={{ paddingTop: "24px", paddingBlock: 0 }}
          >
            {bookingSectionData.map((item: any, index: number) => {
              return (
                <Grid item key={item.id} md={6} sm={6} xs={12}>
                  <BookingsProfileCard item={item} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(BookingsMainPage);
