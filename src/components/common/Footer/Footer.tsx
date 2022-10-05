import React, { Component } from "react";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { withStyles } from "@mui/styles";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import SalonLogo from "../../../assets/images/Footerimages/salon-logo.png";
import facebook from "../../../assets/images/Footerimages/facebook-icon.png";
import youtube from "../../../assets/images/Footerimages/youtube-icon.png";
import instagram from "../../../assets/images/Footerimages/instagram-icon.png";
import { services } from "../../../utils/data/footer/footer_data";

import { Styles } from "./Footer.Styles";
import "./Footer.css";

interface footerProps {
  classes: any;
  salon: boolean;
}
interface footerState {
  isSalon: boolean;
}

class Footer extends Component<footerProps, footerState> {
  state = {
    isSalon: this.props.salon,
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        {this.state.isSalon ? (
          <Box className="footer-background">
            <Grid
              container
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{ py: 5, px: 10 }}
            >
              <img src={SalonLogo} alt="salon logo" />
              <Typography className={classes.salonFooterText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Box className={classes.salonSocialmedia}>
                <Box className={classes.socialBox}>
                  <img src={facebook} alt="facebook icon" />
                </Box>
                <Box className={classes.socialBox}>
                  <img src={instagram} alt="instagram icon" />
                </Box>
                <Box className={classes.socialBox}>
                  <img src={youtube} alt="youtube icon" />
                </Box>
              </Box>
            </Grid>
            <Box sx={{ py: 2 }}>
              <Divider
                variant="middle"
                sx={{ background: "#939290", opacity: 0.2, mb: 2 }}
              />
              <Typography className={classes.CopyRightstext}>
                &copy; {new Date().getFullYear()} Salon | All Rights Reserved
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box className="footer-background">
            <Grid
              container
              justifyContent="center"
              columnSpacing={3}
              rowSpacing={5}
              sx={{ p: 3 }}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <img src={SalonLogo} alt="salon logo" />
                <Typography className={classes.footerText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Box className={classes.socialmedia}>
                  <Box className={classes.socialBox}>
                    <img src={facebook} alt="facebook icon" />
                  </Box>
                  <Box className={classes.socialBox}>
                    <img src={instagram} alt="instagram icon" />
                  </Box>
                  <Box className={classes.socialBox}>
                    <img src={youtube} alt="youtube icon" />
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Box sx={{ mb: 2 }}>
                  <Typography className={classes.footerHeading}>
                    Popular Services
                  </Typography>
                  <Typography
                    sx={{ borderBottom: "5px solid #EBB273", width: "40px" }}
                  ></Typography>
                </Box>
                <Box>
                  <List>
                    {services.map((item) => {
                      return (
                        <ListItem
                          key={item.id}
                          onClick={() => {}}
                          className={classes.servicesList}
                        >
                          <KeyboardDoubleArrowRightIcon />
                          <ListItemText sx={{ ml: 4 }}>
                            {item.title}
                          </ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Box sx={{ mb: 4 }}>
                  <Typography className={classes.footerHeading}>
                    Contact Info
                  </Typography>
                  <Typography
                    sx={{ borderBottom: "5px solid #EBB273", width: "40px" }}
                  ></Typography>
                </Box>
                <Box>
                  <Box className={classes.infoBox}>
                    <CallIcon className={classes.infoIcons} />
                    <Typography className={classes.infoText}>
                      9876543210
                    </Typography>
                  </Box>
                  <Box className={classes.infoBox}>
                    <EmailIcon className={classes.infoIcons} />
                    <Typography className={classes.infoText}>
                      salonexample@gmail.com
                    </Typography>
                  </Box>
                  <Box className={classes.infoBox}>
                    <LocationOnIcon className={classes.infoIcons} />
                    <Typography className={classes.infoText}>
                      121 KING STREET Eddy street and Gough street, San
                      Francisco, CA 94109
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ py: 2 }}>
              <Divider
                variant="middle"
                sx={{ background: "#939290", opacity: 0.2, mb: 2 }}
              />
              <Typography className={classes.CopyRightstext}>
                &copy; {new Date().getFullYear()} Salon | All Rights Reserved
              </Typography>
            </Box>
          </Box>
        )}
      </>
    );
  }
}

export default withStyles(Styles)(Footer);
