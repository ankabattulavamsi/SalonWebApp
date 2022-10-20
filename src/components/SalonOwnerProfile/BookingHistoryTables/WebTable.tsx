import React, { Component } from "react";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { tableData } from "../../../utils/data/SalonOwnerData/TableData";
import { Styles } from "../SalonOwnerPage.Styles";
import { withStyles } from "@mui/styles";

class WebTable extends Component {
  state = { month: "", date: "", year: "" };

  handleChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "date") {
      this.setState({ date: value });
    } else if (name === "month") {
      this.setState({ month: value });
    } else {
      this.setState({ month: value });
    }
  };
  render() {
    const { classes }: any = this.props;
    const { date, month, year } = this.state;
    return (
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#F0F0F0" }}>
            <TableRow>
              <TableCell>
                <Typography variant="h6" className={classes.tableHeading}>
                  Customer Name{" "}
                </Typography>
              </TableCell>
              <TableCell>
                {" "}
                <Typography variant="h6" className={classes.tableHeading}>
                  Refer Id
                </Typography>
              </TableCell>
              <TableCell>
                {" "}
                <Typography variant="h6" className={classes.tableHeading}>
                  Time
                </Typography>
              </TableCell>
              <TableCell>
                {" "}
                <Typography variant="h6" className={classes.tableHeading}>
                  Amount
                </Typography>
              </TableCell>
              <TableCell>
                {" "}
                <Typography variant="h6" className={classes.tableHeading}>
                  Status{" "}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: "#F8F8F8" }}>
            {tableData.map((row: any) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ display: "flex" }}>
                  <Avatar
                    src={row.img}
                    sx={{
                      marginRight: "15px",
                    }}
                  />
                  <Typography variant="h6" className={classes.tableRow}>
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" className={classes.tableRow}>
                    {row.referId}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" className={classes.tableRow}>
                    {row.time}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" className={classes.tableRow}>
                    {row.amount}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="h6"
                    className={classes.tableRow}
                    sx={{
                      color:
                        row.status === "pending"
                          ? "green"
                          : "" || row.status === "Canceled"
                          ? "red"
                          : "",
                    }}
                  >
                    {row.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withStyles(Styles)(WebTable);
