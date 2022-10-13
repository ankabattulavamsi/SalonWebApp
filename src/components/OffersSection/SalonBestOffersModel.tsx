import { Button, Container, Dialog, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";

import ClassIcon from "@mui/icons-material/Class";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from '@mui/icons-material/Clear';

import OferrImg from "../../assets/images/SalonPatnerBestOffersImg/Rectangle64(1).png";

import { withStyles } from "@mui/styles";
import { StylesOffers } from "./BestOffers.styles";

import "./SalonBestOffers.css";
interface IsStatePassProps {
  classes: any;
  open: boolean;
  handleClose: (id: any) => void;
  editOfferTitle: string;
  editPrice: string, 
  editDissPrice: string, 
  editDescription: string
}

class SalonBestOffersModel extends Component<IsStatePassProps> {
  render() {
    const { open, handleClose, editOfferTitle, editPrice, editDissPrice, editDescription } = this.props;
    const { classes } = this.props;
    return (
      <>
        <Container>
        <Dialog onClose={handleClose} open={open}  maxWidth='md'>
       <Box sx={{display :'flex', alignItems: 'center', justifyContent: 'flex-end', cursor: 'pointer'}} onClick={handleClose} >
       <ClearIcon sx={{ backgroundColor: '#000', fontSize: '28px', color:'#fff',   }} />
       </Box>
          <Box sx={{ p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Grid item xs={12} md={6} lg={6}>
                  <Box>
                    <img
                      src={OferrImg}
                      alt="offered-image"
                      className=""
                      style={{ width: "270px" }}
                    />
                  </Box>
                </Grid>

                <Grid xs={12} md={12} lg={12} sx={{ mt: 2 }}>
                  <Grid item xs={3} md={6} lg={6}>
                    <Box className={classes.ModelAvatarImage}>
                      <img
                        src={OferrImg}
                        alt="offered-image"
                        style={{ width: "100px" }}
                      />
                      <ClearIcon
                        style={{
                          marginBottom: "28px",
                          marginLeft: "-12px",
                          color: "#fff",
                          backgroundColor: "black",
                          borderRadius: "25px",
                          fontSize: '18px'
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <Grid item xs={12} md={12} lg={12}>
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

                <Grid container xs={12} md={12} lg={12} spacing={1}>
                  <Grid item xs={12} md={6} lg={6}>
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

                  <Grid item xs={12} md={6} lg={6}>
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

                <Grid item xs={12} md={12} lg={12}>
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

                <Grid container xs={12} md={12} lg={12}>
                  <Grid item xs={6} md={6} lg={6}>
                    <Box className={classes.ModelSaveButton}>
                      <ClassIcon className={classes.ModelSaveIcon} />
                      <Button className={classes.ModelSaveText}>Save</Button>
                    </Box>
                  </Grid>

                  <Grid item xs={6} md={6} lg={6}>
                    <Box className={classes.ModelDeleteButton}>
                      <DeleteIcon className={classes.ModelDeleteIcon} />
                      <Button className={classes.ModelDeleteText}>
                        Delete
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
