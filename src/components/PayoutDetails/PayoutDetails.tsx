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
import { Form, Formik } from "formik";
import * as Yup from "yup";
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
  // error: string;
  // errorA: string;
  // errorB: string;
}
class PayoutDetails extends Component<PayoutDetailsProps, PayoutDetailsState> {
  constructor(props: PayoutDetailsProps) {
    super(props);
    this.state = {
      buttonActive: false,
      // error: "",
      // errorA: "",
      // errorB: "",
    };
  }

  // handleValidateUpi = (e: any) => {
  //   let pattern = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;
  //   const str = e.target.value;
  //   if (!pattern.test(str)) {
  //     this.setState({ error: "upi is not valid" });
  //   } else {
  //     this.setState({ error: "" });
  //   }
  // };

  // handleValidateAccNumber = (e: any) => {
  //   let pattern = /^\d{9,18}$/;
  //   const str = e.target.value;
  //   if (!pattern.test(str)) {
  //     this.setState({ errorA: "accound number is not valid" });
  //   } else {
  //     this.setState({ errorA: "" });
  //   }
  // };

  // handleConfirmAccNumber = (e: any) => {
  //   if (this.props.state.accNumber !== e.target.value) {
  //     this.setState({ errorB: "accound number is must be  same" });
  //   } else {
  //     this.setState({
  //       errorB: "",
  //     });
  //   }
  // };

  handleNavigate = () => {
    this.props.navigate("/salon");
    this.props.toggleFunc(modalConstants.PAYOUT_DRAWER);
  };
  paymentSchema = Yup.object().shape({
    accHoldername: Yup.string().required(
      "This field is Required account holder name"
    ),
    accNumber: Yup.string()
      .matches(/^\d{9,18}$/, "account number is not valid")
      .required("This field is Required account number"),
    confirmaccNumber: Yup.string()
      .oneOf([Yup.ref("accNumber"), null], "account number must be match")
      .required("This field is Required confirm account number"),
    ifscCode: Yup.string()
      .min(9, "min 9 character required")
      .max(13, "maximum 13 character required")
      .required("This field is Required ifsc code"),
    bankname: Yup.string().required("please select bank name from list"),
  });

  upiAddressSchema = Yup.object().shape({
    // /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/
    upiAddress: Yup.string()
      .matches(
        /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/,
        "upi adress is not valid"
      )
      .required("This field is Required upi address"),
  });
  render() {
    const { classes, toggleFunc, state } = this.props;
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
                <Formik
                  enableReinitialize={true}
                  validationSchema={this.paymentSchema}
                  initialValues={{
                    accHoldername: state.accHoldername,
                    accNumber: state.accNumber,
                    confirmaccNumber: state.confirmaccNumber,
                    ifscCode: state.ifscCode,
                    bankname: state.bankname,
                  }}
                  onSubmit={() => {
                    this.handleNavigate();
                  }}
                >
                  <Form>
                    <Box
                      sx={{ mt: 2, width: "90%", mx: "auto" }}
                      className="scrollbar--hide"
                    >
                      <Inputs
                        handleChange={this.props.handleChange}
                        label="Account Holder Name"
                        placeholder="enter account holder name"
                        name="accHoldername"
                        value={state.accHoldername}
                      />
                      <Inputs
                        handleChange={(e) => {
                          this.props.handleChange(e);
                        }}
                        label="Account Number"
                        placeholder="account number"
                        name="accNumber"
                        value={state.accNumber}
                      />
                      <Inputs
                        handleChange={(e: any) => {
                          this.props.handleChange(e);
                        }}
                        label="Confirm Account Number"
                        placeholder="confirm account number"
                        name="confirmaccNumber"
                        value={state.confirmaccNumber}
                      />
                      <Inputs
                        handleChange={this.props.handleChange}
                        label="IFSC Code"
                        placeholder="Enter IFSC code"
                        name="ifscCode"
                        value={state.ifscCode}
                      />
                      <Inputs
                        handleChange={(e) => {
                          this.props.handleChange(e);
                        }}
                        label="Bank Name"
                        placeholder="select bank from list"
                        name="bankname"
                        value={state.bankname}
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
                        type="submit"
                        title="save & continue"
                        handleClick={() => {}}
                      />
                    </Box>
                  </Form>
                </Formik>
              </>
            ) : (
              <Box>
                <Formik
                  enableReinitialize={true}
                  initialValues={{
                    upiAddress: this.props.state.upiAddress,
                  }}
                  validationSchema={this.upiAddressSchema}
                  onSubmit={() => {
                    this.handleNavigate();
                  }}
                >
                  <Form>
                    <Box sx={{ mt: 2, width: "90%", mx: "auto" }}>
                      <Inputs
                        type="text"
                        name="upiAddress"
                        value={this.props.state.upiAddress}
                        label="UPI"
                        placeholder="Enter Upi address"
                        icon={yblImage}
                        handleChange={(e) => {
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
                        type="submit"
                        title="save & continue"
                        handleClick={() => {}}
                      />
                    </Box>
                  </Form>
                </Formik>
              </Box>
            )}
          </Box>
        </Drawers>
        )
      </>
    );
  }
}

export default withStyles(payoutStyles)(withRouter(PayoutDetails));
