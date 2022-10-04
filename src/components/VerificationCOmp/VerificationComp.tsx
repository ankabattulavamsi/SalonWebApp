import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Component } from "react";
import { modalConstants } from "../../utils/data/constants/loginRegistration";
import { Buttons, Drawers, OtpPass } from "../common";
import { navSate } from "../common/Navbar/Navbar";
import { VerificationCompStyles } from "./VerificationComp.styles";

interface VerificationCompProps {
  open: boolean;
  handleToggle: (type?: string) => void;
  state?: navSate;
  classes: any;
}
interface VerificationCompState {}
class VerificationComp extends Component<
  VerificationCompProps,
  VerificationCompState
> {
  render() {
    const { classes } = this.props;
    return (
      <Drawers
        open={this.props.open}
        toggleDrawer={() =>
          this.props.handleToggle(modalConstants.VERIFICATION_DRAWER)
        }
      >
        <Box>
          <Box>
            <Typography className={classes.heading}>Verification</Typography>
          </Box>
          <Box>
            <OtpPass numberInputs={4} placeholder="2809" />
          </Box>

          <Box>
            <Buttons
              title="Verify & continue"
              handleClick={() => {
                this.props.handleToggle();
              }}
            />
          </Box>
        </Box>
      </Drawers>
    );
  }
}

export default withStyles(VerificationCompStyles)(VerificationComp);
