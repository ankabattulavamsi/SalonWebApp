import { Button } from "@mui/material";
import React, { Component } from "react";
interface Istate {}
interface Iprops {
  title: string;
}
export default class ViewAll extends Component<Iprops, Istate> {
  render() {
    return (
      <Button
        sx={{
          bgcolor: "#272522",
          color: "#ffffff",
          py: "18px",
          px: "25px",
          borderRadius: "8px",
          textTransform: "capitalize",
          fontSize: "18px",
          ":hover": {
            bgcolor: "#272522",
            color: "#ffffff",
          },
        }}
      >
        {this.props.title}
      </Button>
    );
  }
}
