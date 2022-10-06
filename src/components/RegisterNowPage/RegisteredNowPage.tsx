import * as React from "react";
import { Box, Checkbox, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import {
  emailImage,
  optionsStateName,
  userImage,
} from "../../utils/data/businessdetailsandPayout/Busness.data";
import { modalConstants } from "../../utils/data/constants/loginRegistration";
import { Buttons, Drawers, DropDownLogin, Inputs, OtpPass } from "../common";
import { navSate } from "../common/Navbar/Navbar";

import { registeredStyles } from "./RegisteredNowPage.Styles";

interface RegisteredNowPageProps {
  open: boolean;
  toogleDrawer: (type?: string) => void;
  classes: any;
  handleChange: (e: any) => void;
  state: navSate;
  handleOnClick: () => void;
  handleChangePassword?: (e: any) => void;
  confirmPassChangehandle?: (password: any) => void;
}

interface RegisteredNowPageState {
  errorEmail: string;
  isChecked: boolean;
  error: string;
}

class RegisteredNowPage extends React.Component<
  RegisteredNowPageProps,
  RegisteredNowPageState
> {
  constructor(props: RegisteredNowPageProps) {
    super(props);
    this.state = {
      isChecked: false,
      errorEmail: "",
      error: "",
    };
  }
  handleValidateEmail = (e: any) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const str = e.target.value;

    if (!pattern.test(str)) {
      this.setState({ errorEmail: "Email is not valid" });
    } else {
      this.setState({ errorEmail: "" });
    }
  };

  handleValidateMobileNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pattern = /(7|8|9)\d{9}/;
    const str = e.target.value;
    if (!pattern.test(str)) {
      this.setState({ error: "Mobile Number is not valid" });
    } else {
      this.setState({ error: "" });
    }
  };

  render() {
    const {
      classes,
      state,
      handleChange,
      handleChangePassword,
      confirmPassChangehandle,
    } = this.props;
    return (
      <Drawers
        open={this.props.open}
        toggleDrawer={() =>
          this.props.toogleDrawer(modalConstants.REGISTER_DRAWER)
        }
      >
        <Box>
          <Box>
            <Typography className={classes.heading}>Registered Now</Typography>
          </Box>
          <Box>
            <Inputs
              label="Full Name"
              name="fname"
              handleChange={handleChange}
              placeholder="Steve smith"
              icon={userImage}
              type="text"
              value={state.fname}
            />
            <Box sx={{ mt: 2, mb: 1 }}>
              <Box>
                <Typography>Mobile No</Typography>
              </Box>
              <DropDownLogin
                handleChange={(e) => {
                  this.handleValidateMobileNumber(e);
                  handleChange(e);
                }}
                name={"mobileNumber"}
                value={state.mobileNumber}
                error={this.state.error}
              />
            </Box>
            <Inputs
              label="email"
              name="email"
              handleChange={(e) => {
                this.handleValidateEmail(e);
                handleChange(e);
              }}
              placeholder="stevesmith@gmail.com"
              icon={emailImage}
              type="email"
              value={state.email}
              error={this.state.errorEmail}
            />
            <OtpPass
              numberInputs={6}
              label="password"
              placeholder="******"
              value={state.password}
              handleChange={handleChangePassword}
            />
            <OtpPass
              numberInputs={6}
              label="confirm password"
              placeholder="******"
              handleChange={confirmPassChangehandle}
              value={state.confirmPassword}
            />
            <Inputs
              isSelect
              label="State"
              name="state"
              options={optionsStateName}
              handleChange={handleChange}
            />
          </Box>
          <Box>
            <Box className={classes.agreementBox}>
              <Checkbox
                color={this.state.isChecked ? "success" : "default"}
                checked={this.state.isChecked}
                onChange={() =>
                  this.setState({ isChecked: !this.state.isChecked })
                }
              />
              <Typography className={classes.termandcondition}>
                Agree Terms & Conditions
              </Typography>
            </Box>

            <Box>
              <Buttons
                disabled={
                  state.fname === "" ||
                  state.email === "" ||
                  this.state.isChecked === false ||
                  this.state.errorEmail !== "" ||
                  state.password === "" ||
                  state.confirmPassword === ""
                }
                title="Register now"
                handleClick={() => {
                  this.props.toogleDrawer(modalConstants.VERIFICATION_DRAWER);
                }}
              />
            </Box>
          </Box>
        </Box>
      </Drawers>
    );
  }
}

export default withStyles(registeredStyles)(RegisteredNowPage);
