import { Button } from "@mui/material";
import React, { Component } from "react";
interface ButtonProps {
  title: string;
  disabled?: boolean;
  handleClick?: () => void;
  className?: string;
}
interface ButtonState {}
export default class Buttons extends Component<ButtonProps, ButtonState> {
  render() {
    const { title, handleClick, disabled, className } = this.props;
    return (
      <Button
        sx={{
          textAlign: "center",
          width: "100%",
          bgcolor: "#E7A356",
          color: "#ffffff",
          padding: "15px 20px",
          fontSize: "20px",
          ":hover": {
            bgcolor: "#E7A356",
            color: "#ffffff",
          },
        }}
        onClick={() => handleClick && handleClick()}
        disabled={disabled}
        className={className && className}
      >
        {title}
      </Button>
    );
  }
}
