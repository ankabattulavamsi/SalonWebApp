/** @format */

import React, { Component, Fragment } from "react";
import { Avatar, Box, Drawer, List, ListItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import withRouter from "../../../hoc/withRouter";
import Logo from "../../../assets/images/Navbarimage/logo.jpg";
import Profile from "../../../assets/images/Navbarimage/profile-img.png";
import CustomerProfile from "../../../assets/images/Navbarimage/customerProfile.png";
import { SalonMenus } from "../../../utils/models/navbar_interface";
import SalonNotification from "../../SalonNotification/SalonNotification";

import "./SalonNav.css";
import { CustomerMenu } from "../../../utils/data/navbar_menus";

interface salonProps {
  customer: boolean;
  menus: SalonMenus[];
  navigate?: any;
}
interface salonState {
  isCustomer: boolean;
  activeLink: string;

  open: boolean;
  dialogOpen: boolean;
  lat: any;
  lon: any;
  data: any;
  locationData: any;
}

class SalonNavbar extends Component<salonProps, salonState> {
  state = {
    isCustomer: this.props.customer,
    open: false,
    dialogOpen: false,
    lat: null,
    lon: null,
    data: "",
    activeLink: "Home",

    locationData: {
      state_district: "",
      state: "",
      country: "",
    },
  };

  handleClick = (title: string) => {
    this.setState({
      activeLink: title,
      open: !this.state.open,
    });
  };

  handleDialogOpen = () => {
    this.setState({
      dialogOpen: true,
    });
  };
  handleDialogClose = () => {
    this.setState({
      dialogOpen: false,
    });
  };

  fetchdata = async () => {
    console.log(this.state.lat, this.state.lon);
    await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${this.state.lat}+${this.state.lon}&key=8518d29fbed240129135f8e8283c4c01`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);

        this.setState({ data: data.results[0].formatted });
        let localData = data.results[0].components;
        let { state_district, state, country } = localData;
        localStorage.setItem(
          "Current Adress",
          JSON.stringify({ state_district, state, country })
        );
      })
      .then((data) =>
        fetch(` https://httpstat.us/200`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: data, time: new Date() }),
        })
      );
  };
  getLocation = () => {
    if (navigator.geolocation) {
      var data = navigator.geolocation.getCurrentPosition(
        this.showPosition,
        this.handleLocationError
      );
    } else {
      alert("Geolocation not supported");
    }
  };
  showPosition = (position: any) => {
    this.setState(
      {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      },
      () => this.fetchdata()
    );
  };
  handleLocationError = (error: any) => {
    switch (error) {
      case error.PERMISSION_DENIED:
        alert("user denied request for geolocation error");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("location information unavailable");
        break;
      case error.TIMEOUT:
        alert("request time out");
        break;
      case error.UNKNOWN_ERROR:
        alert("unknown error occured");
        break;
      default:
    }
  };
  componentDidMount() {
    if (localStorage.getItem("Current Adress")) {
      const existingdata = JSON.parse(
        localStorage.getItem("Current Adress") || ""
      );
      this.setState({ data: existingdata });

      this.setState({
        locationData: existingdata,
      });
    } else {
      this.getLocation();
    }
  }

  render() {
    const { menus } = this.props;

    return (
      <>
        <Fragment>
          <Box className="salon-navbar-body">
            <Box className="logo">
              <img src={Logo} alt="logo" width="100%" height="75px" />
            </Box>

            {this.state.isCustomer ? (
              <Box className="salon-nav-menulink">
                {CustomerMenu.map((menu) => {
                  return (
                    <a
                      key={menu.id}
                      href={menu.path}
                      className={
                        window.location.pathname == menu.path 
                        ||window.location.pathname.slice(9).includes(menu.path)
                          ? "active"
                          : "salon-menu-link"
                      }
                      onClick={() => this.setState({ activeLink: menu.title })}
                    >
                      <>{console.log(window.location.pathname)}</>
                      {menu.title}
                    </a>
                  );
                })}
              </Box>
            ) : (
              <Box className="salon-nav-menulink">
                {menus.map((menu) => {
                  return (
                    <a
                      key={menu.id}
                      href={menu.path}
                      className={
                        window.location.pathname == menu.path
                          ? "active"
                          : "salon-menu-link"
                      }
                    >
                      {menu.title}
                    </a>
                  );
                })}
              </Box>
            )}
            {this.state.isCustomer && (
              <Box className="salon-nav-location">
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: "30px" }} />
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Typography variant="h6">
                        {this.state.locationData.state_district}
                      </Typography>
                      <ExpandMoreIcon />
                    </Box>
                    <Typography variant="h6" color="secondary.dark">
                      {this.state.locationData.state},&nbsp;
                      {this.state.locationData.country}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}
            <Box className="nav-profile-section">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color:
                    window.location.pathname === "/salon/owner"
                      ? "#E7A356"
                      : "",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                {this.state.isCustomer ? (
                  <Box sx={{ display: "flex" }}>
                    <Avatar alt="Remy Sharp" src={CustomerProfile} />
                    <Typography sx={{ ml: 2, mt: 1 }} variant="h3">
                      Profile
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    onClick={() => {
                      this.props.navigate("/salon/owner");
                    }}
                    sx={{ display: "flex" }}
                  >
                    <Avatar alt="Remy Sharp" src={Profile} />
                    <Typography sx={{ ml: 2, mt: 1 }} variant="h3">
                      Profile
                    </Typography>
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  paddingRight: "0px !important",
                }}
              >
                <Badge
                  variant="dot"
                  sx={{ "& .MuiBadge-badge": { backgroundColor: "#E7A356" } }}
                  // badgeContent="5"
                >
                  <NotificationsIcon
                    onClick={this.handleDialogOpen}
                    sx={{
                      fontSize: "32px",
                      cursor: "pointer",
                      color: this.state.dialogOpen ? "#E7A356" : "",
                    }}
                  />
                </Badge>
              </Box>
              <Box
                onClick={() => {
                  this.props.navigate("/customer/cart-items");
                }}
                sx={{
                  color:
                    window.location.pathname === "/customer/cart-items"
                      ? "#E7A356"
                      : "",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                {this.state.isCustomer && (
                  <ShoppingBasketIcon sx={{ fontSize: "32px", mr: 3 }} />
                )}
              </Box>
            </Box>

            {/* mobile drawer section */}
            <Box className="salon-mobile-drawer">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  ml: { xs: 4, sm: 6 },
                  pl: { sm: 5 },
                }}
              >
                {this.state.isCustomer ? (
                  <Avatar alt="Remy Sharp" src={CustomerProfile} />
                ) : (
                  <Box
                    onClick={() => {
                      this.props.navigate("/salon/owner");
                    }}
                  >
                    <Avatar alt="Remy Sharp" src={Profile} />
                  </Box>
                )}
                <Badge
                  variant="dot"
                  sx={{
                    ml: { sm: 4, xs: 2 },
                    "& .MuiBadge-badge": { backgroundColor: "#E7A356" },
                  }}
                >
                  <NotificationsIcon
                    onClick={this.handleDialogOpen}
                    sx={{
                      fontSize: "32px",
                      cursor: "pointer",
                      color: this.state.dialogOpen ? "#E7A356" : "",
                    }}
                  />
                </Badge>
              </Box>
              <Box>
                <MenuIcon
                  sx={{ ml: { xs: 3, sm: 2 }, fontSize: "32px" }}
                  onClick={() => this.setState({ open: true })}
                />
              </Box>
            </Box>
            {this.state.isCustomer && (
              <Box className="salon-location-body" mt={9}>
                {/* mobile drawer section */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    ml: { sm: 4 },
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: "32px" }} />
                  <Typography variant="h6">
                    {this.state.locationData.state_district},&nbsp;
                    {this.state.locationData.state},{" "}
                    {this.state.locationData.country}
                  </Typography>
                  <ExpandMoreIcon />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    mr: { xs: 1, sm: 6 },
                  }}
                >
                  <ShoppingBasketIcon sx={{ fontSize: "32px" }} />
                  <Typography sx={{ pl: 1 }} variant="h6">
                    Cart
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
          <Drawer
            anchor="right"
            open={this.state.open}
            onClose={() => this.setState({ open: !this.state.open })}
          >
            <Box sx={{ p: 5, widht: "70%", overflowY: "hidden" }}>
              <Box onClick={() => this.setState({ open: !this.state.open })}>
                <CloseIcon />
              </Box>

              {this.state.isCustomer ? (
                <List>
                  {CustomerMenu.map((menu) => {
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
              ) : (
                <List>
                  {menus.map((menu) => {
                    return (
                      <ListItem
                        key={menu.id}
                        className="salon-mobile-menus"
                        onClick={() => this.handleClick(menu.title)}
                      >
                        <a
                          href={menu.path}
                          className={
                            window.location.pathname == menu.path
                              ? "salon-moblie-active-link"
                              : "salon-mobile-menus"
                          }
                        >
                          {menu.title}
                        </a>
                      </ListItem>
                    );
                  })}
                </List>
              )}
            </Box>
          </Drawer>

          <>
            {/* notification dialog */}
            {!this.state.isCustomer ? (
              <SalonNotification
                open={this.state.dialogOpen}
                onClose={this.handleDialogClose}
              />
            ) : (
              <SalonNotification
                open={this.state.dialogOpen}
                onClose={this.handleDialogClose}
              />
            )}
            {/* <SalonNotification
              open={this.state.dialogOpen}
              onClose={this.handleDialogClose}
            /> */}
          </>
        </Fragment>
      </>
    );
  }
}

export default withRouter(SalonNavbar);
