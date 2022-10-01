import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Component } from "react";
import { yblImage } from "../../utils/data/businessdetailsandPayout/Busness.data";
import withRouter from "../../hoc/withRouter";
import { HomeState } from "../../routes/HomePage/HomePage";
import { Buttons, PayoutButton, Inputs, Drawers } from "../common";
import { payoutStyles } from "./PayoutDetails.Styles";
interface PayoutDetailsProps {
  open: boolean;
  toggleFunc: (type?: string) => void;
  navigate: any;
  classes: any;
  state: HomeState;
  handleChange: (e: any) => void;
}
interface PayoutDetailsState {
  buttonActive?: boolean;
}
class PayoutDetails extends Component<PayoutDetailsProps, PayoutDetailsState> {
  constructor(props: PayoutDetailsProps) {
    super(props);
    this.state = {
      buttonActive: false,
    };
  }

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
                <Box sx={{ mt: 3 }}>
                  <Inputs
                    handleChange={this.props.handleChange}
                    label="Account Holder Name"
                    placeholder="Steve smith"
                    name="accHoldername"
                    value={this.props.state.accHoldername}
                  />
                  <Inputs
                    handleChange={this.props.handleChange}
                    label="Account Number"
                    placeholder="798765432104441"
                    name="accNumber"
                    value={this.props.state.accNumber}
                  />
                  <Inputs
                    handleChange={this.props.handleChange}
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
                    handleChange={this.props.handleChange}
                    label="Bank Name"
                    placeholder="State banck of India"
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
                    disabled={false}
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
                    handleChange={this.props.handleChange}
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
                    disabled={false}
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
