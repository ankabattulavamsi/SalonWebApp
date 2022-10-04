import { Box } from "@mui/system";
import React, { Component } from "react";
import { modalConstants } from "../../utils/data/constants/loginRegistration";
import { Buttons, Drawers } from "../common";
import { navSate } from "../common/Navbar/Navbar";

interface VerificationCompProps {
  open: boolean;
  handleToggle: (type?: string) => void;
  state?: navSate;
}
interface VerificationCompState {}
export default class VerificationComp extends Component<
  VerificationCompProps,
  VerificationCompState
> {
  render() {
    return (
      <Drawers
        open={this.props.open}
        toggleDrawer={() =>
          this.props.handleToggle(modalConstants.VERIFICATION_DRAWER)
        }
      >
        verificationDrawer
        <Box>
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
