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
import "react-multi-carousel/lib/styles.css";
import { CommonViewAllButton } from "../common";
import withRouter from "../../hoc/withRouter";
import { categoryData } from "../../utils/data/customer/CustomerData";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CategoryCard from "../customer/CategoryCard";
import CustomerHairService from "../CustomerSalonServices/CustomerHairService";
import WithRouterHoc from "../common/CommonNavigateComp/WithRouterHoc";
import CustomerBridalService from "../CustomerSalonServices/CustomerBridalService";

interface IProps {
  navigate: any;
}

class CustomerServeCat extends Component<IProps> {
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
    const { classes }: any = this.props;

    return (
      <>
        <Grid container sx={{ mt: 10 }} maxWidth="lg">
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
                {categoryData.map((data, index: number) => (
                  <Grid
                    key={index}
                    className="innerCard"
                    sm={6}
                    md={4}
                    lg={4}
                    xs={12}
                    item
                    onClick={(e) => this.activateServices(data.title)}
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
        <>{this.project()}</>
      </>
    );
  }
}
export default WithRouterHoc(withStyles(Styles)(withRouter(CustomerServeCat)));
