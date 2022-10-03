import { Box, Button, Typography } from "@mui/material";
import { Component } from "react";
import { BusinessStyles } from "./BuisnessDetailsStyle";
import { withStyles } from "@mui/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import "./BuisnessDetails.css";
import {
  emailImage,
  locationImage,
  noteImage,
  profileImage,
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
      this.setState({ error: "Email is not valid" });
    } else {
      this.setState({ error: "" });
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
                      : profileImage
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
          <Box sx={{ mt: 1 }}>
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
              type={"text"}
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
              width: "90%",
              ml: 0.5,
              mb: 2,
            }}
          >
            <Buttons
              title="save & continue"
              disabled={
                this.state.error !== "" ||
                this.props.state.email === "" ||
                this.props.state.GSTIN === "" ||
                this.props.state.address === "" ||
                this.props.state.bname === "" ||
                this.props.state.owner === ""
              }
              handleClick={() => {
                this.props.handleClickSave();
              }}
            />
          </Box>
        </Drawers>
      </Box>
    );
  }
}

export default withStyles(BusinessStyles)(BuisnessDetails);
