import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import "./ButtonCust.css";

interface ButtonProps {
  color: string;
  bgColor: string;
  avatar?: string;
  title?: string;
  subTitle?: string;
}
interface ButtonState {}
export default class ButtonCust extends Component<ButtonProps, ButtonState> {
  // constructor(props: ButtonProps) {
  //   super(props);
  // }
  render() {
    const { bgColor, color, avatar, subTitle, title } = this.props;
    return (
      <Button
        className="button-custom-style"
        sx={{
          color: color,
          bgcolor: bgColor,
          ":hover": {
            color: color,
            bgcolor: bgColor,
          },
        }}
      >
        {avatar && (
          <Box sx={{ width: "22%" }}>
            <Avatar
              src={avatar}
              className="avatar-button"
              sx={{ display: "flex", justifyContent: "left" }}
            />
          </Box>
        )}
        <Box sx={{ display: "grid" }}>
          <Typography
            variant="caption"
            className="para-button"
            sx={{
              fontSize: { xs: "12px", md: "14px" },
            }}
            textAlign={"left"}
          >
            {subTitle}
          </Typography>
          <Typography
            variant="caption"
            className="heding-button"
            textAlign={"left"}
            sx={{
              fontSize: { xs: "18px", md: "18px", lg: "22px" },
            }}
          >
            {title}
          </Typography>
        </Box>
      </Button>
    );
  }
}
