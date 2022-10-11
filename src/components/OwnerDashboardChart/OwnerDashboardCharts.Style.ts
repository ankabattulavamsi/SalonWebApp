export const DashboardChartStyles: any = {
  mainDashboardDiv: {
    display: "grid",
    gridTemplateRow: "48px 395px 160px",
    // rowGap: "40px",
  },
  overallProfitDiv: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "30px !important",
  },
  dashboardChartCardDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dashboardChartCard: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#FFFEFE",
    boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.07) !important",
    borderRadius: " 10px !important",
    marginTop: "40px",
    padding:"10px 40px",
    "@media only screen and (max-width: 660px) ": {
      margin: "auto",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "0px",
    },
    "@media (min-width: 660px) and (max-width: 900px) ": {
      margin: "auto",
      padding: "0px !important",
      justifyContent: "flex-start",

    },
  },
  dashboardChartCardImg: {
    "@media only screen and (max-width: 600px) ": {
      position: "relative",
      left: "59px",
    },
    "@media (min-width: 600px) and (max-width: 900px) ": {
      position: "relative",
      left: "15px",
    }
  },
  dashboardChartCardText: {
    "@media only screen and (max-width: 600px) ": {
      position: "relative",
      left: "90px",
    },
    "@media (min-width: 600px) and (max-width: 900px) ": {
      position: "relative",
      left: "30px",
    }
  },
};
