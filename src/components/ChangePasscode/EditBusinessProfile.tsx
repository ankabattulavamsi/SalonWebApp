import { Button, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Component } from "react";
import { BusinessStyles } from "../BuisnessDetail/BuisnessDetailsStyle";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Buttons, Drawers, Inputs } from "../common";
import { Form, Formik } from "formik";
import * as Yup from 'yup'
import editImg from '../../assets/images/BuesnessProfile/Vector.png'
import Eliipe from '../../assets/images/BuesnessProfile/Ellipse 9.png'

import './ChangePassCode.css'

interface EditProfileProps {
  classes: any;
}

interface EditProfileStateProps {
    open: boolean
}

const editProfileData = [
    {
        businessName: '', 
        ownerName: '', 
        gstNum: '',
        email: 'abc@gmail.com'
    }
]

export class EditBusinessProfile extends Component<EditProfileProps> {

    state:EditProfileStateProps = {
        open: true
    }

    businessEditSchema = Yup.object().shape({
        // image: Yup.string().required("image is "),
        bname: Yup.string()
          .required("buseness name should not be empty")
          .min(2, "busness name is too short")
          .max(50, "too long"),
        owner: Yup.string()
          .required("owner name should not be empty")
          .min(2, "owner name is too short")
          .max(50, "too long"),
        GSTIN: Yup.string()
          .required("GSTIN number should not be empty")
          .min(5, "GSTIN number is too short")
          .max(13, "GSTIN number is  too long"),
    
        address: Yup.string()
          .required("adress should not be empty")
          .min(2, "address is too short")
          .max(100, "GSTIN number is  too long"),
        email: Yup.string()
          .email("Invalid email")
          .required("Please fill this field email"),
      });

  render() {
    const { classes } = this.props;
    return (
      <Drawers
        open={this.state.open}
        toggleDrawer={() => this.setState({open: false})}
      >
        <Box>
          <Typography variant="h5" className={classes.busText}>
            Edit Business Profile
          </Typography>
        </Box>

        <Formik
          enableReinitialize={true}
          initialValues={
            {
              //   image: state.image,
              // bname: this.state.bname,
              //   owner: state.owner,
              //   GSTIN: state.GSTIN,
              //   email: state.email,
              //   address: state.address,
            }
          }
          validationSchema={this.businessEditSchema}
          onSubmit={() => {}}
        >
          <Form>
            <>
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
                    <img className="img-profile" src={Eliipe} alt="imag" />
                  </Box>
                </Box>

                <Box width={"auto"}>
                  <Box>
                    <Typography
                      variant="h4"
                      className={classes.profilelabelText}
                    >
                      Upload Profile Picture
                    </Typography>
                    <Box className={classes.boxinput}>
                      <input
                        accept="image/*"
                        className={"inputHide"}
                        // onChange={this.props.handleImageChange}
                        type="file"
                        name="image"
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
                  placeholder={"enter Business name"}
                  required={true}
                  type={"text"}
                  //   handleChange={(e) => this.props.handleChange(e)}
                  //   value={this.props.state.bname}
                  icon={editImg}
                  name={"bname"}
                />
                <Inputs
                  label={"Owner name"}
                  id={`${2}`}
                  placeholder={"enter owner name"}
                  required={true}
                  type={"text"}
                  //   handleChange={(e) => this.props.handleChange(e)}
                  //   value={this.props.state.owner}
                  icon={editImg}
                  name={"owner"}
                />
                
                <Inputs
                  label={"GSTIN No"}
                  id={`${4}`}
                  placeholder="enter GSTIN no"
                  required={true}
                  type={"text"}
                  //   handleChange={(e) => this.props.handleChange(e)}
                  //   value={this.props.state.GSTIN}
                  icon={editImg}
                  name={"GSTIN"}
                />
                <Inputs
                  label={"Email"}
                  id={`${5}`}
                  placeholder="enter email"
                  required={true}
                  type={"email"}
                  handleChange={() => {
                    // this.props.handleChange(e);
                  }}
                  //   value={this.props.state.email}
                  icon={editImg}
                  name={"email"}
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
                  title="Save Profile"
                  type="submit"
                  handleClick={() => {}}
                />
              </Box>
            </>
          </Form>
        </Formik>
      </Drawers>
    );
  }
}

export default withStyles(BusinessStyles)(EditBusinessProfile);
