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
import EditBusinessProfile from "../ChangePasscode/EditBusinessProfile";
import Eliipe from "../../assets/images/BuesnessProfile/Ellipse 9.png";

interface SalonEditState {
  activeTab: string;
  open: boolean;
  openBModel: false;
  bname: string;
  owner: string;
  GSTIN: string;
  email: string;
  image: string;
}
class SalonOwnerPage extends Component {
  state: SalonEditState = {
    activeTab: "Booking History",
    open: false,
    openBModel: false,
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

  onClickOpenEditBModel = () => {
    this.setState({ openBModel: true });
  };

  onCloseEditBModel = () => {
    this.setState({ openBModel: false });
  };


  handleChangeImage = (e:any)=>{
    this.setState({
      image:URL.createObjectURL(e.target.files[0])
    })
  }

  render() {
    const { classes }: any = this.props;
    return (
      <Layout>
        <Container sx={{ mx: "auto", mt: 15, mb: 10 }}>
          <Box>
            <Box sx={{ position: "relative" }}>
              <img
                src={require("../../assets/images/SalonOwnerProfile/HeaderImages/bg.png")}
                alt="banner"
                width="100%"
                className="profile-header-image"
              />
              <Avatar
                src={this.state.image ===""?Eliipe :this.state.image}
                sx={{
                  width: { md: "140px", xs: "94px" },
                  height: { md: "140px", xs: "94px" },
                  // marginRight: "20px",
                  position: "absolute",
                  top: "70%",
                  ml: { md: "8%", lg: "16%", sm: "14%" },
                }}
              />
            </Box>
          </Box>

          <Grid container>
            <Grid item sx={{ ml: { xs: "auto" } }}></Grid>
            <Grid
              item
              xs={7}
              md={4}
              sm={3}
              sx={{ margin: "0 !important", marginRight: "auto" }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Fira Sans",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: { md: "25px", xs: "22px" },
                  lineHeight: "50px",
                  textTransform: "capitalize",
                  color: "#000000",
                }}
              >
                {this.state.owner}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: { md: "18px", xs: "16px" },
                  letterSpacing: "0.02em",
                  textTransform: "lowercase",
                  color: "#88878F",
                }}
              >
                {this.state.email}
              </Typography>
              <Button
                onClick={this.onClickOpenChangeCodeModel}
                sx={{
                  fontFamily: "Fira Sans",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: { md: "18px", xs: "17px" },
                  letterSpacing: "0.02em",
                  textDecorationLine: "underline",
                  textTransform: "capitalize",
                  color: "#FF0034",
                }}
              >
                <LockIcon />
                Change Passcode
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={this.onClickOpenEditBModel}
                sx={{
                  fontFamily: "Fira Sans",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "16px",
                  height: "57px",
                  width: { md: "251px", xs: "231" },
                  textAlign: "center",
                  letterSpacing: "0.05em",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  backgroundColor: "#272522",
                  borderRadius: "5px",
                  padding: "5px",
                  m: 2,
                  "&:hover": {
                    backgroundColor: "#272522",
                  },
                }}
              >
                Edit Bussness Details
              </Button>
              <Button
                sx={{
                  height: { md: "57px", sm: "57px" },
                  width: { md: "149px", xs: "133px !important" },
                  fontFamily: "Fira Sans",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "48px",
                  textAlign: "center",
                  letterSpacing: "0.02em",
                  textTransform: "capitalize",
                  background: "#E7A356",
                  borderRadius: "5px",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#E7A356",
                  },
                }}
              >
                Log Out
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {ButtonData.map((button: any) => {
              return (
                <Grid
                  item
                  xs={11}
                  sm={6}
                  md={4}
                  lg={4}
                  key={button.name}
                  onClick={() => this.setState({ activeTab: button.name })}
                  sx={{ mx: "auto" }}
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
                        sm: "22.5rem !important",
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
        <EditBusinessProfile
          open={this.state.openBModel}
          onCloseEditBModel={this.onCloseEditBModel}
          bname={this.state.bname}
          GSTIN={this.state.GSTIN}
          owner={this.state.owner}
          email={this.state.email}
          image={this.state.image}
          handleChange={this.handleChange}
          handleChangeImage={this.handleChangeImage}
        />
      </Layout>
    );
  }
}

export default withStyles(Styles, { withTheme: true })(SalonOwnerPage);
