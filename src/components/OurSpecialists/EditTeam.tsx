/** @format */
import React, { Component } from "react";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Grid,
  Typography,
  Container,
  IconButton,
  Divider,
  Badge,
} from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import member from "../../assets/images/expertTeamSection/member1.png";
import { Stack } from "@mui/system";
import { withStyles } from "@mui/styles";
import ClassIcon from "@mui/icons-material/Class";
import CloseIcon from "@mui/icons-material/Close";
import { StylesOffers } from "../OffersSection/BestOffers.styles";
interface IProps {
  open: boolean;
  onClose: any;
  classes: any;
}

class EditTeam extends Component<IProps> {
  render() {
    const { onClose, open, classes } = this.props;

    return (
      <Container>
        <Dialog
          onClose={onClose}
          disableScrollLock={true}
          open={open}
          maxWidth="md"
          className="offers-dialog-box"
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
            className="best-offers-close-container"
          >
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: "absolute",
                right: -10,
                top: "-10%",
                color: "#fff",
              }}
            >
              <CloseIcon sx={{ color: "#fff", fontSize: "30px" }} />
            </IconButton>
          </Box>
          <Divider />
          <Box sx={{ p: 3, backgroundColor: "#fff" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={6} lg={6}>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                  <Box sx={{ postion: "relative", mt: 1 }}>
                    <Box
                      sx={{
                        postion: "relative",
                        width: { md: "350px", xs: "100%" },
                        mx: "auto",
                        height: "270px",
                      }}
                    >
                      {member === "" && member === "" ? (
                        <>
                          <Box sx={{ position: "relative" }}>
                            <input
                              name={"image"}
                              id="image"
                              accept="*"
                              type="file"
                              // onChange={(e) => handleOnChangeImage(e)}
                              style={{
                                opacity: 0,
                                position: "relative",
                                width: "100%",
                                height: "289px",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                zIndex: 1,
                              }}
                            />
                            {/* <ErrorMessage name="image" /> */}
                            <Box
                              sx={{
                                bgcolor: "#f0f0f0",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                padding: "32px 40px",
                                height: "100%",
                                width: "100%",
                                borderRadius: "4px 4px 0px 0px",
                              }}
                            >
                              <Box
                                sx={{
                                  border: "2px dashed #A4A1A1",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  height: "100%",
                                  width: "100%",
                                  flexDirection: "column",
                                }}
                              >
                                <Box>
                                  <img
                                    src={member}
                                    style={{
                                      width: "64px",
                                      height: "64px",
                                      objectFit: "contain",
                                    }}
                                    alt="images"
                                  />
                                </Box>
                                <Box>
                                  <Typography
                                    component={"h5"}
                                    sx={{
                                      fontSize: {
                                        xs: "16px",
                                        md: "18px",
                                        lg: "20px",
                                      },
                                      color: "#272522",
                                      fontWeight: "600",
                                      textTransform: "capitalize",
                                      textAlign: "center",
                                    }}
                                  >
                                    Upload Offers Image
                                  </Typography>
                                </Box>
                                <Box>
                                  <Typography
                                    sx={{
                                      fontSize: {
                                        xs: "10px",
                                        sm: "12px",
                                        md: "14px",
                                        lg: "16px",
                                      },
                                      color: "#A4A1A1",
                                      fontWeight: "500",
                                      textTransform: "lowercase",
                                      textAlign: "center",
                                    }}
                                  >
                                    Supported files PNG, JPEG, SVG, wEBP
                                  </Typography>{" "}
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </>
                      ) : member ? (
                        <img
                          src={member}
                          alt="{item.title}"
                          style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "90%",
                          }}
                        />
                      ) : (
                        <img
                          src={member}
                          alt="{title}"
                          style={{
                            objectFit: "cover",
                            width: "90%",
                            height: "90%",
                          }}
                        />
                      )}
                    </Box>

