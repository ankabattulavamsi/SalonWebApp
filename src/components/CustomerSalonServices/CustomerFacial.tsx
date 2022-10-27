import { Container } from "@mui/system";
import React, { Component } from "react";
import CustomerCommonBanner from "../common/CustomerCommonBanner/CustomerCommonBanner";
import FacialBanner from "../../assets/images/CustomerServiceImg/eden_banner4.jpg";
import Layout from "../Layout/Layout";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { FacialData } from "../../utils/data/CustomerHairServiceData/CustomerHairData";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { withStyles } from "@mui/styles";
import { hairStyle } from "./CustomerS.style";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import WithRouterHoc from "../common/CommonNavigateComp/WithRouterHoc";

interface ServeProps {
  classes: any;
  navigate:any
}

class CustomerFacial extends Component<ServeProps> {

  onClickNavigateSingleServe = (item: any) => {
    let heading = item.heading.replace(/ /g, '')
    this.props.navigate(`facial-details`, {
      state: item
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <Layout customer={true}>
        <Container maxWidth="lg" sx={{ mt: 12, mb: 10 }}>
          <Box>
            <CustomerCommonBanner image={FacialBanner} title="Facial" />
          </Box>

          <Grid container spacing={2} sx={{ p: { lg: 0 } }}>
            {FacialData.map((item: any) => (
              <Grid item xs={12} md={6} sm={6} lg={4}>
                <Card className={classes.cardContainer} >
                  <CardMedia
                    component="img"
                    alt={`${item.heading}`}
                    height="215"
                    image={item.brideServeImg}
                    key={item.id}  onClick={(e) => this.onClickNavigateSingleServe(item)}
                  />

                  <CardContent sx={{ m: 1 }} key={item.id}  onClick={(e) => this.onClickNavigateSingleServe(item)}>
                    <Box className={classes.priceServeContainer}>
                      <Typography className={classes.cardHeading} variant="h2">
                        {item.heading}
                      </Typography>
                      <Box className={classes.priceServeContainer}>
                        <Box className={classes.priceServeContainerR}>
                          <CurrencyRupeeIcon style={{ fontSize: "18px" }} />
                          <Typography variant="h3">{item.dissPrice}</Typography>
                        </Box>
                        <Box className={classes.priceServeContainerRu}>
                          <Box>
                            <CurrencyRupeeIcon
                              style={{
                                fontSize: "18px",
                                textDecoration: "line-through",
                              }}
                            />
                          </Box>
                          <Typography variant="h4">{item.price}</Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box>
                      <Typography className={classes.descHair}>
                        {item.description}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ m: 1 }}>
                    <Button
                      className={classes.cartBtn}
                      startIcon={<ShoppingBasketIcon />}
                    >
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Layout>
    );
  }
}

export default WithRouterHoc(withStyles(hairStyle)(CustomerFacial));
