/** @format */

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
import ChangePasscode from "../ChangePasscode/ChangePasscode";
import Eliipe from "../../assets/images/SalonOwnerProfile/HeaderImages/Ellipse 12.png";
import withRouter from "../../hoc/withRouter";

interface SalonEditState {
  activeTab: string;
  open: boolean;
  bname: string;
  owner: string;
  GSTIN: string;
  email: string;
  image: string;
}

interface SalonProps {
  navigate: any;
}

class SalonOwnerPage extends Component<SalonProps> {
  state: SalonEditState = {
    activeTab: "Booking History",
    open: false,
    bname: "",
    owner: "Steve Smith",
    GSTIN: "",
    email: "stevesmith@example.com",
    image: "",
  };

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

  handleChange = (e: any) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  onClickOpenChangeCodeModel = () => {
    this.setState({ open: true });
  };

  onCloseChangeModel = () => {
    this.setState({ open: false });
  };

  handleChangeImage = (e: any) => {
    this.setState({
      image: URL.createObjectURL(e.target.files[0]),
    });
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
                src={this.state.image === "" ? Eliipe : this.state.image}
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
              xs={7.5}
              md={5}
              sm={6.5}
              lg={7.1}
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
                {this.state.owner}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { md: "18px", xs: "16px" },
                }}
                className={classes.salonOwnerEmail}
              >
                {this.state.email}
              </Typography>
              <Button
                onClick={this.onClickOpenChangeCodeModel}
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
                sx={{
                  height: { md: "57px", sm: "57px" },
                  width: { md: "149px", xs: "133px !important" },
                  ml: { xs: 2, sm: 0 },
                }}
                className={classes.ownerLogoutButton}
                onClick={() => {
                  this.props.navigate("/");
                }}
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
        <ChangePasscode
          open={this.state.open}
          onCloseChangeModel={this.onCloseChangeModel}
        />
      </Layout>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(
  withRouter(SalonOwnerPage)
);
