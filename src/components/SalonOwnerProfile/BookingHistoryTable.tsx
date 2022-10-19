import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import React, { Component } from "react";
import { tableData } from "../../utils/data/SalonOwnerData/TableData";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { withStyles } from "@mui/styles";
import { Styles } from "./SalonOwnerPage.Styles";
import MobileTable from "./BookingHistoryTables/MobileTable";
import WebTable from "./BookingHistoryTables/WebTable";
import { Box } from "@mui/system";

class BookingHistoryTable extends Component {
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
      <>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: 5,
            padding: { xs: 3 },
          }}
        >
          <Grid item sx={{ mt: "16px" }}>
            <Typography
              variant="h3"
              sx={{}}
              className={classes.bookingHisoryTitlle}
            >
              Booking History
            </Typography>
          </Grid>
          <Grid>
            <Grid container spacing={2}>
              <Grid item>
                <FormControl>
                  <InputLabel id="date">DD</InputLabel>
                  <Select
                    labelId="date"
                    id="date"
                    value={date}
                    onChange={this.handleChange}
                    name="date"
                    label="DD"
                    sx={{
                      width: { md: "90px", sm: "84px", xs: "84px" },
                    }}
                  >
                    <MenuItem value="01">01</MenuItem>
                    <MenuItem value="02">02</MenuItem>
                    <MenuItem value="03">03</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="month">MM</InputLabel>
                  <Select
                    labelId="month"
                    id="month"
                    value={month}
                    onChange={this.handleChange}
                    name="month"
                    label="MM"
                    sx={{
                      width: { md: "90px", xs: "84px" },
                    }}
                  >
                    <MenuItem value="01">01</MenuItem>
                    <MenuItem value="02">02</MenuItem>
                    <MenuItem value="03">03</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="year">YY</InputLabel>
                  <Select
                    labelId="year"
                    id="year"
                    value={year}
                    onChange={this.handleChange}
                    name="year"
                    label="YY"
                    sx={{
                      width: "90px",
                    }}
                  >
                    <MenuItem value="2022">2022</MenuItem>
                    <MenuItem value="2021">2021</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl>
                  <InputLabel id="year">Status</InputLabel>
                  <Select
                    labelId="year"
                    label="Status"
                    id="year"
                    value={year}
                    onChange={this.handleChange}
                    name="year"
                    sx={{
                      width: { md: "124px", sm: "84px", xs: "84px" },
                    }}
                  >
                    <MenuItem value="done">Done</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="canceled">Canceled</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl>
                  <TextField
                    placeholder="Search"
                    type="search"
                    variant="outlined"
                    // onChange={handleSearchFieldOnChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <SearchOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <>
          {window.innerWidth > 600 ? (
            <>
              <WebTable />
            </>
          ) : (
            tableData.map((person: any) => {
              return <MobileTable person={person} />;
            })
          )}
        </>
        <Box sx={{ my: 5, display: "flex", justifyContent: "flex-end" }}>
          <Pagination
            count={12}
            shape="rounded"
            sx={{
              
            }}
          />
        </Box>
      </>
    );
  }
}

export default withStyles(Styles)(BookingHistoryTable);
