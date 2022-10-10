import * as React from "react";
import { AlertColor, Box, Checkbox, Typography } from "@mui/material";
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
  handleError: (open: boolean, type: AlertColor, message: string) => void;
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
      this.props.handleError(true, "error", "Email is not valid");
    } else {
      this.setState({ errorEmail: "" });
      this.props.handleError(true, "success", "Email is  valid");
    }
  };

  handleValidateMobileNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[7-9][0-9]{9}$/;
    const str = e.target.value;
    if (!pattern.test(str)) {
      this.setState({ error: "Mobile Number is not valid" });
    } else {
      this.setState({ error: "" });
    }
  };
  handleError = () => {};
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
              value={state.city}
              isSelect
              label="State"
              name="city"
              options={optionsStateName}
              handleChange={handleChange}
            />
          </Box>
          <Box>
            <Box className={classes.agreementBox}>
              <Checkbox
                color={this.state.isChecked ? "success" : "default"}
                value={this.state.isChecked}
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
                disabled={false}
                title="Register now"
                handleClick={() => {
                  state.fname === "" ||
                  state.email === "" ||
                  this.state.isChecked === false ||
                  this.state.errorEmail !== "" ||
                  state.password === "" ||
                  state.confirmPassword === "" ||
                  state.errorPass !== ""
                    ? this.handleError()
                    : this.props.toogleDrawer(
                        modalConstants.VERIFICATION_DRAWER
                      );
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
