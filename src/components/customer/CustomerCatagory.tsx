/** @format */
import React, { Component } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Styles } from "../OurSpecialists/specialist.styles";
import { withStyles } from "@mui/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "react-multi-carousel/lib/styles.css";
import { CommonViewAllButton } from "../common";
import withRouter from "../../hoc/withRouter";
import { categoryData } from "../../utils/data/customer/CustomerData";
import { categoryAllData } from "../../utils/data/CustomerHairServiceData/CustomerServeData";

interface IProps {
  navigate: any;
}
class CustomerCatagory extends Component<IProps> {

  activateServices = (data: any) => {
    this.props.navigate(`/customer/category/${data.title}`, {
      state: data
    })
  };

  onClickNavigateOffersPage = () => {
    this.props.navigate("/customer/category");
  };
  render() {
    const { classes }: any = this.props;

    return (
      <>
        <Grid container sx={{ mt: 10 }}>
          <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <Stack className={classes.specialist}>
              <Box className={classes.specialistHeading}>
                <Stack sx={{ mb: { sm: 2, xs: 2 } }}>
                  <Typography className={classes.blogHeading}>
                    Category
                  </Typography>
                  <Typography className={classes.blogTitleLine}></Typography>
                </Stack>
                <CommonViewAllButton
                  buttonName="view all Category"
                  onClickNavigateOffersPage={this.onClickNavigateOffersPage}
                />
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
                    onClick={(e) => this.activateServices(data)}
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
            </Stack>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
        </Grid>
      </>
    );
  }
}
export default withStyles(Styles)(withRouter(CustomerCatagory));
