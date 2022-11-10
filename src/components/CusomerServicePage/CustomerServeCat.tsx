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
import withRouter from "../../hoc/withRouter";
import WithRouterHoc from "../common/CommonNavigateComp/WithRouterHoc";
import { categoryAllData } from "../../utils/data/CustomerHairServiceData/CustomerServeData";

interface IProps {
  navigate: any;
}

class CustomerServeCat extends Component<IProps> {
  

  activateServices = (data: any) => {
    let heading = data.title.replace(/ /g, "");
        this.props.navigate(`/customer/category/${heading}`, {
          state: data
        })
  };

  render() {
    const { classes }: any = this.props;

    return (
      <>
        <Grid container sx={{ mt: 0 }} maxWidth="lg">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Stack className={classes.specialist}>
              <Box className={classes.specialistHeading}>
                <Stack sx={{ mb: { sm: 2, xs: 2 } }}>
                  <Typography className={classes.blogHeading}>
                    Category
                  </Typography>
                  <Typography className={classes.blogTitleLine}></Typography>
                </Stack>
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
        </Grid>
      </>
    );
  }
}
export default WithRouterHoc(withStyles(Styles)(withRouter(CustomerServeCat)));
