/** @format */

import { Box, Stack, Typography } from "@mui/material";
import React, { Component } from "react";
import OtpInput from "react-otp-input";
import LoginButton from "../common/LoginButton/LoginButton";
import DropDownLogin from "./DropDownLogin";
import { withStyles } from "@mui/styles";
import { Styles } from "./Login.style";
import withRouter from "../../hoc/withRouter";
import { modalConstants } from "../../utils/data/constants/loginRegistration";
interface CustomerLoginProps {
  navigate: any;
  handleLogin: (type?: string) => void;

}
interface CustomerLoginState {}
class CustomerLogin extends Component<CustomerLoginProps, CustomerLoginState> {
  state = {
    loginOtp: "",
  };
  loginOtpHandler = (loginOtp: any) => this.setState({ loginOtp });
  render() {
    const { classes }: any = this.props;
    return (
      <div>
        <Stack>
          <Typography className={classes.typoPara} mt={3} mb={2} component="p">
            Mobile No
          </Typography>
          <Stack>
            <DropDownLogin />
            
          </Stack>
        </Stack>
        <Stack>
          <Typography className={classes.typoPara} mt={3} mb={2} component="p">
            Passcode
          </Typography>
          <Box className="passcodeParentDiv">
            <OtpInput
              data-testid="otp-input"
              placeholder="******"
              inputStyle={{
                width: "100%",
                height: "40px",
                borderRadius: "5%",
                border: "none",
                margin: "0 3px",
                fontSize: "15px",
              }}
              numInputs={6}
              value={this.state.loginOtp}
              onChange={this.loginOtpHandler}
              className="otp"
              isInputSecure
            />
          </Box>
        </Stack>
        <Stack className={classes.forgetPasscode}>
          <Typography className={classes.typoPara}>Forget Passcode?</Typography>
        </Stack>
        <Stack mt={4} mb={4}>
          <LoginButton title="Login" />
        </Stack>
        <Stack sx={{ textAlign: "center" }}>
          <Typography component="p">
            Don't have an account?{" "}
            <span
              className={classes.registerSpan}
              onClick={() =>
                this.props.handleLogin(modalConstants.REGISTER_DRAWER)
              }
            >
              Register Now
            </span>
          </Typography>
        </Stack>
      </div>
    );
  }
}
export default withStyles(Styles)(withRouter(CustomerLogin));
