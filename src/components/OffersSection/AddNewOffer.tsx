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
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

import OferrImg from "../../assets/images/SalonPatnerBestOffersImg/Rectangle64(1).png";

import { withStyles } from "@mui/styles";
import { StylesOffers } from "./BestOffers.styles";
import OfferUploadImages from "./OfferUploadImages";

interface IsAddNewProps {
  classes: any;
  addNewOfferOpen: boolean;
  handleCloseAddOffer: (id: any) => void;
  editOfferTitle: string;
  editPrice: string;
  editDissPrice: string;
  editDescription: string;
  onChangeeditOfferTitle: (id: any) => void;
  onChangePrice: (id: any) => void;
  onChangeDissPrice: (id: any) => void;
  onChangeDescription: (id: any) => void;
  onSubmitEditModel: (id: any) => void;
}

export class AddNewOffer extends Component<IsAddNewProps> {
  render() {
    const {
      classes,
      editOfferTitle,
      editPrice,
      editDissPrice,
      editDescription,
    } = this.props;
    return (
      <>
        <Container>
          <Dialog
            onClose={this.props.handleCloseAddOffer}
            open={this.props.addNewOfferOpen}
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
                onClick={this.props.handleCloseAddOffer}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon style={{width:"42px"}} />
              </IconButton>
            </Box>
            <Divider />
            <Box sx={{ p: 3, backgroundColor: '#fff' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={6} lg={6}>
                  <Box>
                    <OfferUploadImages />
                  </Box>

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
                        placeholder="Add Offer Title"
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

                  <Grid container xs={12} md={12} sm={12} lg={12}>
                    <Grid item xs={12} md={12} lg={12}>
                      <Box
                        className={classes.ModelSaveButton}
                        onClick={this.props.handleCloseAddOffer}
                      >
                        <Button
                          startIcon={<ClassIcon />}
                          className={classes.ModelSaveText}
                        >
                          Add
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

export default withStyles(StylesOffers)(AddNewOffer);