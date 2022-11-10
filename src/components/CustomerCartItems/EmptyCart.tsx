import React, { Component } from "react";
import { Container } from "@mui/system";
import emptycart from "../../assets/images/EmptyCart/emptycart1.jpg";
import { Button, Typography } from "@mui/material";
import withRouter from "../../hoc/withRouter";
import { withStyles } from "@mui/styles";
import { cartStyle } from "./CartItem.Style";

interface EmptyCartProps {
  navigate?: any;
  classes: any;
  onClickCategories?: () => void;
}

class EmptyCart extends Component<EmptyCartProps> {
  onClickNavToCategories = () => {
    this.props.navigate("/customer/category");
  };
  render() {
    const { classes } = this.props;
    return (
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={emptycart}
          alt="emptycart"
          className={classes.emptyCartImage}
        />
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
              textAlign: "center",
            },
          }}
        >
          Looks like you have not added anything to your cart. Go ahead and
          explore top categories.{" "}
        </Typography>

        <Button
          variant="contained"
          onClick={this.onClickNavToCategories}
          sx={{
            width: { md: "16rem", xs: "100%" },
            height: "4rem",
            color: "#fff",
            fontSize: "18px",
            fontFamily: "Roboto",
            fontWeight: 700,
            marginTop: "1.5rem",
            "&:hover": {
              backgroundColor: "#E7A356",
            },
            textTransform: "capitalize",
          }}
        >
          Shop Our Products
        </Button>
      </Container>
    );
  }
}

export default withRouter(
  withStyles(cartStyle, { withTheme: true })(EmptyCart)
);
