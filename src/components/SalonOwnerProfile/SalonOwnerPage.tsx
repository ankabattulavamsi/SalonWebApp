import { Avatar, Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { Component } from "react";
import LockIcon from "@mui/icons-material/Lock";
import { ButtonData } from "../../utils/data/SalonOwnerData/ButtonData";
import BookingHistoryTable from "./BookingHistoryTable";
import PrivacyandPolicy from "./PrivacyandPolicy";
import TermsandCondtions from "./TermsandCondtions";

import { Styles } from "./SalonOwnerPage.Styles";
import "./SalonOwnerPage.css";
import { withStyles } from "@mui/styles";
import Layout from "../Layout/Layout";

class SalonOwnerPage extends Component {
  state = { activeTab: "Booking History" };

  project = () => {
    switch (this.state.activeTab) {
      case "Booking History":
        return <BookingHistoryTable />;
      case "Privacy Policy":
        return <PrivacyandPolicy />;
      case "Terms & Conditions":
        return <TermsandCondtions />;
      default:
        return null;
    }
  };

  render() {
    const { classes }: any = this.props;
    return (
      <Layout>
        <Container maxWidth="lg" sx={{ mt: 15, mb: 10 }}>
          <Box>
            <Box sx={{ position: "relative" }}>
              <img
                src={require("../../assets/images/SalonOwnerProfile/HeaderImages/bg.png")}
                alt="banner"
                width="100%"
                className="profile-header-image"
              />
              <Avatar
                src={require("../../assets/images/SalonOwnerProfile/HeaderImages/Profile.png")}
                sx={{
                  width: { md: "140px", xs: "94px" },
                  height: { md: "140px", xs: "94px" },
                  // marginRight: "20px",
                  position: "absolute",
                  top: { md: "70%", xs: "80%" },
                  ml: { md: "8%", lg: "16%", sm: "14%" },
                }}
              />
            </Box>
          </Box>

          <Grid container sx={{ mt: 2 }}>
            <Grid item sx={{ ml: { xs: "auto" } }}></Grid>
            <Grid
              item
              xs={7}
              md={4}
              sm={6}
              sx={{
                margin: "0 !important",
                marginRight: "auto",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { md: "25px", xs: "22px" },
                  mt: { sm: "30px", md: 0 },
                }}
                className={classes.salonOwnerName}
              >
                Steve Smith
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { md: "18px", xs: "16px" },
                }}
                className={classes.salonOwnerEmail}
              >
                stevesmith@example.com
              </Typography>
              <Button
                sx={{
                  fontSize: { md: "18px", xs: "17px" },
                }}
                className={classes.changePasscodeButton}
              >
                <LockIcon />
                Change Passcode
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.editBussinessDeatailsButton}
                sx={{
                  width: { md: "251px", xs: "231" },
                  mx: { xs: 0, md: 2, sm: 1 },
                  my: { sm: "40px", md: 0, xs: "20px" },
                }}
              >
                Edit Bussness Details
              </Button>
              <Button
                sx={{
                  height: { md: "57px", sm: "57px" },
                  width: { md: "149px", xs: "133px !important" },
                  ml: { xs: 2, sm: 0 },
                }}
                className={classes.ownerLogoutButton}
              >
                Log Out
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ mt: 2, mx: "auto" }}
            className="main-button-container"
          >
            {ButtonData.map((button: any) => {
              return (
                <Grid
                  item
                  xs={11}
                  sm={4}
                  md={4}
                  lg={4}
                  key={button.name}
                  onClick={() => this.setState({ activeTab: button.name })}
                >
                  <Button
                    className={
                      this.state.activeTab === button.name
                        ? classes.buttonContainer + " activate-class"
                        : classes.buttonContainer
                    }
                    sx={{
                      width: {
                        xs: "18rem !important",
                        sm: "15rem !important",
                        md: "22.5rem !important",
                      },
                    }}
                  >
                    <img
                      src={button.buttonImg}
                      alt="button"
                      style={{ width: "52px", height: "52px" }}
                    />
                    <Typography
                      variant="h6"
                      className={classes.buttonName}
                      sx={{
                        color:
                          this.state.activeTab === button.name ? "#272522" : "",
                      }}
                    >
                      {button.name}
                    </Typography>
                  </Button>
                </Grid>
              );
            })}
          </Grid>
          <>{this.project()}</>
        </Container>
      </Layout>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(SalonOwnerPage);
