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

import { Styles } from "./BookingDashboard.Styles";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { bookingSectionData } from "../../utils/data/bookings/BookingsDashboardData";

class BookingsDashboard extends Component {
  render() {
    const { classes, theme }: any = this.props;
    return (
      <Box
        sx={{
          backgroundColor: "#FDF6EE",
        }}
      >
        <Container maxWidth="lg" sx={{ mx: "auto" }}>
          <Grid
            container
            spacing={2}
            sx={{
              py: "34px",
            }}
          >
            {bookingSectionData.slice(0, 4).map((item: any, index: number) => {
              return (
                <Grid item key={item.id} md={6} xs={12}>
                  <Card
                    sx={{
                      maxWidth: "555px",
                      p: "20px",
                      height: "auto",
                      "&:hover": {
                        color: "#E7A356",
                      },
                      boxShadow: "0px 0px",
                      mx: "auto",
                    }}
                  >
                    <CardHeader
                      sx={{
                        padding: 0,
                        paddingLeft: "16px",
                      }}
                      avatar={
                        <Avatar
                          src={item.img}
                          aria-label="person"
                          //   className={classes.dashboardAvatar}
                          sx={{
                            width: { xs: "54px", md: "74px" },
                            height: { xs: "54px", md: "74px" },
                          }}
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
                            // className={classes.profileHeaderCost}
                            sx={{
                              fontFamily: "Fira Sans",
                              fontStyle: "normal",
                              fontWeight: 600,
                              fontSize: "24px",
                              lineHeight: "48px",
                              textTransform: "capitalize",
                              color: "#88878F",
                              [theme.breakpoints.down("sm")]: {
                                fontSize: "22px !important",
                              },
                            }}
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
                      titleTypographyProps={
                        {
                          fontFamily: "Fira Sans",
                          color: "#272522",
                          fontSize: { xs: "22px", md: "24px" },
                          fontWeight: "600",
                          lineHeight: "48px",
                          textTransform: "capitalize",
                          fontStyle: "normal",
                        }
                        // classes.customerName
                      }
                      subheaderTypographyProps={
                        {
                          fontWeight: "500",
                          fontSize: { xs: "16px", md: "18px" },
                          lineHeight: "28px",
                          color: "#272522",
                          fontStyle: "noraml",
                          fontFamily: "Fira Sans",
                          letterSpacing: "0.01",
                          textTransform: "capitalize",
                        }
                        //   classes.bookingsSubHeading
                      }
                      title={item.title}
                      subheader="OD11721633"
                    />
                    <CardContent>
                      <Box>
                        <Typography
                          variant="h1"
                          //   className={classes.bookingsServicesTitle}
                          sx={{
                            fontFamily: "Fira Sans",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: { xs: "16px", md: "18px" },
                            lineHeight: "48px",
                            textTransform: "capitalize",
                            color: "#272522",
                          }}
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
                                  <Box
                                    sx={{
                                      backgroundColor: "#F0F0F0",
                                      width: { md: "87px", lg: "112px" },
                                      height: { md: "37px", lg: "49px" },
                                      // textAlign: "center",
                                      borderRadius: "5px",
                                      // [theme.breakpoints.down("md")]: {
                                      //   width: "87px",
                                      //   height: "37px",
                                      // },
                                    }}
                                  >
                                    <Typography
                                      variant="body2"
                                      align="center"
                                      // className={classes.bookingsServicesTitle}
                                      sx={{
                                        fontFamily: "Fira Sans",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        fontSize: { md: "14px", lg: "16px" },
                                        lineHeight: "36px",
                                        textTransform: "capitalize",
                                        color: "#88878F",
                                      }}
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
                          //   className={classes.bookingTimeHeading}
                          sx={{
                            fontFamily: "Fira Sans",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "18px",
                            lineHeight: "48px",
                            textTransform: "capitalize",
                            color: "#272522",
                            [theme.breakpoints.down("sm")]: {
                              fontSize: "17px",
                            },
                          }}
                        >
                          Time
                          <Typography
                            variant="h3"
                            component="span"
                            // className={classes.bookingTime}
                            sx={{
                              fontFamily: "Fira Sans",
                              fontStyle: "normal",
                              fontWeight: 500,
                              fontSize: "18px",
                              lineHeight: "36px",
                              textTransform: "capitalize",
                              color: "#88878F",
                              ml: 3,
                              [theme.breakpoints.down("sm")]: {
                                fontSize: "17px",
                              },
                            }}
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