                    <Box
                      marginTop={3}
                      display={"flex"}
                      justifyContent={"flex-start"}
                      gap={2}
                      flexWrap="wrap"
                    >
                      <Box width={"120px"} height="50%">
                        <>
                          {member === "" && member === "" ? (
                            <>
                              {/* <Box bgcolor={"#f0f0f0"} padding={"10px 9px"}>
                              <Box p={"9px 13px "}>
                                <Icon
                                  sx={{ color: "#A4A1A1", fontSize: "80px" }}
                                >
                                  +
                                </Icon>
                              </Box>
                            </Box> */}
                            </>
                          ) : member !== "" ? (
                            <Badge
                              color="secondary"
                              badgeContent={
                                <CloseIcon
                                  // onClick={onClicOfCloseBadge}
                                  sx={{
                                    bgcolor: "#272727",
                                    color: "#fff",
                                    borderRadius: "50%",
                                    fontSize: "1rem",
                                  }}
                                />
                              }
                            >
                              <img
                                src={member && member}
                                alt="fesdga "
                                style={{
                                  objectFit: "contain",
                                  width: "120px",
                                  height: "80px",
                                }}
                              />
                            </Badge>
                          ) : (
                            <Badge
                              color="secondary"
                              badgeContent={
                                <CloseIcon
                                  // onClick={onClicOfCloseBadge}
                                  sx={{
                                    bgcolor: "#272727",
                                    color: "#fff",
                                    borderRadius: "50%",
                                    fontSize: "1rem",
                                  }}
                                />
                              }
                            >
                              <img
                                src={member}
                                alt=""
                                style={{
                                  objectFit: "contain",
                                  width: "100%",
                                  height: "50px",
                                }}
                              />
                            </Badge>
                          )}
                        </>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} sm={6} lg={6}>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      sx={{
                        color: "#272522",
                        fontSize: "17px",
                        fontFamily: "Roboto",
                        fontWeight: "500",
                        lineHeight: "30px",
                      }}
                    >
                      Name of Specialist
                    </Typography>
                    <TextField
                      fullWidth
                      variant="standard"
                      InputProps={{ disableUnderline: true }}
                      // value={editOfferTitle}
                      // onChange={this.props.onChangeeditOfferTitle}
                      sx={{
                        backgroundColor: "#F0F0F0",
                        borderRadius: "5px",
                        height: "50px",
                        justifyContent: "center",
                        pl: 2,
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      sx={{
                        color: "#272522",
                        fontSize: "17px",
                        fontFamily: "Roboto",
                        fontWeight: "500",
                        lineHeight: "30px",
                      }}
                    >
                      Job Title
                    </Typography>
                    <TextField
                      fullWidth
                      variant="standard"
                      InputProps={{ disableUnderline: true }}
                      // value={editOfferTitle}
                      // onChange={this.props.onChangeeditOfferTitle}
                      sx={{
                        backgroundColor: "#F0F0F0",
                        borderRadius: "5px",
                        height: "50px",
                        justifyContent: "center",
                        pl: 2,
                      }}
                    />
                  </Box>
                </Grid>
                <Grid
                  container
                  xs={12}
                  md={12}
                  sm={12}
                  lg={12}
                  spacing={1}
                  sx={{
                    visibility: { xs: "none", md: "hidden" },
                    display: { xs: "none", md: "hidden" },
                  }}
                >
                  <Grid item xs={12} md={6} sm={6} lg={6}>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        sx={{
                          color: "#272522",
                          fontSize: "17px",
                          fontFamily: "Roboto",
                          fontWeight: "500",
                          lineHeight: "30px",
                        }}
                      >
                        Price
                      </Typography>
                      <TextField
                        fullWidth
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        placeholder="Original Price"
                        sx={{
                          backgroundColor: "#F0F0F0",
                          borderRadius: "5px",
                          height: "50px",
                          justifyContent: "center",
                          pl: 2,
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6} sm={6} lg={6}>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        sx={{
                          color: "#272522",
                          fontSize: "17px",
                          fontFamily: "Roboto",
                          fontWeight: "500",
                          lineHeight: "30px",
                        }}
                      >
                        Discounted
                      </Typography>
                      <TextField
                        fullWidth
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        placeholder="Discount Price"
                        sx={{
                          backgroundColor: "#F0F0F0",
                          borderRadius: "5px",
                          height: "50px",
                          justifyContent: "center",
                          pl: 2,
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>

                <Grid container xs={12} md={12} sm={12} lg={12}>
                  <Grid item xs={6} md={6} lg={6}>
                    <Box className={classes.ModelSaveButton}>
                      <Button
                        startIcon={<ClassIcon />}
                        className={classes.ModelSaveText}
                      >
                        Save
                      </Button>
                    </Box>
                  </Grid>

                  <Grid item xs={6} md={6} lg={6}>
                    <Box className={classes.ModelDeleteButton}>
                      <Button
                        startIcon={<CloseIcon />}
                        className={classes.ModelDeleteText}
                        onClick={onClose}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Dialog>
      </Container>
    );
  }
}

export default withStyles(StylesOffers)(EditTeam);
