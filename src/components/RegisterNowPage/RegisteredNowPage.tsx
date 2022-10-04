import { Box, Checkbox, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import * as React from "react";
import {
  emailImage,
  optionsStateName,
  userImage,
} from "../../utils/data/businessdetailsandPayout/Busness.data";
import { modalConstants } from "../../utils/data/constants/loginRegistration";
import { Buttons, Drawers, Inputs } from "../common";
import { navSate } from "../common/Navbar/Navbar";
import DropDownLogin from "../Login/DropDownLogin";
import { registeredStyles } from "./RegisteredNowPage.Styles";

import OtpPass from "../common/OtpPasscode/OtpPass";

interface RegisteredNowPageProps {
  open: boolean;
  toogleDrawer: (type?: string) => void;
  classes: any;
  handleChange: (e: any) => void;
  state: navSate;
  handleOnClick: () => void;
}

interface RegisteredNowPageState {}

class RegisteredNowPage extends React.Component<
  RegisteredNowPageProps,
  RegisteredNowPageState
> {
  render() {
    const { classes } = this.props;
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
              handleChange={this.props.handleChange}
              placeholder="Steve smith"
              icon={userImage}
              type="text"
            />
            <Box sx={{ mt: 2, mb: 1 }}>
              <Box>
                <Typography>Mobile No</Typography>
              </Box>
              <DropDownLogin />
            </Box>
            <Inputs
              label="email"
              name="email"
              handleChange={this.props.handleChange}
              placeholder="stevesmith@gmail.com"
              icon={emailImage}
              type="email"
            />
            <OtpPass numberInputs={6} label="password" placeholder="******" />
            <OtpPass
              numberInputs={6}
              label="confirm password"
              placeholder="******"
            />
            <Inputs
              isSelect
              label="State"
              name="state"
              options={optionsStateName}
            />
          </Box>
          <Box>
            <Box className={classes.agreementBox}>
              <Checkbox />
              <Typography className={classes.termandcondition}>
                Agree Terms & Conditions
              </Typography>
            </Box>

            <Box>
              <Buttons
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
