import { Button } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import { buttonStyles } from "./Btuttons.style";
interface ButtonProps {
  title: string;
  disabled?: boolean;
  handleClick?: () => void;
  className?: string;
  classes: any;
}
interface ButtonState {}
class Buttons extends Component<ButtonProps, ButtonState> {
  render() {
    const { title, handleClick, disabled, className, classes } = this.props;
    return (
      <Button
        sx={{
         
        }}
        onClick={() => handleClick && handleClick()}
        disabled={disabled}
        className={`${classes.buttonBox} ${className && className}`}
      >
        {title}
      </Button>
    );
  }
}
export default withStyles(buttonStyles)(Buttons);
