import { AlertColor, Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";
import { BusinessStyles } from "./BuisnessDetailsStyle";
import { withStyles } from "@mui/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./BuisnessDetails.css";
import {
  emailImage,
  locationImage,
  noteImage,
  profilesImage,
  storeImage,
  userImage,
} from "../../utils/data/businessdetailsandPayout/Busness.data";

import { Buttons, Drawers, Inputs } from "../common";
import { navSate } from "../common/Navbar/Navbar";

interface BuisnessDetailsProps {
  handleToggleDrawer: () => void;
  open: boolean;
  classes: any;
  handleChange: (e: any) => void;
  handleImageChange: (e: any) => void;
  state: navSate;
  handleClickSave: () => void;
  handleError: (open: boolean, type: AlertColor, message: string) => void;
}
interface BuisnessDetailsState {
  error: string;
}

class BuisnessDetails extends Component<
  BuisnessDetailsProps,
  BuisnessDetailsState
> {
  constructor(props: BuisnessDetailsProps) {
    super(props);
    this.state = {
      error: "",
    };
  }

  handleValidateEmail = (e: any) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const str = e.target.value;

    if (!pattern.test(str)) {
      this.setState({ error: "please enter valid email" });
    } else {
      this.setState({ error: "" });
    }
  };

  handleError = () => {
    //   this.state.error !== "" ||
    // this.props.state.email === "" ||
    // this.props.state.GSTIN === "" ||
    // this.props.state.address === "" ||
    // this.props.state.bname === "" ||
    // this.props.state.owner === ""

    const { state, handleError } = this.props;

    // if(state.)

    if (state.bname === "" || state.bname.length < 5) {
      handleError(
        true,
        "error",
        "Please enter buesness name atleast 4 or 5 character"
      );
    } else if (state.owner === "") {
      handleError(true, "error", "owner name is required");
    } else if (state.GSTIN === "") {
      handleError(true, "error", "GSTIN number  is required");
    } else if (state.address === "") {
      handleError(true, "error", "please give proper adress");
    } else if (state.email === "" || this.state.error) {
      handleError(true, "error", this.state.error);
    } else if (state.image === "") {
      handleError(true, "error", "profile image is required");
    } else {
      handleError(true, "error", "something is wrong");
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Box>
        <Drawers
          open={this.props.open}
          toggleDrawer={() => this.props.handleToggleDrawer()}
        >
          <Box>
            <Typography variant="h5" className={classes.busText}>
              Business Details
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "flex-start",
              gap: 2,
              width: "90%",
              mx: "auto",
            }}
          >
            <Box width={"30%"}>
              <Box
                sx={{
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "flex-end",
                  flex: 1,
                }}
              >
                <img
                  className="img-profile"
                  src={
                    this.props.state.image
                      ? this.props.state.image
                      : profilesImage
                  }
                  alt="imag"
                />
              </Box>
            </Box>

            <Box width={"auto"}>
              <Box>
                <Typography variant="h4" className={classes.profilelabelText}>
                  Upload Profile Picture
                </Typography>
                <Box className={classes.boxinput}>
                  <input
                    accept="image/*"
                    className={"inputHide"}
                    onChange={this.props.handleImageChange}
                    type="file"
                  />
                  <Button className={classes.btnCloud}>
                    <CloudUploadIcon fontSize="large" />
                    <span>Browse</span>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 1, width: "90%", mx: "auto" }}>
            <Inputs
              label={"Business name"}
              id={`${1}`}
              placeholder={"Beauty salon shop"}
              required={true}
              type={"text"}
              handleChange={(e) => this.props.handleChange(e)}
              value={this.props.state.bname}
              icon={storeImage}
              name={"bname"}
            />
            <Inputs
              label={"Owner name"}
              id={`${2}`}
              placeholder={"Steve Smith"}
              required={true}
              type={"text"}
              handleChange={(e) => this.props.handleChange(e)}
              value={this.props.state.owner}
              icon={userImage}
              name={"owner"}
            />
            <Inputs
              label={"Address"}
              id={`${3}`}
              placeholder="121 KING STREET Eddy street and Gough  street, San Francisco, CA 94109"
              required={true}
              type={"textarea"}
              handleChange={(e) => this.props.handleChange(e)}
              value={this.props.state.address}
              icon={locationImage}
              name={"address"}
            />

            <Inputs
              label={"GSTIN No"}
              id={`${4}`}
              placeholder="Example123"
              required={true}
              type={"text"}
              handleChange={(e) => this.props.handleChange(e)}
              value={this.props.state.GSTIN}
              icon={noteImage}
              name={"GSTIN"}
            />
            <Inputs
              label={"Email"}
              id={`${5}`}
              placeholder="stevesmithexample@gmail.com"
              required={true}
              type={"email"}
              handleChange={(e) => {
                this.handleValidateEmail(e);
                this.props.handleChange(e);
              }}
              value={this.props.state.email}
              icon={emailImage}
              name={"email"}
              error={this.state.error}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              ml: 0.5,
              mb: 2,
              mt: 1,
              width: "90%",
              mx: "auto",
            }}
          >
            <Buttons
              title="save & continue"
              handleClick={() => {
                this.state.error !== "" ||
                this.props.state.email === "" ||
                this.props.state.GSTIN === "" ||
                this.props.state.address === "" ||
                this.props.state.owner === "" ||
                this.props.state.image === ""
                  ? this.handleError()
                  : this.props.handleClickSave();
              }}
            />
          </Box>
        </Drawers>
      </Box>
    );
  }
}

export default withStyles(BusinessStyles)(BuisnessDetails);
