import { Typography, Box, AlertColor } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import {
  optionsBankName,
  yblImage,
} from "../../utils/data/businessdetailsandPayout/Busness.data";
import withRouter from "../../hoc/withRouter";
import { Buttons, PayoutButton, Inputs, Drawers } from "../common";
import { payoutStyles } from "./PayoutDetails.Styles";
import { navSate } from "../common/Navbar/Navbar";
import { modalConstants } from "../../utils/data/constants/loginRegistration";
interface PayoutDetailsProps {
  open: boolean;
  toggleFunc: (type?: string) => void;
  navigate: any;
  classes: any;
  state: navSate;
  handleChange: (e: any) => void;
  handleError: (open: boolean, type: AlertColor, message: string) => void;
}
interface PayoutDetailsState {
  buttonActive?: boolean;
  error: string;
  errorA: string;
  errorB: string;
}
class PayoutDetails extends Component<PayoutDetailsProps, PayoutDetailsState> {
  constructor(props: PayoutDetailsProps) {
    super(props);
    this.state = {
      buttonActive: false,
      error: "",
      errorA: "",
      errorB: "",
    };
  }

  handleValidateUpi = (e: any) => {
    let pattern = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;
    const str = e.target.value;
    if (!pattern.test(str)) {
      this.setState({ error: "upi is not valid" });
    } else {
      this.setState({ error: "" });
    }
  };

  handleValidateAccNumber = (e: any) => {
    let pattern = /^\d{9,18}$/;
    const str = e.target.value;
    if (!pattern.test(str)) {
      this.setState({ errorA: "accound number is not valid" });
    } else {
      this.setState({ errorA: "" });
    }
  };

  handleConfirmAccNumber = (e: any) => {
    if (this.props.state.accNumber !== e.target.value) {
      this.setState({ errorB: "accound number is must be  same" });
    } else {
      this.setState({
        errorB: "",
      });
    }
  };

  handleError = () => {
    const { state, handleError } = this.props;
    if (state.accHoldername === "") {
      handleError(
        true,
        "error",
        "please add account holder name as per your bank"
      );
    } else if (state.accNumber === "" || this.state.errorA) {
      handleError(
        true,
        "error",
        "please add account number atleast 9 and atmost 13 digits"
      );
    } else if (state.confirmaccNumber === "" || this.state.errorB) {
      handleError(
        true,
        "error",
        "Your account number and confirm account number must be same"
      );
    } else if (this.props.state.ifscCode === "") {
      handleError(true, "error", "Please enter ifsc code as per bank");
    } else if (state.bankname === "") {
      handleError(true, "error", "Please select bank name from list");
    }
  };
  handleNavigate = () => {
    this.props.navigate("/salon");
    this.props.toggleFunc(modalConstants.PAYOUT_DRAWER);
  };

  handleErrorUpi = () => {
    if (this.props.state.upiAddress === "" || this.state.error) {
      this.props.handleError(
        true,
        "error",
        "Please give the proper upi adress as per your bank"
      );
    }
  };
  render() {
    const { classes, toggleFunc } = this.props;
    return (
      <>
        <Drawers
          open={this.props.open}
          toggleDrawer={() => toggleFunc(modalConstants.PAYOUT_DRAWER)}
        >
          <Box>
            <Box>
              <Typography className={classes.heading}>
                Payout Details
              </Typography>
            </Box>
            <Box
              sx={{
                width: "90%",
                mx: "auto",
                display: "flex",
                justifyContent: "center",
              }}
              className={classes.handleBorder}
            >
              <Box
                sx={{
                  width: "50%",
                }}
              >
                <PayoutButton
                  title="Bank Details"
                  active={!this.state.buttonActive}
                  handleClick={() => {
                    this.setState({ buttonActive: false });
                  }}
                  className={classes.borderLeft}
                />
              </Box>
              <Box
                sx={{
                  width: "50%",
                }}
              >
                <PayoutButton
                  handleClick={() => {
                    this.setState({ buttonActive: true });
                  }}
                  title="UPI"
                  active={this.state.buttonActive}
                  className={classes.borderRight}
                />
              </Box>
            </Box>
            {!this.state.buttonActive ? (
              <>
                <Box
                  sx={{ mt: 2, width: "90%", mx: "auto" }}
                  className="scrollbar--hide"
                >
                  <Inputs
                    handleChange={this.props.handleChange}
                    label="Account Holder Name"
                    placeholder="Steve smith"
                    name="accHoldername"
                    value={this.props.state.accHoldername}
                  />
                  <Inputs
                    handleChange={(e) => {
                      this.handleValidateAccNumber(e);
                      this.props.handleChange(e);
                    }}
                    label="Account Number"
                    placeholder="798765432104441"
                    name="accNumber"
                    value={this.props.state.accNumber}
                  />
                  <Inputs
                    handleChange={(e: any) => {
                      this.handleConfirmAccNumber(e);
                      this.props.handleChange(e);
                    }}
                    label="Confirm Account Number"
                    placeholder="798765432104441"
                    name="confirmaccNumber"
                    value={this.props.state.confirmaccNumber}
                  />
                  <Inputs
                    handleChange={this.props.handleChange}
                    label="IFSC Code"
                    placeholder="SBIN0000432"
                    name="ifscCode"
                    value={this.props.state.ifscCode}
                  />
                  <Inputs
                    handleChange={(e) => {
                      this.props.handleChange(e);
                    }}
                    label="Bank Name"
                    placeholder="State bank of India"
                    name="bankname"
                    value={this.props.state.bankname}
                    isSelect={true}
                    options={optionsBankName}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    width: "90%",
                    ml: 0.5,
                    mb: 2,
                    mx: "auto",
                  }}
                >
                  <Buttons
                    title="save & continue"
                    handleClick={() => {
                      this.state.errorA !== "" ||
                      this.state.errorB !== "" ||
                      this.state.error !== "" ||
                      this.props.state.accHoldername === "" ||
                      this.props.state.accNumber === "" ||
                      this.props.state.bankname === "" ||
                      this.props.state.confirmaccNumber === "" ||
                      this.props.state.ifscCode === ""
                        ? this.handleError()
                        : this.handleNavigate();
                    }}
                  />
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ mt: 2, width: "90%", mx: "auto" }}>
                  <Inputs
                    type="text"
                    name="upiAddress"
                    value={this.props.state.upiAddress}
                    label="UPI"
                    placeholder="1234567890"
                    icon={yblImage}
                    handleChange={(e) => {
                      this.handleValidateUpi(e);
                      this.props.handleChange(e);
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    width: "90%",
                    ml: 0.5,
                    mb: 2,
                    mx: "auto",
                  }}
                >
                  <Buttons
                    title="save & continue"
                    handleClick={() => {
                      this.props.state.upiAddress === "" ||
                      this.state.error !== ""
                        ? this.handleErrorUpi()
                        : this.handleNavigate();
                    }}
                  />
                </Box>
              </>
            )}
          </Box>
        </Drawers>
        )
      </>
    );
  }
}

export default withStyles(payoutStyles)(withRouter(PayoutDetails));
