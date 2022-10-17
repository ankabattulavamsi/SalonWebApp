import { Button } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import { buttonStyles } from "../ButtonOfDrawer/Btuttons.style";
interface ButtonModalProps {
  type?: "button" | "submit" | "reset" | undefined;

  handleClick?: () => void;
  classes?: any;
  className?: any;
  disabled?: boolean;
  title: string;
  icon?: any;
  bgColor?: string;
  color?: string;
}
interface ButtonModalState {}
class ButtonModal extends Component<ButtonModalProps, ButtonModalState> {
  render() {
    const {
      type,
      handleClick,
      classes,
      className,
      disabled,
      title,
      icon,
      bgColor,
      color,
    } = this.props;
    return (
      <Button
        sx={{
          textAlign: "center",
          width: "100%",
          bgcolor: bgColor ? bgColor : "#E7A356",
          color: color ? color : "#fff",
          mb: 2,
          ":hover": {
            bgcolor: bgColor ? bgColor : "#E7A356",
            color: color ? color : "#fff",
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

export default withStyles(buttonStyles)(ButtonModal);
