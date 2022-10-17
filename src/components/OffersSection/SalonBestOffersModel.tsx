import {
  Button,
  Container,
  Dialog,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";

import ClassIcon from "@mui/icons-material/Class";
import CloseIcon from "@mui/icons-material/Close";

import OferrImg from "../../assets/images/SalonPatnerBestOffersImg/Rectangle64(1).png";

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
  onChangeeditOfferTitle: (id: any) => void;
  onChangePrice: (id: any) => void;
  onChangeDissPrice: (id: any) => void;
  onChangeDescription: (id: any) => void;
  onSubmitEditModel: (id: any) => void;
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
      editImage
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
                  right: 0,
                  left: '93%',
                  top: '0%',
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
                  <Grid item xs={12} md={6} sm={6} lg={6}>
                    <Box>
                      <img
                        src={editImage}
                        alt="offered"
                        className="edit-offer-image"
                      />
                    </Box>
                  </Grid>

                  {/* <Grid xs={12} md={12} lg={12} sx={{ mt: 2 }}>
                    <Grid item xs={3} md={6} lg={6}>
                      <Box className={classes.ModelAvatarImage}>
                        <img
                          src={OferrImg}
                          alt="offered-image"
                          style={{ width: "100px" }}
                        />
                        <CloseIcon
                          style={{
                            marginBottom: "28px",
                            marginLeft: "-12px",
                            color: "#fff",
                            backgroundColor: "black",
                            borderRadius: "25px",
                            fontSize: "18px",
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid> */}
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
