import {
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  Pagination,
  PaginationItem,
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

import "./SalonOwnerPage.css";

class BookingHistoryTable extends Component {
  state = { month: "", date: "", year: "", status: "" };

  handleChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "date") {
      this.setState({ date: value });
    } else if (name === "month") {
      this.setState({ month: value });
    } else if (name === "year") {
      this.setState({ year: value });
    } else if (name === "status") {
      this.setState({ status: value });
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
            mb: 2,
            mt: 5,
            padding: { xs: 3 },
          }}
        >
          <Grid item sx={{ mt: "16px", mb: { xs: "25px !important" } }}>
            <Typography
              variant="h3"
              sx={{}}
              className={classes.bookingHisoryTitlle}
            >
              Booking History
            </Typography>
          </Grid>

          {/* Date and Search filters */}
          <Grid>
            <Grid container spacing={2}>
              <Grid item>
                <FormControl>
                  <Select
                    labelId="date"
                    id="date"
                    value={date}
                    onChange={this.handleChange}
                    name="date"
                    sx={{
                      width: { md: "90px", sm: "84px", xs: "70px" },
                      backgroundColor: "#F0F0F0",
                      outline: "none !important",
                    }}
                    displayEmpty
                  >
                    <MenuItem value="" sx={{ color: "#A4A1A1 !important" }}>
                      DD
                    </MenuItem>
                    <MenuItem value="01">01</MenuItem>
                    <MenuItem value="02">02</MenuItem>
                    <MenuItem value="03">03</MenuItem>
                  </Select>
                </FormControl>

                <Select
                  labelId="month"
                  id="month"
                  value={month}
                  onChange={this.handleChange}
                  name="month"
                  sx={{
                    width: { md: "90px", xs: "70px" },
                    backgroundColor: "#F0F0F0",
                  }}
                  displayEmpty
                >
                  <MenuItem value="" sx={{ color: "#A4A1A1 !important" }}>
                    MM
                  </MenuItem>
                  <MenuItem value="01">01</MenuItem>
                  <MenuItem value="02">02</MenuItem>
                  <MenuItem value="03">03</MenuItem>
                </Select>

                <FormControl>
                  <Select
                    id="year"
                    value={year}
                    onChange={this.handleChange}
                    name="year"
                    sx={{
                      width: { sm: "90px", xs: "70px" },
                      backgroundColor: "#F0F0F0",
                    }}
                    displayEmpty
                  >
                    <MenuItem value="" sx={{ color: "#A4A1A1 !important" }}>
                      YY
                    </MenuItem>
                    <MenuItem value="2022">2022</MenuItem>
                    <MenuItem value="2021">2021</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl>
                  <Select
                    labelId="status"
                    id="status"
                    value={this.state.status}
                    onChange={this.handleChange}
                    name="status"
                    sx={{
                      width: { md: "124px", sm: "84px", xs: "84px" },
                      backgroundColor: "#F0F0F0",
                    }}
                    displayEmpty
                  >
                    <MenuItem value="" sx={{ color: "#A4A1A1 !important" }}>
                      Status
                    </MenuItem>
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
                    sx={{
                      width: { xs: "19rem" },
                      backgroundColor: "#F0F0F0",
                      label: { color: "blue !important" },
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <>
          <div className="web-table">
            <WebTable />
          </div>

          <div className="mobile-table">
            {tableData.map((person: any) => {
              return <MobileTable person={person} key={person.name} />;
            })}
          </div>
        </>
        <Box
          sx={{
            my: 5,
            display: "flex",
          }}
          className={classes.profilePagination + " pagination-booking"}
        >
          <Pagination
            count={7}
            shape="rounded"
            className={classes.paginationItemText}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                classes={{ selected: classes.paginationItem }}
              />
            )}
          />
        </Box>
      </>
    );
  }
}

export default withStyles(Styles)(BookingHistoryTable);
