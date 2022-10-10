import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component, Fragment } from "react";
import { withStyles } from "@mui/styles";
import { StylesOffers } from "../../OffersSection/BestOffers.styles";

interface IsNameProps {
  classes: any;
  buttonName: string;
  onClickNavigateOffersPage: (id: any) => void;
}

export class CommonViewAllButton extends Component<IsNameProps> {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Box
          className={classes.ViewAllButtonContainer}
          sx={{
            width: { xs: "180px", sm: "180px", lg: "190px" },
            ml: { lg: "auto", sm: "auto" },
          }}
        >
          <Button
            className={classes.ViewAllButton}
            onClick={this.props.onClickNavigateOffersPage}
            sx={{
              fontSize: { xs: "16px", sm: "18px", lg: "18px" },
            }}
          >
            {this.props.buttonName}
          </Button>
        </Box>
      </>
    );
  }
}

export default withStyles(StylesOffers)(CommonViewAllButton);
