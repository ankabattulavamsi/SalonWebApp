import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Component } from "react";
import withRouter from "../../hoc/withRouter";
import { modalConstants } from "../../utils/data/constants/loginRegistration";
import { Buttons, Drawers, OtpPass } from "../common";
import { navSate } from "../common/Navbar/Navbar";
import { VerificationCompStyles } from "./VerificationComp.styles";

interface VerificationCompProps {
  open: boolean;
  handleToggle: (type?: string) => void;
  state?: navSate;
  classes: any;
  navigate: any;
  handleChangeOtp?: (otp: string) => void;
}
interface VerificationCompState {}
class VerificationComp extends Component<
  VerificationCompProps,
  VerificationCompState
> {
  render() {
    const { classes, state, navigate, handleChangeOtp } = this.props;
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
            <Typography className={classes.paragraphText}>
              Enter the OTP Sent at{" "}
              <span
                style={{
                  marginLeft: "6px",
                  color: "#272522",
                  fontWeight: "bold",
                }}
              >
                +91 9876543210
              </span>
            </Typography>
            <OtpPass
              numberInputs={4}
              placeholder="2809"
              value={state?.otpVerif}
              handleChange={handleChangeOtp}
              isInputSecure
            />

            <Typography className={classes.paragraphText}>
              Didn’t receive the OTP?
              <span
                style={{
                  marginLeft: "7px",
                  color: "#272522",
                  fontWeight: "bold",
                }}
              >
                Resend
              </span>
            </Typography>
          </Box>

          <Box sx={{ mt: 5 }}>
            {state?.IsCustomerLogin ? (
              <Buttons
                title="Verify & continue"
                handleClick={() => {
                  navigate("/customer");
                  this.props.handleToggle(modalConstants.VERIFICATION_DRAWER);
                }}
              />
            ) : (
              <Buttons
                title="Verify & continue"
                handleClick={() => {
                  this.props.handleToggle();
                }}
              />
            )}
          </Box>
        </Box>
      </Drawers>
    );
  }
}

export default withStyles(VerificationCompStyles)(withRouter(VerificationComp));
