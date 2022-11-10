import React, { Component } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { withStyles } from "@mui/styles";

import CustomerCommonBanner from "../common/CustomerCommonBanner/CustomerCommonBanner";
import Layout from "../Layout/Layout";
import categoryBan from '../../assets/images/CustomerServiceImg/233382ed6c0589fe605295d089ec6eb1.png'

import WithRouterHoc from "../common/CommonNavigateComp/WithRouterHoc";
import { hairStyle } from "../CustomerSalonServices/CustomerS.style";
import { categoryAllData } from "../../utils/data/CustomerHairServiceData/CustomerServeData";


interface ServeProps {
  classes: any;
  navigate: any;
}

class CustomerCategories extends Component<ServeProps> {
    
      activateServices = (data: any) => {
        let heading = data.title.replace(/ /g, "");
        this.props.navigate(`/customer/category/${heading}`, {
          state: data
        })
      };

  render() {
    const { classes } = this.props;
    return (
     <>
      <Layout customer={true}>
        <Container maxWidth="lg" sx={{ mt: 12, mb: 10 }}>
          <Box>
            <CustomerCommonBanner image={categoryBan} title="Category" />
          </Box>

          <Grid className="card-item" gap={2} container>
                {categoryAllData.map((data, index: number) => (
                  <Grid
                    key={index}
                    className="innerCard"
                    sm={6}
                    md={4}
                    lg={4}
                    xs={12}
                    item
                    onClick={(e) =>  this.activateServices(data)}
                  >
                    <Box>
                      <Card className="category-card">
                        <CardMedia
                          component="img"
                          height="215px"
                          src={data.image}
                          alt="green iguana"
                        />
                        <CardContent className="card-content">
                          <Typography
                            className="category-title"
                            gutterBottom
                            variant="h4"
                            component="h4"
                          >
                            {data.title}
                          </Typography>
                          <ArrowForwardIcon className="arrow-icon" />
                        </CardContent>
                      </Card>
                    </Box>
                  </Grid>
                ))}
              </Grid>
        </Container>
      </Layout>
     </>
    );
  }
}

export default WithRouterHoc(withStyles(hairStyle)(CustomerCategories));
