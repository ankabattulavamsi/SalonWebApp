import { Box, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { data } from "../../utils/data/ownerDashboard/ownerDashboardCharts";

type Props = {};

type State = {};

class OwnerDashboardChart extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Grid container>
          <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <Box
              sx={{
                display: "grid",
                flexDirection: "row",
                rowGap: "43px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  mt: "30px",
                }}
              >
                <Typography
                  variant="h5"
                  color="secondary.dark"
                  sx={{
                    textTransform: "capitalize",
                    marginRight: "18px",
                  }}
                >
                  overall profits
                </Typography>
                <Typography variant="h2" color="primary.dark">
                  $5,24,900
                </Typography>
              </Box>
              <ReactApexChart
                options={data.options}
                series={data.series}
                type="bar"
                height={350}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "blue",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "250px",
                    height: "100px",
                    background: "#FFFEFE",
                    boxShadow: " 0px 4px 50px rgba(0, 0, 0, 0.07)",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    sx={{
                      component: "img",
                      height: "94px",
                      width: "94px",
                      image:
                        "../../assets/images/OwnerDashboardCharts/profits 1.png",
                      alt: "profit",
                    }}
                  ></Box>
                  <Box>
                    <Typography>5,256,00</Typography>
                    <Typography>septembar profit</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",

                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "250px",
                    height: "100px",
                    background: "#FFFEFE",
                    boxShadow: " 0px 4px 50px rgba(0, 0, 0, 0.07)",
                    borderRadius: "10px",
                  }}
                >
                  1
                  <Box>
                    <Typography>5,256,00</Typography>
                    <Typography>septembar profit</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "250px",
                    height: "100px",
                    background: "#FFFEFE",
                    boxShadow: " 0px 4px 50px rgba(0, 0, 0, 0.07)",
                    borderRadius: "10px",
                  }}
                >
                  1
                  <Box>
                    <Typography>5,256,00</Typography>
                    <Typography>septembar profit</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
        </Grid>
      </>
    );
  }
}
export default OwnerDashboardChart;
