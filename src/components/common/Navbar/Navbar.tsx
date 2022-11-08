/** @format */

import React, { Fragment, Component } from "react";
import { AlertColor, Box, Button, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../../assets/images/Navbarimage/logo.jpg";
import Login from "../../Login/Login";
import "./Navbar.css";
import { landingMenu } from "../../../utils/data/navbar_menus";
import BuisnessDetails from "../../BuisnessDetail/BuisnessDetails";
import PayoutDetails from "../../PayoutDetails/PayoutDetails";
import RegisteredNowPage from "../../RegisterNowPage/RegisteredNowPage";
import { modalConstants } from "../../../utils/data/constants/loginRegistration";
import VerificationComp from "../../VerificationCOmp/VerificationComp";
import Snackbars from "../SnackbarToast/Snackbars";
import { Link } from "react-router-dom";

export interface navSate {
  activeLink: string;
  mobileDrawer: boolean;
  registerDrawer: boolean;
  verificationDrawer: boolean;
  openDrawer: boolean;
  openBusiness: boolean;
  IsCustomerLogin: boolean;
  IsSalonLogin: boolean;
  image: any;
  bname: string;
  owner: string;
  address: string;
  email: string;
  GSTIN: string;
  error: string;
  openPayout: boolean;
  upiAddress: string;
  accNumber: string;
  confirmaccNumber: string;
  accHoldername: string;
  ifscCode: string;
  bankname: string;
  fname: string;
  password: string;
  confirmPassword: string;
  mobileNumber: string;
  errorPass: string;
  city: string;
  otpVerif: string;
  openSnackbar: boolean;
  errorMessage: string;
  alertType: AlertColor;
  errrorConfirmPassword: string;
}
class Navbar extends Component<{}, navSate> {
  constructor(props: {}) {
    super(props);
    this.state = {
      activeLink: "Home",
      mobileDrawer: false,
      registerDrawer: false,
      verificationDrawer: false,
      openDrawer: false,
      openBusiness: false,
      openPayout: false,
      IsCustomerLogin: true,
      IsSalonLogin: false,
      image: "",
      address: "",
      bname: "",
      email: "",
      owner: "",
      GSTIN: "",
      error: "",
      errorPass: "",
      upiAddress: "",
      accHoldername: "",
      bankname: "",
      confirmaccNumber: "",
      ifscCode: "",
      accNumber: "",
      fname: "",
      password: "",
      confirmPassword: "",
      mobileNumber: "",
      city: "",
      otpVerif: "",
      openSnackbar: false,
      errorMessage: "",
      alertType: "success",
      errrorConfirmPassword: "",
    };
  }

  handleClick = (title: string) => {
    this.setState({
      activeLink: title,
      mobileDrawer: !this.state.mobileDrawer,
    });
  };

  handleChange = (e: any) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  // on change function to change the input value of the  profile image
  handleImageChange = (e: any): any => {
    this.setState({ image: URL.createObjectURL(e.target.files[0]) });
  };

  //handle change for input and password and confirm password

  handleChangePassword = (password: any) => {
    this.setState({ password });
  };

  confirmPassChangehandle = (password: any) => {
    this.setState({ confirmPassword: password });
    if (password !== this.state.password) {
      this.setState({
        errrorConfirmPassword:
          "please password and confirm password is not matched",
      });
    } else {
      this.setState({
        errrorConfirmPassword: "",
      });
    }
  };

  handleToggleDrawer = (type?: string) => {
    switch (type) {
      case modalConstants.PAYOUT_DRAWER:
        this.setState({
          openPayout: !this.state.openPayout,
          openBusiness: false,
          image: "",
          address: "",
          bname: "",
          email: "",
          owner: "",
          GSTIN: "",
          error: "",
          upiAddress: "",
          accHoldername: "",
          bankname: "",
          confirmaccNumber: "",
          ifscCode: "",
          accNumber: "",
        });
        break;

      case modalConstants.REGISTER_DRAWER:
        this.setState({
          registerDrawer: !this.state.registerDrawer,
          openBusiness: false,
          verificationDrawer: false,
          openPayout: false,
          openDrawer: false,
          mobileDrawer: false,
          fname: "",
          email: "",
          password: "",
          confirmPassword: "",
          mobileNumber: "",
          city: "",
          otpVerif: "",
        });
        break;

      case modalConstants.VERIFICATION_DRAWER:
        this.setState({
          verificationDrawer: !this.state.verificationDrawer,
          registerDrawer: false,
          openBusiness: false,
          openDrawer: false,
          openPayout: false,
          mobileDrawer: false,
          otpVerif: "",
        });
        break;
      default:
        this.setState({
          openBusiness: !this.state.openBusiness,
          registerDrawer: false,
          verificationDrawer: false,
          openDrawer: false,
          openPayout: false,
          image: "",
          address: "",
          bname: "",
          email: "",
          owner: "",
          GSTIN: "",
          error: "",
        });
        break;
    }
  };

  handleDrawerClose = () => {
    this.setState({
      openDrawer: false,
    });
  };
  handleDrawerOpen = () => {
    this.setState({
      openDrawer: true,
    });
  };
  //button click to navigate or open the payout details page
  handleClickSave = () => {
    this.handleToggleDrawer(modalConstants.PAYOUT_DRAWER);
  };

  // handle customer login
  handleCustomerLogin = () => {
    this.setState({
      IsCustomerLogin: true,
      IsSalonLogin: false,
    });
    console.log(this.state.IsCustomerLogin, "IsCustomerLogin from func");
  };
  handleSalonLogin = () => {
    this.setState({
      IsCustomerLogin: false,
      IsSalonLogin: true,
    });
  };

  otpChangeHandle = (otp: string) => {
    this.setState({ otpVerif: otp });
  };

  handleError = (open: boolean, type: AlertColor, message: string) => {
    console.log({ open, type, message });
    this.setState({
      errorMessage: message,
      alertType: type,
      openSnackbar: open,
    });
  };

  render() {
    console.log({ navState: this.state });
    return (
      <Fragment>
        <Box className="navbar-body">
          <Box className="logo">
            <img src={Logo} alt="logo" width="100%" height="75px" />
          </Box>
          <Box className="nav-menulink">
            {landingMenu.map((menu) => {
              return (
                <a
                  key={menu.id}
                  href={menu.path}
                  className={
                    menu.title === this.state.activeLink
                      ? "active"
                      : "menu-link"
                  }
                  onClick={() => this.setState({ activeLink: menu.title })}
                >
                  {menu.title}
                </a>
              );
            })}
          </Box>
          <Box className="nav-login-section">
            <Button
              startIcon={<PersonIcon />}
              className="login-btn"
              onClick={this.handleDrawerOpen}
            >
              Login
            </Button>
          </Box>

          {/* mobile drawer section */}
          <Box className="mobile-drawer">
            <Box sx={{ background: "#272522", px: 4, py: 2.6 }}>
              <PersonIcon
                sx={{ color: "#E7A356", fontSize: "30px" }}
                onClick={this.handleDrawerOpen}
              />
            </Box>
            <MenuIcon
              sx={{ ml: 4, fontSize: "30px" }}
              onClick={() => this.setState({ mobileDrawer: true })}
            />
          </Box>
        </Box>
        <Drawer
          anchor="right"
          open={this.state.mobileDrawer}
          onClose={() =>
            this.setState({ mobileDrawer: !this.state.mobileDrawer })
          }
        >
          <Box sx={{ p: 5, widht: "70%", overflowY: "hidden" }}>
            <Box
              onClick={() =>
                this.setState({ mobileDrawer: !this.state.mobileDrawer })
              }
            >
              <CloseIcon />
            </Box>
            <List>
              {landingMenu.map((menu) => {
                return (
                  <ListItem
                    key={menu.id}
                    className="mobile-menus"
                    onClick={() => this.handleClick(menu.title)}
                  >
                    <a
                      href={menu.path}
                      className={
                        menu.title === this.state.activeLink
                          ? "moblie-active-link"
                          : "mobile-menus"
                      }
                    >
                      {menu.title}
                    </a>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>

        <>
          {/* all modals */}
          <Login
            open={this.state.openDrawer}
            onClose={this.handleDrawerClose}
            handleLogin={this.handleToggleDrawer}
            handleCustomerLogin={this.handleCustomerLogin}
            handleSalonLogin={this.handleSalonLogin}
            state={this.state}
          />
          {/* common snackbar */}
          <Snackbars
            handleClose={() => {
              this.setState({ openSnackbar: false });
            }}
            message={this.state.errorMessage}
            open={this.state.openSnackbar}
            type={this.state.alertType}
          />
          <RegisteredNowPage
            open={this.state.registerDrawer}
            toogleDrawer={this.handleToggleDrawer}
            handleChange={this.handleChange}
            state={this.state}
            handleOnClick={this.handleToggleDrawer}
            handleChangePassword={this.handleChangePassword}
            confirmPassChangehandle={this.confirmPassChangehandle}
            handleError={this.handleError}
          />
          <VerificationComp
            handleToggle={this.handleToggleDrawer}
            open={this.state.verificationDrawer}
            state={this.state}
            handleChangeOtp={this.otpChangeHandle}
            handleError={this.handleError}
          />
          <BuisnessDetails
            handleToggleDrawer={this.handleToggleDrawer}
            open={this.state.openBusiness}
            handleChange={this.handleChange}
            handleImageChange={this.handleImageChange}
            state={this.state}
            handleClickSave={this.handleClickSave}
            handleError={this.handleError}
          />
          <PayoutDetails
            open={this.state.openPayout}
            toggleFunc={this.handleToggleDrawer}
            state={this.state}
            handleChange={this.handleChange}
            handleError={this.handleError}
          />
        </>
      </Fragment>
    );
  }
}
export default Navbar;
