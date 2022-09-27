import React, { Fragment, Component } from "react";
import { Box, Button, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";

import { landingMenu } from "../../../utils/data/navbar_menus";
import Logo from "../../../assets/images/Navbarimage/logo.jpg";

import "./Navbar.css";

interface navSate {
  activeLink: string;
  mobileDrawer: boolean;
}
class Navbar extends Component<{}, navSate> {
  state = {
    activeLink: "Home",
    mobileDrawer: false,
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
            >
              Login
            </Button>
          </Box>
          
          {/* mobile drawer section */}
          <Box className="mobile-drawer">
            <Box sx={{ background: "#272522", px: 4, py: 2.6 }}>
              <PersonIcon sx={{ color: "#E7A356", fontSize:'30px' }} />
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
                    onClick={() => this.setState({ activeLink: menu.title })}
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
      </Fragment>
    );
  }
}
export default Navbar;

// make the navbar responsive as needed for all pages (lading page, customer & salooon)

// You can divide the navbar into three sections namely inorder to use in all pages
// 1.logo part,
// 2.menu items (home,blogs, teams etc)
// 3. profile & for icons
