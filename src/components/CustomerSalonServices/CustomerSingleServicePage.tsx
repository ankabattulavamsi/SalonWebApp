import { Button, Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box, Container } from "@mui/system";
import React, { Component } from "react";
import WithRouterHoc from "../common/CommonNavigateComp/WithRouterHoc";
import Layout from "../Layout/Layout";
import { hairStyle } from "./CustomerS.style";
interface IsSinglePageProps {
  location: any;
  classes:any
}

class CustomerSingleServicePage extends Component<IsSinglePageProps> {
  render() {
    const { state } = this.props.location;
    const {classes} = this.props
    console.log("location-data", state);
    return (
      <Layout customer={true}>
        <Container sx={{ mt: 20, mb: 10 }}>
          <Grid container spacing={2} sx={{ p: { lg: 0 } }}>
            <Grid item xs={12} md={6} sm={6} lg={6}>
              <Box>
                <img src={state.hairServeImg} alt="hair" style={{width: '500px'}} />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} sm={6} lg={6}>
            <Typography className={classes.MainHeading}>{state.heading}</Typography>
              <Box>
                <Typography>{state.price}</Typography>
                <Typography >{state.dissPrice}</Typography>
              </Box>
              <Typography className={classes.descriptionP}>{state.description}</Typography>
            <Typography className={classes.descriptionP}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking
            </Typography>
              <Button>Add To Cart</Button>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

export default WithRouterHoc(withStyles(hairStyle)(CustomerSingleServicePage));
