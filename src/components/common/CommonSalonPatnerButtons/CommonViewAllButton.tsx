import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component, Fragment } from "react";
import { withStyles } from "@mui/styles";
import { StylesOffers } from "../../OffersSection/BestOffers.styles";

interface IsNameProps {
  classes: any;
  buttonName: string;
  onClickNavigateOffersPage: (id?: any) => void;
}

export class CommonViewAllButton extends Component<IsNameProps> {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Box
          className={classes.ViewAllButtonContainer}
          sx={{
            width: { xs: "150px", sm: "180px", lg: "200px" },
            textAlign: "center",
            ml: { lg: "auto", sm: "auto" },
          }}
        >
          <Button
            className={classes.ViewAllButton}
            onClick={this.props.onClickNavigateOffersPage}
            sx={{
              fontSize: { xs: "14px", sm: "18px", lg: "20px" },
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
