import React, { Component } from "react";
import {
  Divider,
  FormControl,
  MenuItem,
  TextField,
  Typography,
  Box,
  Select,
} from "@mui/material";
import flag from "../../../assets/images/Login/flag.png";
import PhoneIcon from "@mui/icons-material/Phone";
import { ErrorMessage } from "formik";
interface DropDownLoginProps {
  name: string;
  value?: string;
  error?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface DropDownLoginState {}
class DropDownLogin extends Component<DropDownLoginProps, DropDownLoginState> {
  state = {
    selected: 10,
    error: "",
  };

  render() {
    const { handleChange, name, value } = this.props;

    return (
      <Box>
        <Box className="mobileNoChildBox1">
          <Box sx={{ maxWidth: 120 }}>
            <FormControl sx={{ m: 1, minWidth: 85 }}>
              <Select
                className="bgColor"
                value={this.state.selected}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                variant="standard"
                disableUnderline={true}
              >
                <MenuItem selected={true} value={10}>
                  <Box
                    sx={{
                      display: "flex",
                      border: "none",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      className="india"
                      src={flag}
                      width="20px"
                      height="15px"
                      alt="India"
                    />
                    <Typography className="mobileNoChildBox2Typography">
                      +91
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem value={20}>
                  <Box sx={{ display: "flex", border: "none" }}>
                    <img
                      className="india"
                      src={flag}
                      width="20px"
                      height="15px"
                      alt="India"
                    />
                    <Typography className="mobileNoChildBox2Typography">
                      +91
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem value={30}>
                  <Box sx={{ display: "flex", border: "none" }}>
                    <img
                      className="india"
                      src={flag}
                      width="20px"
                      height="15px"
                      alt="India"
                    />
                    <Typography className="mobileNoChildBox2Typography">
                      +91
                    </Typography>
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider orientation="vertical" flexItem className="divider" />
          <Box
            className="text-phone"
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginLeft: "25px",
            }}
          >
            <Box className="mobileNoChildBox3">
              <TextField
                value={value}
                className="textField"
                select={false}
                name={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange && handleChange(e);
                }}
                variant="standard"
                placeholder="Phone Number"
                type="tel"
                required
                InputProps={{
                  disableUnderline: true,
                }}
              ></TextField>
            </Box>
            <Box className="childBox4">
              <PhoneIcon className="phoneIcon" />
            </Box>
          </Box>
        </Box>
        <ErrorMessage component={"p"} className={"error-message"} name={name} />
        {/* {error && (
          <Box>
            <FormHelperText className="error-message">{error}</FormHelperText>
          </Box>
        )} */}
      </Box>
    );
  }
}

export default DropDownLogin;
