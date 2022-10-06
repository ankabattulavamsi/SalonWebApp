import { Button } from "@mui/material";
import React, { Component } from "react";

import "./PayoutButton.css";
interface Iprops {
  title: string;
  className?: string;
  active?: boolean;
  handleClick: () => void;
}
interface Istate {}
export default class PayoutButton extends Component<Iprops, Istate> {
  render() {
    const { title, className, active, handleClick } = this.props;
    return (
      <Button
        sx={{
          textAlign: "center",
          width: "100%",
          bgcolor: "#F9F3EC",
          borderRadius: "0px",
          color: "#000000",
          ":hover": {
            color: "#000000",
            bgcolor:"#F9F3EC",
          },
          py: 2,
        }}
        className={`${active ? "bg-color-black" : ""} ${className}`}
        onClick={handleClick}
      >
        {title}
      </Button>
    );
  }
}
