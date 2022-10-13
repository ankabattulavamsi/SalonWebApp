import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Styles } from "../BookingDashBoardSalonHomepage/BookingDashboard.Styles";
import { BookingCardProps } from "../../../utils/data/bookings/BookingsDashboardData";

interface CardProps {
  classes?: any;
  theme?: any;
  item: BookingCardProps;
}

class BookingsProfileCard extends Component<CardProps> {
  render() {
    const { classes, theme, item } = this.props;
    return (
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
                className={classes.customerPaidAmount + " personPrice"}
              >
                ₹{item.cost}
              </Typography>
              <IconButton aria-label="settings">
                <MoreVertIcon sx={{ height: "28px", width: "28px" }} />
              </IconButton>
            </Box>
          }
          title={item.title}
          subheader="OD11721633"
        />
        <CardContent>
          <Box>
            <Typography variant="h1" className={classes.bookingsServicesTitle}>
              Services
            </Typography>
            <Grid container spacing={2}>
              {item.services.map((service: string, index: number) => {
                return (
                  <Grid item xs={4} sm={4} md={3} lg={3} key={service}>
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
              })}
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
            <Typography variant="h5" className={classes.bookingTimeHeading}>
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
    );
  }
}

export default withStyles(Styles, { withTheme: true })(BookingsProfileCard);
