import React, { Component } from "react";

import { Box, Button, Grid, Skeleton, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Container } from "@mui/system";
import PlaceIcon from "@mui/icons-material/Place";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DeleteIcon from "@mui/icons-material/Delete";

import Layout from "../Layout/Layout";
import { cartStyle } from "./CartItem.Style";
import { HairServiceData } from "../../utils/data/CustomerHairServiceData/CustomerHairData";

interface IsCartProps {
  classes: any;
}

interface IsCartState {
  open: boolean;
  CartData: any[];
}

export class CartItemsList extends Component<IsCartProps> {
  state: IsCartState = {
    open: false,
    CartData: [],
  };

  render() {
    const { classes } = this.props;

    return (
      <Layout customer={true}>
        <Container sx={{ pt: 15, pb: 10 }} maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} sm={12} lg={12}>
              <Typography alignItems="end">Total Cart( item) </Typography>
              {HairServiceData.slice(0, 1).map((item: any) => (
                <Box className={classes.CartContainer}>
                  <Box className={classes.imageContainer}>
                    {this.state.open ? (
                      <Box>
                        <Skeleton
                          variant="rectangular"
                          width={281}
                          height={165}
                        />
                      </Box>
                    ) : (
                      <Box>
                        <img src={item.hairServeImg} alt="" />
                      </Box>
                    )}
                  </Box>
                  <Box>
                    {this.state.open ? (
                      <Box>
                        <Skeleton width="150px" height="25px" />
                        <Skeleton width="350px" height="55px" />
                        <Box className={classes.CartContainer}>
                          <Skeleton width="100px" height="30px" />
                          <Skeleton
                            width="350px"
                            height="35px"
                            sx={{ ml: 2 }}
                          />
                        </Box>
                      </Box>
                    ) : (
                      <Box>
                        <Typography className={classes.cartHeading}>{item.heading}</Typography>
                        <Typography className={classes.cartDesc}>{item.description}</Typography>
                        <Box className={classes.CartLocation}>
                          <Typography className={classes.CartSalonName}>Lakme Salon</Typography>
                          <Box className={classes.CartLocation}>
                            <PlaceIcon className={classes.iconCart} />
                            <Typography className={classes.CartLocationText}>
                              Lakme Salon, Plot No, I 26, “ Neha Villa” First
                              Floor....
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    )}
                  </Box>

                  <Box>
                    {this.state.open ? (
                      <Box>
                        <Skeleton width="120px" height="25px" />
                        <Skeleton width="90px" height="20px" />
                        <Skeleton width="160px" height="65px" />
                      </Box>
                    ) : (
                      <Box>
                        <Box className={classes.priceServeContainer}>
                          <Box className={classes.priceServeContainerR}>
                            <CurrencyRupeeIcon style={{ fontSize: "18px" }} />
                            <Typography variant="h3">
                              {item.dissPrice}
                            </Typography>
                          </Box>
                          <Box className={classes.priceServeContainerRu}>
                            <CurrencyRupeeIcon
                              style={{
                                fontSize: "18px",
                                textDecoration: "line-through",
                              }}
                            />
                            <Typography variant="h4">{item.price}</Typography>
                          </Box>
                        </Box>
                        <Typography className={classes.orderId}>
                          OD11721633
                        </Typography>
                        <Button
                          startIcon={<DeleteIcon />}
                          className={classes.cartDeleteBtn}
                        >
                          Delete
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

export default withStyles(cartStyle)(CartItemsList);
