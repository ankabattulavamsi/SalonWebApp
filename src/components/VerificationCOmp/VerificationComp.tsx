/** @format */

import { AlertColor, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Form, Formik } from "formik";
import React, { Component } from "react";
import withRouter from "../../hoc/withRouter";
import { modalConstants } from "../../utils/data/constants/loginRegistration";
import { Buttons, Drawers, OtpPass } from "../common";
import { navSate } from "../common/Navbar/Navbar";
import { VerificationCompStyles } from "./VerificationComp.styles";

interface VerificationCompProps {
  open: boolean;
  handleToggle: (type?: string) => void;
  state: navSate;
  classes: any;
  navigate: any;
  handleChangeOtp?: (otp: string) => void;
  handleError: (open: boolean, type: AlertColor, message: string) => void;
}
interface VerificationCompState {
  error: string;
}
class VerificationComp extends Component<
  VerificationCompProps,
  VerificationCompState
> {
  constructor(props: VerificationCompProps) {
    super(props);
    this.state = {
      error: "",
    };
  }

  handleSalonClick = () => {
    this.props.handleToggle();
  };
  handleCustomerClick = () => {
    this.props.navigate("/customer");
    this.props.handleToggle(modalConstants.VERIFICATION_DRAWER);
  };
  handleErrors = (message: string) => {
    this.setState({ error: message });
  };
  handleError = () => {
    const { state } = this.props;
    if (state.otpVerif === "") {
      this.handleErrors("please enter the otp");
    } else if (isNaN(Number(state.otpVerif))) {
      this.handleErrors("otp is not a string");
    } else if (state.otpVerif.length < 4) {
      this.handleErrors("please enter 4 digit otp");
    } else {
      this.handleErrors("");
    }
  };

  render() {
    const { classes, state, handleChangeOtp } = this.props;
    return (
      <Drawers
        open={this.props.open}
        toggleDrawer={() =>
          this.props.handleToggle(modalConstants.VERIFICATION_DRAWER)
        }
      >
        <Box sx={{ padding: "0px !important" }} className={classes.drawerSizeVer}>
          <Box>
            <Typography className={classes.heading}>Verification</Typography>
          </Box>

          <Formik
            initialValues={{
              otpVerif: state.otpVerif,
            }}
            onSubmit={() => {}}
          >
            <Form>
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
                  name="otpVerif"
                  numberInputs={4}
                  placeholder="----"
                  value={state.otpVerif}
                  handleChange={(otp) => {
                    handleChangeOtp && handleChangeOtp(otp);
                    this.handleErrors("");

                    // this.handleValidateOtp(otp);
                  }}
                  isInputSecure
                />
                {this.state.error && (
                  <p className="error-message">{this.state.error}</p>
                )}
                <Typography className={classes.paragraphText} sx={{ mt: 2 }}>
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
                <Buttons
                  type="submit"
                  title="Verify & continue"
                  handleClick={() => {
                    state.otpVerif === "" ||
                    isNaN(Number(state.otpVerif)) ||
                    state.otpVerif.length < 4
                      ? this.handleError()
                      : state.IsCustomerLogin
                      ? this.handleCustomerClick()
                      : this.handleSalonClick();
                  }}
                />
              </Box>
            </Form>
          </Formik>
        </Box>
      </Drawers>
    );
  }
}

export default withStyles(VerificationCompStyles)(withRouter(VerificationComp));
