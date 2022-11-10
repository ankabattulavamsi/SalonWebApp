import { Button } from "@mui/material";

import React, { Component, Fragment } from "react";
import { withStyles } from "@mui/styles";
import { CommonButtonEditDelete } from "./buttons.Styles";

interface IsNameProps {
  classes: any;
  buttonName: string;
  onClick: (id?: any) => void;
  icon?: React.ReactNode;
  className:any

}

export class DeleteButton extends Component<IsNameProps> {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Button
            className={classes.DeleteButton}
          onClick={this.props.onClick}
          startIcon={this.props.icon}
          sx={{
            fontSize: { xs: "16px", sm: "18px", lg: "18px" },
          }}
        >
          {this.props.icon}
          {this.props.buttonName}
        </Button>
      </>
    );
  }
}

export default withStyles(CommonButtonEditDelete)(DeleteButton);
