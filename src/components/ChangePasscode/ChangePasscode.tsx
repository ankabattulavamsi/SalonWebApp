import {
  Button,
  Container,
  Dialog,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import OtpInput from "react-otp-input";
import CloseIcon from "@mui/icons-material/Close";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { ChangeProfileDetails } from "./ChangePassCode.Style";
import { withStyles } from "@mui/styles";

import './ChangePassCode.css'

interface ChangeCodeProps {
  classes: any;
  open: boolean;
  onCloseChangeModel: () => void
}

class ChangePasscode extends Component<ChangeCodeProps> {
  state = {
    oldPassword: "",
    password: "",
    confirmPassword: "",
  };

  handleChangeOldPassword = (OldPassword: any) => {
    this.setState({ oldPassword: OldPassword });
  };

  handleChangePassword = (password: any) => {
    this.setState({ password });
  };

  confirmPassChangehandle = (password: any) => {
    this.setState({ confirmPassword: password });
    if (password !== this.state.password) {
      this.setState({
        errrorConfirmPassword:
          "please password and confirm password is not matched",
      });
    } else {
      this.setState({
        errrorConfirmPassword: "",
      });
    }
  };

  handleNavigate = () => {
    this.setState({
      oldPassword: '',
      password: "",
      confirmPassword: "",
    });
    this.props.onCloseChangeModel()
  };

  registeredSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .min(1, "Too Short!")
      .max(50, "Too Long!")
      .required("Please fill this field old password"),

    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please fill this field password"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "New Passcode & Confirm Passcode Don't Match ")
      .required("Please fill this field password"),
  });

  render() {
    const {classes, open, onCloseChangeModel} = this.props
    return (
      <Container >
        <Dialog
          open={open}
          onClose={onCloseChangeModel}
          className="dialog-box-change"
        >
          <Box
            sx={{
              bgcolor: "transparent",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
              position: "relative",
              height: "3rem",
              background: "transparent",
            }}
            className={classes.ClosedIconOfCode}
          >
            <IconButton
              aria-label="close"
              onClick={onCloseChangeModel}
              sx={{
                position: "absolute",
                right: 0,
                top: "-10%",
                color: "#fff",
              }}
            >
              <CloseIcon style={{ width: "36px" }} />
            </IconButton>
          </Box>
          <Divider />
          <Box sx={{ backgroundColor: "#fff" }}>
            <Box sx={{ p: 2, m: 2 }}>
              <Typography
                sx={{
                  fontFamily: "Fira Sans",
                  fontStyle: " normal",
                  fontWeight: 700,
                  fontSize: {xs: "18px", md: "24px", lg: "28px"},
                  lineHeight: "48px",
                }}
              >
                Change Your Passcode
              </Typography>
              <Formik
                enableReinitialize={true}
                initialValues={{
                  oldPassword: this.state.oldPassword,
                  password: this.state.password,
                  confirmPassword: this.state.confirmPassword,
                }}
                validationSchema={this.registeredSchema}
                onSubmit={(values) => {
                  this.handleNavigate();
                }}
              >
                <Form>
                  <Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "#272522",
                          fontSize: "17px",
                          textTransform: "capitalize",
                        }}
                      >
                        Old Password
                      </Typography>
                    </Box>
                    <OtpInput
                      value={this.state.oldPassword}
                      onChange={this.handleChangeOldPassword}
                      numInputs={6}
                      placeholder="******"
                      isInputSecure
                      inputStyle={{
                        width: "50px",
                        height: "40px",
                        borderRadius: "5%",
                        border: "none",
                        margin: "0 3px",
                        fontSize: "15px",
                        backgroundColor: "#f0f0f0",
                        marginBottom: "5px",
                      }}
                    />
                    <ErrorMessage
                      component={"p"}
                      className="error-message"
                      name="oldPassword"
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: "#272522",
                        fontSize: "17px",
                        textTransform: "capitalize",
                      }}
                    >
                      New Password
                    </Typography>
                    <OtpInput
                      value={this.state.password}
                      onChange={this.handleChangePassword}
                      numInputs={6}
                      placeholder="******"
                      isInputSecure
                      inputStyle={{
                        width: "50px",
                        height: "40px",
                        borderRadius: "5%",
                        border: "none",
                        margin: "0 3px",
                        fontSize: "15px",
                        backgroundColor: "#f0f0f0",
                        marginBottom: "5px",
                      }}
                    />
                    <ErrorMessage
                      component={"p"}
                      className="error-message"
                      name="password"
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: "#272522",
                        fontSize: "17px",
                        textTransform: "capitalize",
                      }}
                    >
                      Conform Password
                    </Typography>
                    <OtpInput
                      value={this.state.confirmPassword}
                      onChange={this.confirmPassChangehandle}
                      numInputs={6}
                      placeholder="******"
                      isInputSecure
                      inputStyle={{
                        width: "50px",
                        height: "40px",
                        borderRadius: "5%",
                        border: "none",
                        margin: "0 3px",
                        fontSize: "15px",
                        backgroundColor: "#f0f0f0",
                       type: 'password'
                      }}
                    />
                    <ErrorMessage
                      component={"p"}
                      className="error-message"
                      name="confirmPassword"
                    />
                  </Box>

                  <Box sx={{ mt: 2, backgroundColor: "#E7A356" }}>
                    <Button
                      type="submit"
                      style={{
                        backgroundColor: "#E7A356",
                        color: "#fff",
                        borderRadius: "5px",
                        textAlign: "center",
                        fontFamily: "Fira Sans",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "20px",
                        letterSpacing: "0.02em",
                        textTransform: "uppercase",
                      }}
                      fullWidth
                    >
                      Change Passcode
                    </Button>
                  </Box>
                </Form>
              </Formik>
            </Box>
          </Box>
        </Dialog>
      </Container>
    );
  }
}

export default withStyles(ChangeProfileDetails)(ChangePasscode);
