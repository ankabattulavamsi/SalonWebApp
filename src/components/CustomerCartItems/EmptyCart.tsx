import React, { Component } from "react";
import { Container } from "@mui/system";
import emptycart from "../../assets/images/EmptyCart/emptycart1.jpg";
import { Box, Button, Typography } from "@mui/material";
import withRouter from "../../hoc/withRouter";

interface EmptyCartProps {
  navigate?: any;
  onClickCategories?: () => void;
}

class EmptyCart extends Component<EmptyCartProps> {
  onClickNavToCategories = () => {
    this.props.navigate("/customer/category");
  };
  render() {
    return (
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={emptycart} alt="emptycart" width="40%" height="60%" />
        <Typography
          variant="h6"
          text-align="center"
          sx={{
            fontSize: { md: "24px", sm: "22px", xs: "18px" },
            fontFamily: "roboto",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Your Cart is Currently Empty.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: {
              md: "22px",
              sm: "20px",
              xs: "16px",
              fontFamily: "fira sans",
            },
          }}
        >
          Looks like you have not added anything to your cart. Go ahed and
          explore top categories.{" "}
        </Typography>

        <Button
          variant="contained"
          onClick={this.onClickNavToCategories}
          sx={{
            width: "16rem",
            height: "3rem",
            color: "#fff",
            fontSize: "18px",
            fontFamily: "Roboto",
            fontWeight: 700,
            marginTop: "1.5rem",
          }}
        >
          Shop Products
        </Button>
      </Container>
    );
  }
}

export default withRouter(EmptyCart);
