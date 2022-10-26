import { Container } from "@mui/system";
import React, { Component } from "react";
import CustomerCommonBanner from "../common/CustomerCommonBanner/CustomerCommonBanner";
import SalonHairImg from "../../assets/images/CustomerHairServiceImgs/9852e9704ebcfac8c889f491e97ef665.jpeg";
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
import { HairServiceData } from "../../utils/data/CustomerHairServiceData/CustomerHairData";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { withStyles } from "@mui/styles";
import { hairStyle } from "./CustomerS.style";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

interface ServeProps {
  classes: any;
}

export class CustomerHairService extends Component<ServeProps> {
  render() {
    const { classes } = this.props;
    return (
      <Layout customer={true}>
        <Container maxWidth="lg" sx={{ mt: 12, mb: 10 }}>
          <Box>
            <CustomerCommonBanner image={SalonHairImg} title="Hair Cut" />
          </Box>

          <Grid container spacing={2} sx={{ p: { lg: 0 } }}>
            {HairServiceData.map((item: any) => (
              <Grid item xs={12} md={6} sm={6} lg={4}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={`${item.heading}`}
                    // height="140"
                    image={item.hairServeImg}
                  />

                  <CardContent sx={{m:1}}>
                    <Box className={classes.priceServeContainer}>
                    <Typography className={classes.cardHeading} variant="h2">{item.heading}</Typography>
                      <Box className={classes.priceServeContainer}>
                        <Box className={classes.priceServeContainerR}>
                          <CurrencyRupeeIcon style={{fontSize: '18px'}} />
                          <Typography variant="h4">{item.dissPrice}</Typography>
                        </Box>
                        <Box className={classes.priceServeContainerRu}>
                          <CurrencyRupeeIcon style={{fontSize: '18px', textDecoration: 'line-through'}}   />
                          <Typography variant="h4">{item.price}</Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box>
                      <Typography className={classes.descHair}>{item.description}</Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{m:1}}>
                    <Button className={classes.cartBtn} startIcon={<ShoppingBasketIcon />}>Add To Cart</Button>
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

export default withStyles(hairStyle)(CustomerHairService);
