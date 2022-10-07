import { Button } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import { viewAllStyles } from "./ViewAll.styles";
interface Istate {}
interface Iprops {
  title: string;
}
class ViewAll extends Component<Iprops, Istate> {
  render() {
    const { classes }: any = this.props;
    return (
      <Button
        className={classes.buttonClass}
       
      >
        {this.props.title}
      </Button>
    );
  }
}
export default withStyles(viewAllStyles)(ViewAll);
