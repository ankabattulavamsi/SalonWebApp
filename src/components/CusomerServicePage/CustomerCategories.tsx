import React, { Component } from "react";
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
import { Container } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { withStyles } from "@mui/styles";

import CustomerCommonBanner from "../common/CustomerCommonBanner/CustomerCommonBanner";
import Layout from "../Layout/Layout";
import categoryBan from '../../assets/images/CustomerServiceImg/233382ed6c0589fe605295d089ec6eb1.png'
import SpaBanner from "../../assets/images/SalonPatnerBestOffersImg/images (2).jpeg";

import WithRouterHoc from "../common/CommonNavigateComp/WithRouterHoc";
import { hairStyle } from "../CustomerSalonServices/CustomerS.style";
import { categoryData } from "../../utils/data/customer/CustomerData";


interface ServeProps {
  classes: any;
  navigate: any;
}

class CustomerCategories extends Component<ServeProps> {
    state = {
        activeServe: "Hair Cut",
      };
    
      project = () => {
        switch (this.state.activeServe) {
          case "Hair Cut":
            return this.props.navigate("haircut");
          case "Bridal":
            return this.props.navigate("bridal");
          case "Kids Haircut":
            return this.props.navigate("kids-haircut");
          case "Hair Color":
            return this.props.navigate("hair-colors");
            case "Facial":
                    return this.props.navigate('facial');
            case "Spa":
                    return this.props.navigate('spa');
          default:
            return null;
        }
      };
    
      activateServices = (title: any) => {
        this.setState({ activeServe: title });
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
                {categoryData.map((data, index: number) => (
                  <Grid
                    key={index}
                    className="innerCard"
                    sm={6}
                    md={4}
                    lg={4}
                    xs={12}
                    item
                    onClick={(e) =>  this.activateServices(data.title)}
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
      <>{this.project()}</>
     </>
    );
  }
}

export default WithRouterHoc(withStyles(hairStyle)(CustomerCategories));
