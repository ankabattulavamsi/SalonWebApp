import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { data } from "../../utils/data/ownerDashboard/ownerDashboardCharts";
import {
  Cards,
  CardData,
} from "../../utils/data/ownerDashboard/ownerDashboard";
import { withStyles } from "@mui/styles";

import { DashboardChartStyles } from "./OwnerDashboardCharts.Style";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

interface chartProps {
  classes: any;
}

class OwnerDashboardChart extends Component<chartProps> {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Grid container>
          <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <Box className={classes.mainDashboardDiv}>
              <Box className={classes.overallProfitDiv}>
                <Typography
                  variant="h5"
                  color="secondary.dark"
                  sx={{
                    marginRight: "18px",
                  }}
                >
                  overall profits
                </Typography>
                <Typography variant="h2" color="primary.dark">
                  <CurrencyRupeeIcon
                    sx={{
                      marginBottom: "-2px",
                    }}
                  />
                  5,24,900
                </Typography>
              </Box>
              <ReactApexChart
                options={data.options}
                series={data.series}
                type="bar"
                height={350}
              />

              <Box className={classes.dashboardChartCardDiv}>
                <Grid container spacing={{ xs: 2, sm: 2, md: 4, lg: 6 }}>
                  {CardData.map((cards: Cards) => {
                    return (
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card className={classes.dashboardChartCard}>
                          <CardMedia
                            sx={{
                              height: "50px",
                              width: "50px",
                            }}
                            component="img"
                            image={cards.image}
                            alt="profit "
                          />
                          <CardContent >
                            <Typography variant="h2" >
                              {cards.description === "January Profits" ? (
                                <CurrencyRupeeIcon
                                sx={{
                                  marginBottom: "-2px",
                                }}
                                />
                              ) : null}
                              {cards.heading}
                            </Typography>
                            <Typography variant="h3" color="secondary.dark">
                              {cards.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
        </Grid>
      </>
    );
  }
}
export default withStyles(DashboardChartStyles)(OwnerDashboardChart);
