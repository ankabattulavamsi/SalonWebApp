import React, { Component } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { withStyles } from "@mui/styles";
import { data } from "../../utils/data/ownerDashboard/ownerDashboardCharts";
import {
  Cards,
  CardData,
} from "../../utils/data/ownerDashboard/ownerDashboard";

import { DashboardChartStyles } from "./OwnerDashboardCharts.Style";
import "./Owner.css";

interface chartProps {
  classes: any;
}

class OwnerDashboardChart extends Component<chartProps> {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Grid container>
          <Grid item xs={0.5} sm={1.5} md={1.5} lg={1.5}></Grid>
          <Grid item xs={11} sm={9} md={9} lg={9}>
            <Box sx={{ mt: 10 }} className={classes.mainDashboardDiv}>
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
                  ₹5,24,900
                </Typography>
              </Box>
              <ReactApexChart
                className="apexcharts-series"
                options={data.options}
                series={data.series}
                type="bar"
                height={395}
                width={"1200px"}
              
              />
              <Box className={classes.dashboardChartCardDiv}>
                <Grid container spacing={{ xs: 2, sm: 2, md: 4, lg: 6 }}>
                  {CardData.map((cards: Cards) => {
                    return (
                      <Grid item xs={12} sm={6} md={4} lg={4} key="cards">
                        <Card className={classes.dashboardChartCard}>
                          <CardMedia
                          className={classes.dashboardChartCardImg}
                            sx={{
                              height: "50px",
                              width: "50px",
                            }}
                            component="img"
                            image={cards.image}
                            alt="profit "
                          />
                          <CardContent
                          className={classes.dashboardChartCardText}
                          >
                            <Typography variant="h2">
                              {cards.description === "January Profits"
                                ? "₹"
                                : null}
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
          <Grid item xs={0.5} sm={1.5} md={1.5} lg={1.5}></Grid>
        </Grid>
      </>
    );
  }
}
export default withStyles(DashboardChartStyles)(OwnerDashboardChart);
