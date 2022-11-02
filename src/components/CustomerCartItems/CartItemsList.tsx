import React, { Component } from "react";

import { Box, Button, Card, Grid, Skeleton, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Container } from "@mui/system";
import PlaceIcon from "@mui/icons-material/Place";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DeleteIcon from "@mui/icons-material/Delete";

import Layout from "../Layout/Layout";
import { cartStyle } from "./CartItem.Style";
import { HairServiceData } from "../../utils/data/CustomerHairServiceData/CustomerHairData";
import WithRouterHoc from "../common/CommonNavigateComp/WithRouterHoc";
import { categoryData } from "../../utils/data/customer/CustomerData";
import DeleteModal from "../common/DeleteModal/DeleteModal";

interface IsCartProps {
  classes: any;
  location: any;
  navigate: any;
}

interface IsCartState {
  openDeleteModel: boolean;
  cartData: any[];
}

export class CartItemsList extends Component<IsCartProps> {
  state: IsCartState = {
    openDeleteModel: false,
    cartData: [],
  };

  onClickNavToCategories = () => {
    this.props.navigate("/customer/appointment");
  };

  onClickDelteItem = (id: any) => {
    const filterData = this.state.cartData.filter(
      (item: any) => item.id !== id
    );
    this.setState({ cartData: filterData });
    this.setState({ openDeleteModel: true });
  };

  onClickOfferDelete = () => {
    this.setState({ openDeleteModel: false });
  };

  onClose = () => {
    this.setState({ openDeleteModel: false });
  };

  render() {
    const { cartData } = this.state;
    const { classes } = this.props;

    const cartItemsData = JSON.parse(localStorage.getItem("cartData")!) || [];
    console.log("cart-------", cartItemsData);

    let amount = cartItemsData.map((item: any) => parseInt(item.dissPrice));

    let totalAmount = amount.reduce((a: any, b: any) => a + b);

    return (
      <Layout customer={true}>
        <Container sx={{ pt: 20, pb: 10 }} maxWidth="lg">
          <Box className={classes.cartItems}>
            <Typography variant="h2">
              Total Cart( {cartItemsData.length} item){" "}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {cartItemsData.map((item: any) => (
              <Grid item xs={12} md={12} sm={12} lg={12} key={item.id}>
                <Card className={classes.CartContainer}>
                  <Box className={classes.imageContainer}>
                    <img
                      src={item.brideServeImg}
                      alt="ss"
                      className={classes.imagCart}
                    />
                  </Box>
                  <Box className={classes.insideContainer}>
                    <Box>
                      <Typography variant="h2" className={classes.cartHeading}>
                        {item.heading}
                      </Typography>
                      <Typography className={classes.cartDesc}>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium
                      </Typography>
                      <Box className={classes.CartLocation}>
                        <Typography className={classes.CartSalonName}>
                          Lakme Salon
                        </Typography>
                        <Box className={classes.CartLocation}>
                          <PlaceIcon className={classes.iconCart} />
                          <Typography className={classes.CartLocationText}>
                            Lakme Salon, Plot No, I 26, “ Neha Villa” First
                            Floor....
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box className={classes.deleteContainer}>
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
                        <Typography variant="h5" className={classes.orderId}>
                          OD11721633
                        </Typography>
                      </Box>
                      <Button
                        onClick={(e) => this.onClickDelteItem(item.id)}
                        startIcon={<DeleteIcon />}
                        className={classes.cartDeleteBtn}
                      >
                        Delete
                      </Button>
                      <Box
                        className={classes.deleteC}
                        onClick={(e) => this.onClickDelteItem(item.id)}
                      >
                        <DeleteIcon className={classes.deleteI} />
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box className={classes.cartItemsAmount}>
            <Box>
              <Box className={classes.amount}>
                <Typography variant="h2">Total Amount </Typography>
                <CurrencyRupeeIcon style={{ fontSize: "18px" }} />
                <span className={classes.spanAmount}>{totalAmount}</span>
              </Box>
              <Box>
                <Button onClick={this.onClickNavToCategories}>Continue</Button>
              </Box>
            </Box>
          </Box>
        </Container>
        <DeleteModal
          jobTitle="Delete Item"
          deletedId="delete"
          open={this.state.openDeleteModel}
          onClose={this.onClose}
          handleConfirmDelete={this.onClickOfferDelete}
        />
      </Layout>
    );
  }
}

export default WithRouterHoc(withStyles(cartStyle)(CartItemsList));
