import React, { Component, Fragment } from "react";
import { Avatar, Box, Drawer, List, ListItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import Logo from "../../../assets/images/Navbarimage/logo.jpg";
import Profile from "../../../assets/images/Navbarimage/profile-img.png";
import { SalonMenus } from "../../../utils/models/navbar_interface";

import "./SalonNav.css";
import SalonNotification from "../../SalonNotification/SalonNotification";
import withRouter from "../../../hoc/withRouter";

interface salonProps {
  customer: boolean;
  menus: SalonMenus[];
  navigate?: any;
}
interface salonState {
  isCustomer: boolean;
  open: boolean;
  dialogOpen: boolean;
}

class SalonNavbar extends Component<salonProps, salonState> {
  state = {
    isCustomer: this.props.customer,
    open: false,
    dialogOpen: false,
  };

  handleClick = (title: string) => {
    this.setState({
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
                onClick={() => {
                  this.props.navigate("/salon/owner");
                }}
              >
                <Avatar alt="Remy Sharp" src={Profile} />
                <Typography sx={{ ml: 2 }} variant="h3">
                  Profile
                </Typography>
              </Box>
              <Box>
                <Badge
                  variant="dot"
                  sx={{ "& .MuiBadge-badge": { backgroundColor: "#E7A356" } }}
                  // badgeContent="5"
                >
                  <NotificationsIcon
                    onClick={this.handleDialogOpen}
                    sx={{
                      fontSize: "32px",
                      color: this.state.dialogOpen ? "#E7A356" : "",
                    }}
                  />
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
                  <NotificationsIcon
                    onClick={this.handleDialogOpen}
                    sx={{
                      fontSize: "32px",
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
            </Box>
          </Drawer>

          <>
            {/* notification dialog */}
            <SalonNotification
              open={this.state.dialogOpen}
              onClose={this.handleDialogClose}
            />
          </>
        </Fragment>
      </>
    );
  }
}

export default withRouter(SalonNavbar);
