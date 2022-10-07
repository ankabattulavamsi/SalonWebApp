import React, { Component, Fragment } from "react";
import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import Logo from "../../../assets/images/Navbarimage/logo.jpg";
import Profile from "../../../assets/images/Navbarimage/profile-img.png";
import { SalonMenus } from "../../../utils/models/navbar_interface";

import "./SalonNav.css";

interface salonProps {
  customer: boolean;
  link: string;
  menus: SalonMenus[];
}
interface salonState {
  salonLink: string;
  open: boolean;
}

class SalonNavbar extends Component<salonProps, salonState> {
  state = {
    isCustomer: this.props.customer,
    salonLink: this.props.link,
    open: false,
  };

  handleClick = (title: string) => {
    this.setState({
      salonLink: title,
      open: !this.state.open,
    });
  };
  render() {
    const { menus } = this.props;
    return (
      <>
        <Fragment>
          <Box className="salon-navbar-body">
            <Box className="logo">
              <img src={Logo} alt="logo" width="100%" height="75px" />
            </Box>
            <Box className="salon-nav-menulink">
              {menus.map((menu) => {
                return (
                  <a
                    key={menu.id}
                    href={menu.path}
                    className={
                      menu.title === this.state.salonLink
                        ? "active"
                        : "salon-menu-link"
                    }
                    onClick={() => this.setState({ salonLink: menu.title })}
                  >
                    {menu.title}
                  </a>
                );
              })}
            </Box>
            <Box className="nav-profile-section">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar alt="Remy Sharp" src={Profile} />
                <Typography sx={{ ml: 2 }} variant='h3'>Profile</Typography>
              </Box>
              <Box>
                <Badge
                  variant="dot"
                  sx={{ "& .MuiBadge-badge": { backgroundColor: "#E7A356" } }}
                  // badgeContent="5"
                >
                  <NotificationsIcon sx={{ fontSize: "32px" }} />
                </Badge>
              </Box>
              {this.state.isCustomer && (
                <ShoppingBasketIcon sx={{ fontSize: "32px" }} />
              )}
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
                <Avatar alt="Remy Sharp" src={Profile} />
                <Badge
                  variant="dot"
                  sx={{
                    ml: { sm: 4, xs: 2 },
                    "& .MuiBadge-badge": { backgroundColor: "#E7A356" },
                  }}
                >
                  <NotificationsIcon sx={{ fontSize: "32px" }} />
                </Badge>
              </Box>
              <Box>
                <MenuIcon
                  sx={{ ml: { xs: 3, sm: 2 }, fontSize: "32px" }}
                  onClick={() => this.setState({ open: true })}
                />
              </Box>
            </Box>
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
                          menu.title === this.state.salonLink
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
            </Box>
          </Drawer>
        </Fragment>
      </>
    );
  }
}

export default SalonNavbar;