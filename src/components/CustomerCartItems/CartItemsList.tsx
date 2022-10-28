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

interface IsCartProps {
  classes: any;
  location: any;
  navigate: any
}

interface IsCartState {
  open: boolean;
  cartData: any[];
}

export class CartItemsList extends Component<IsCartProps> {
  state: IsCartState = {
    open: false,
    cartData: [],
  };

  componentDidMount() {
    const {state} = this.props.location
    // console.log('cart-data', state)
    localStorage.setItem('todos', JSON.stringify(state))
  }

  onClickNavToCategories = () => {
    this.props.navigate('/customer/service')
  }

  onClickDelteItem = (id:any) =>  {
    console.log('id', id)
    const filterData = this.state.cartData.filter((item:any) => item.id !== id)
    this.setState({cartData: filterData})
  }

  render() {
    const {cartData} = this.state
    const { classes } = this.props;
    const {state} = this.props.location
    console.log('cart', this.state.cartData)
    let totalCartData = cartData.push(state)

    return (
      <Layout customer={true}>
        <Container sx={{ pt: 20, pb: 10 }} maxWidth="lg" >
        <Box className={classes.cartItems}>
              <Typography variant="h2">Total Cart( {cartData.length} item) </Typography>
              </Box>
          <Grid container spacing={2}>
              {cartData.map((item: any) => (
                <Grid item xs={12} md={12} sm={12} lg={12}>
                <Card className={classes.CartContainer}>
                  <Box className={classes.imageContainer}>
                    <img src={item.brideServeImg} alt="ss" className={classes.imagCart} />
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
                        <Typography variant="h3">{item.dissPrice}</Typography>
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
                    <Box className={classes.deleteC} onClick={(e) => this.onClickDelteItem(item.id)}>
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
              </Box>
              <Box>
              <Button onClick={this.onClickNavToCategories}>Continue</Button>
              </Box>
              </Box>
              </Box>
        </Container>
      </Layout>
    );
  }
}

export default WithRouterHoc(withStyles(cartStyle)(CartItemsList));
