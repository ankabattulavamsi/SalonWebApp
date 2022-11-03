/** @format */

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { Component } from "react";
import { CustomerData } from "../../utils/data/customer/CustomerData";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import photo from "../../assets/images/customer/girl2.png";
import WithRouterHoc from "../common/CommonNavigateComp/WithRouterHoc";
interface IProps {
  data: CustomerData;
  navigate: any;
}

class BannerCard extends Component<IProps> {
  state = {
    newArray: JSON.parse(localStorage.getItem("cartData")!) || [],
  };

  onClickNavigateToCart = (item: any) => {
    this.props.navigate("/customer/cart-items", {
      state: item,
    });
    const itemInCart = this.state.newArray.find(
      (items: any) => items.id === item.id
    );
    if (itemInCart) {
    } else {
      localStorage.setItem(
        "cartData",
        JSON.stringify([...this.state.newArray, item])
      );
      this.setState({
        newArray: JSON.parse(localStorage.getItem("cartData")!),
      });
    }
  };

  render() {
    const { data } = this.props;
    return (
      <Box className="main-container">
        <Grid container>
          <Grid item xl={8} lg={8} md={7} sm={7} xs={7}>
            <Box className="text-content">
              <Typography variant="h2" className="heading-text">
                {data.heading}
              </Typography>
              <Typography variant="body1" component="span" className="price">
				<CurrencyRupeeIcon style={{fontSize:"20px", marginBottom: '-3px'}}  />
                <span style={{ fontSize: "20px", marginRight: "10px" }}>
                  {data.dissPrice}
                </span>
				<CurrencyRupeeIcon  style={{fontSize:"20px", marginBottom: '-3px', color: "#616E7A",}} />
                <del style={{ color: "#616E7A", fontSize: "20PX" }}>
                  {" "}
                  {data.price}{" "}
                </del>
              </Typography>
              <Typography
                className="description"
                style={{
                  color: "#616E7A",
                  fontSize: "20PX",
                  textTransform: "capitalize",
                }}
                variant="body1"
                id="description"
              >
                {data.description}
              </Typography>

              <Stack>
                <Button
                  onClick={(e:any) => this.onClickNavigateToCart(data)}
                  startIcon={<ShoppingBasketIcon />}
                  variant="contained"
                  className="btn-sec"
                >
                  Add to Cart
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xl={4} lg={4} md={5} sm={5} xs={5}>
            <img src={photo} alt="girl2" className="banner-img" />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default WithRouterHoc(BannerCard);
