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
    } else {
      this.setState({
        errorEmail: "",
      });
    }
  };

  handleValidateMobileNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[7-9][0-9]{9}$/;
    const str = e.target.value;
    if (!pattern.test(str)) {
      this.setState({ error: "Mobile number is not valid" });
    } else {
      this.setState({ error: "" });
    }
  };

  handleError = () => {
    const { handleError, state } = this.props;
    if (state.fname === "") {
      handleError(true, "error", "first name should not be empty");
    } else if (state.mobileNumber === "") {
      handleError(true, "error", "please entered mobile ");
    } else if (isNaN(Number(state.mobileNumber))) {
      handleError(true, "error", "Dont entered string in number");
    } else if (this.state.error !== "") {
      handleError(true, "error", "Entered 10 digit valid mobile number");
    } else if (state.email === "") {
      handleError(true, "error", "email should not be empty");
    } else if (this.state.errorEmail !== "") {
      handleError(true, "error", this.state.errorEmail);
    } else if (state.password === "") {
      handleError(true, "error", "please enter the password");
    } else if (state.confirmPassword === "") {
      handleError(true, "error", "please enter confirm  password");
    } else if (state.errrorConfirmPassword !== "") {
      handleError(true, "error", state.errrorConfirmPassword);
    } else if (this.state.isChecked === false) {
      this.props.handleError(
        true,
        "error",
        "Please read and check the agreement button "
      );
    }
  };

  handleNavigate = () => {
    this.props.toogleDrawer(modalConstants.VERIFICATION_DRAWER);
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
                  handleChange(e);
                  this.handleValidateMobileNumber(e);
                }}
                name={"mobileNumber"}
                value={state.mobileNumber}
              />
            </Box>
            <Inputs
              label="email"
              name="email"
              handleChange={(e) => {
                handleChange(e);
                this.handleValidateEmail(e);
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
                  state.password === "" ||
                  state.confirmPassword === "" ||
                  this.state.error ||
                  this.state.errorEmail ||
                  state.errrorConfirmPassword !== ""
                    ? this.handleError()
                    : this.handleNavigate();
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
