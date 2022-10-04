import React, { Fragment, Component } from "react";
import { Box, Button, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../../assets/images/Navbarimage/logo.jpg";

import "./Navbar.css";
import { landingMenu } from "../../../utils/data/navbar_menus";
import BuisnessDetails from "../../BuisnessDetail/BuisnessDetails";
import PayoutDetails from "../../PayoutDetails/PayoutDetails";
import RegisteredNowPage from "../../RegisterNowPage/RegisteredNowPage";
import { modalConstants } from "../../../utils/data/constants/loginRegistration";

export interface navSate {
  activeLink: string;
  mobileDrawer: boolean;
  registerDrawer: boolean;
  openBusiness: boolean;
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
}
class Navbar extends Component<{}, navSate> {
  state = {
    activeLink: "Home",
    mobileDrawer: false,
    registerDrawer: false,
    openBusiness: false,
    openPayout: false,
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
  };

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
  handleToggleDrawer = (type?: string) => {
    switch (type) {
      case modalConstants.PAYOUT_DRAWER:
        this.setState({
          openPayout: !this.state.openPayout,
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
      default:
        this.setState({
          openBusiness: !this.state.openBusiness,
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
    }
  };

  //button click to navigate or open the payout detalis page
  handleClickSave = () => {
    this.handleToggleDrawer("openPayout");
    this.handleToggleDrawer();
  };
  render() {
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
              onClick={() => this.handleToggleDrawer()}
            >
              Login
            </Button>
          </Box>

          {/* mobile drawer section */}
          <Box className="mobile-drawer">
            <Box sx={{ background: "#272522", px: 4, py: 2.6 }}>
              <PersonIcon
                sx={{ color: "#E7A356", fontSize: "30px" }}
                onClick={() => this.handleToggleDrawer()}
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
          <RegisteredNowPage
            open={this.state.registerDrawer}
            toogleDrawer={() =>
              this.handleToggleDrawer(modalConstants.REGISTER_DRAWER)
            }
          />

          <BuisnessDetails
            handleToggleDrawer={this.handleToggleDrawer}
            open={this.state.openBusiness}
            handleChange={this.handleChange}
            handleImageChange={this.handleImageChange}
            state={this.state}
            handleClickSave={this.handleClickSave}
          />

          <PayoutDetails
            open={this.state.openPayout}
            toggleFunc={this.handleToggleDrawer}
            state={this.state}
            handleChange={this.handleChange}
          />
        </>
      </Fragment>
    );
  }
}

export default Navbar;
