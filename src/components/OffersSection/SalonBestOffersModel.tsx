import {
  Badge,
  Button,
  Container,
  Dialog,
  Divider,
  Grid,
  Icon,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";

import ClassIcon from "@mui/icons-material/Class";
import CloseIcon from "@mui/icons-material/Close";

import {
  galleryUploadIcon,
} from "../../utils/data/GalleryOwner/Gallery";

import { withStyles } from "@mui/styles";
import { StylesOffers } from "./BestOffers.styles";

import "./SalonBestOffers.css";
interface IsStatePassProps {
  classes: any;
  open: boolean;
  handleClose: (id: any) => void;
  editOfferTitle: string;
  editPrice: string;
  editDissPrice: string;
  editDescription: string;
  editImage: string;
  editId: string;
  onChangeeditOfferTitle: (id: any) => void;
  onChangePrice: (id: any) => void;
  onChangeDissPrice: (id: any) => void;
  onChangeDescription: (id: any) => void;
  onSubmitEditModel: (id: any) => void;
  handleOnChangeImage: (id: any) => void;
  onClicOfCloseBadge: (id:any) => void
}

class SalonBestOffersModel extends Component<IsStatePassProps> {
  render() {
    const {
      open,
      handleClose,
      editOfferTitle,
      editPrice,
      editDissPrice,
      editDescription,
      editImage,
      editId,
      handleOnChangeImage,
      onClicOfCloseBadge
    } = this.props;
    const { classes } = this.props;
    return (
      <>
        <Container>
          <Dialog
            onClose={handleClose}
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
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: -10,
                  top: '-10%',
                  color: '#fff',
                }}
              >
                <CloseIcon sx={{color: '#fff', fontSize:'30px'}} />
              </IconButton>
            </Box>
            <Divider />
            <Box sx={{ p: 3, backgroundColor: '#fff' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={6} lg={6}>
                  <Grid item xs={12} md={12} sm={12} lg={12}>
                  <Box sx={{ postion: "relative", mt: 1 }}>
                  <Box 
                    sx={{ postion: "relative", width: {md: "350px", xs: '100%'}, mx: 'auto', height: "270px" }}
                  >
                    {editImage === "" && editImage === "" ? (
                      <>
                        <Box sx={{ position: "relative" }}>
                          <input
                            name={"image"}
                            id="image"
                            accept="*"
                            type="file"
                            onChange={(e) => handleOnChangeImage(e)}
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
                                  src={galleryUploadIcon}
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
                                    textAlign: 'center'
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
                                    textAlign: 'center'
                                  }}
                                >
                                  Supported files PNG, JPEG, SVG, wEBP
                                </Typography>{" "}
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </>
                    ) : editImage && editId !== "" ? (
                      <img
                        src={editImage}
                        alt='{item.title}'
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "90%",
                        }}
                      />
                    ) : (
                      <img
                        src={editImage}
                        alt='{title}'
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
                        {editImage === "" && editImage === "" ? (
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
                        ) : editImage && editId !== "" ? (
                          <Badge
                            color="secondary"
                            badgeContent={
                              <CloseIcon
                                onClick={onClicOfCloseBadge}
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
                              src={editImage && editImage}
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
                                onClick={onClicOfCloseBadge}
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
                              src={editImage}
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
                        Offers Title
                      </Typography>
                      <TextField
                        fullWidth
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        value={editOfferTitle}
                        onChange={this.props.onChangeeditOfferTitle}
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

                  <Grid container xs={12} md={12} sm={12} lg={12} spacing={1}>
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
                          onChange={this.props.onChangeDissPrice}
                          value={editDissPrice}
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
                          value={editPrice}
                          onChange={this.props.onChangePrice}
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
                        Description
                      </Typography>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        placeholder="Long descreption type here..."
                        onChange={this.props.onChangeDescription}
                        value={editDescription}
                        sx={{
                          backgroundColor: "#F0F0F0",
                          borderRadius: "5px",
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
                  >
                    <Grid item xs={6} md={6} lg={6}>
                      <Box
                        className={classes.ModelSaveButton}
                        onClick={this.props.onSubmitEditModel}
                      >
                        <Button
                          startIcon={<ClassIcon />}
                          onClick={this.props.onSubmitEditModel}
                          className={classes.ModelSaveText}
                        >
                          Save
                        </Button>
                      </Box>
                    </Grid>

                    <Grid item xs={6} md={6} lg={6}>
                      <Box
                        className={classes.ModelDeleteButton}
                        onClick={this.props.onSubmitEditModel}
                      >
                        <Button
                          startIcon={<CloseIcon />}
                          onClick={this.props.handleClose}
                          className={classes.ModelDeleteText}
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
      </>
    );
  }
}

export default withStyles(StylesOffers)(SalonBestOffersModel);
