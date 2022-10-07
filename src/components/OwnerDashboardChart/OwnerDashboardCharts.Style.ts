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
    // marginBottom: "20px",
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
    marginTop: "48px",
    "@media only screen and (max-width: 660px) ": {
      margin: "auto",
     textIndent:'start !important',
     display: "flex",
     justifyContent: "flex-start",
     alignItems: "center",
    },
    "@media (min-width: 660px) and (max-width: 920px) ": {
      margin: "auto",
    },
  },
  };

