import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import OtpInput from "react-otp-input";
interface OtpPassProps {
  id?: string;
  numberInputs: number;
  placeholder?: string;
  classNames?: string;
  label?: string;
  value?: any;
  handleChange?: (e: any) => void;
  isInputSecure?: boolean;
  error?: string;
}
interface OtpPassState {}
export default class OtpPass extends Component<OtpPassProps, OtpPassState> {
  render() {
    const {
      id,
      placeholder,
      numberInputs,
      classNames,
      label,
      handleChange,
      value,
      isInputSecure,
      error,
    } = this.props;
    return (
      <Box sx={{ mt: 2, mb: 2 }}>
        {label && (
          <Box>
            <Typography
              sx={{
                color: "#272522",
                fontSize: "17px",
                textTransform: "capitalize",
              }}
            >
              {label}
            </Typography>
          </Box>
        )}
        <Box className="passcodeParentDiv">
          <OtpInput
            data-testid={id}
            placeholder={placeholder}
            inputStyle={{
              width: "100%",
              height: "40px",
              borderRadius: "5%",
              border: "none",
              margin: "0 3px",
              fontSize: "15px",
            }}
            numInputs={numberInputs}
            className={`otp ${classNames}`}
            isInputSecure={!isInputSecure}
            onChange={(e: any) => {
              handleChange && handleChange(e);
            }}
            value={value}
          />
        </Box>
        {error && <p>{error}</p>}
      </Box>
    );
  }
}
