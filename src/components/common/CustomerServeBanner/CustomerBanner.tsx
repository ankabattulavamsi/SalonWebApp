/** @format */

import { Box, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import { Styles } from "../Banner/banner.style";
import Buttons from "../ButtonOfDrawer/Buttons";

interface IProps {
  image: string;
  title: string;
  buttonTitle: string;
  oiBtnTitle: string;
  classes: any;
  handleClick?: () => void;
}
class CustomerBanner extends Component<IProps> {
  render() {
    const { classes, buttonTitle, oiBtnTitle, image, title, handleClick } =
      this.props;
    return (
      <Box sx={{ mb: 5, mt: 5 }} >
        <Box
          sx={{
            background: `url(${image}) no-repeat`,
            height: "50vh",
            backgroundSize: "cover",
            backgroundPosition: "100% 30%",
            position: "relative",
            overflow: "visible",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(135deg, rgba(0,0,0,.6) , rgba(0,0,0,.6)) ",
              top: "50%",
              left: "50%",
              mx: "auto",
              transform: "translate(-50%,-50%)",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                color: "white !important",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
              className={classes.titleText}
            >
              {title}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              transform: "translateY(-50%)",
              width: { xs: "98%", sm: "50%", lg: "32%" },
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Buttons
              title={buttonTitle}
              className={classes.lakmeServeBtn}
              handleClick={() => {
                handleClick && handleClick();
              }}
            />

            <Buttons
              title={oiBtnTitle}
              className={classes.otherServeBtn}
              handleClick={() => {
                handleClick && handleClick();
              }}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(Styles)(CustomerBanner);
