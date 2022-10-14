import { Button } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
interface ButtonModalProps {
  type?: "button" | "submit" | "reset" | undefined;

  handleClick?: () => void;
  classes?: any;
  className?: any;
  disabled?: boolean;
  title: string;
  icon: string;
}
interface ButtonModalState {}
export default class ButtonModal extends Component<
  ButtonModalProps,
  ButtonModalState
> {
  render() {
    const { type, handleClick, classes, className, disabled, title, icon } =
      this.props;
    return (
      <Button
        sx={{
          textAlign: "center",
          width: "100%",
          bgcolor: "#E7A356",
          color: "#ffffff",
          mb: 2,
          ":hover": {
            bgcolor: "#E7A356",
            color: "#ffffff",
          },
        }}
        type={type}
        onClick={() => handleClick && handleClick()}
        disabled={disabled}
        className={`${classes.buttonBox} ${className && className}`}
      >
        {icon && icon} {title}
      </Button>
    );
  }
}
