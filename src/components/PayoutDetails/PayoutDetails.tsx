import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Component } from "react";
import { yblImage } from "../../utils/data/businessdetailsandPayout/Busness.data";
import withRouter from "../../hoc/withRouter";
import { Buttons, PayoutButton, Inputs, Drawers } from "../common";
import { payoutStyles } from "./PayoutDetails.Styles";
import { navSate } from "../common/Navbar/Navbar";
interface PayoutDetailsProps {
  open: boolean;
  toggleFunc: (type?: string) => void;
  navigate: any;
  classes: any;
  state: navSate;
  handleChange: (e: any) => void;
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
      this.setState({ errorB: "accound number is same" });
    } else {
      this.setState({
        errorB: "",
      });
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        <Drawers
          open={this.props.open}
          toggleDrawer={() => this.props.toggleFunc("openPayout")}
        >
          <Box>
            <Box>
              <Typography className={classes.heading}>
                Payout Details
              </Typography>
            </Box>
            <Box
              sx={{ width: "90%", display: "flex", justifyContent: "center" }}
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
                <Box sx={{ mt: 3 }} className="scrollbar--hide">
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
                    error={this.state.errorA}
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
                    error={this.state.errorB}
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
                  }}
                >
                  <Buttons
                    title="save & continue"
                    disabled={
                      this.state.errorA !== "" ||
                      this.state.errorB !== "" ||
                      this.state.error !== "" ||
                      this.props.state.accHoldername === "" ||
                      this.props.state.accNumber === "" ||
                      this.props.state.bankname === "" ||
                      this.props.state.confirmaccNumber === ""
                    }
                    handleClick={() => {}}
                  />
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ mt: 5 }}>
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
                    error={this.state.error}
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
                  }}
                >
                  <Buttons
                    title="save & continue"
                    disabled={
                      this.props.state.upiAddress === "" ||
                      this.state.error !== ""
                    }
                    handleClick={() => {}}
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
