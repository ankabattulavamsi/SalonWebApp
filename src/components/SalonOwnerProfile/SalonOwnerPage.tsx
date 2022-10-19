import {
  Avatar,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { Component } from "react";
import LockIcon from "@mui/icons-material/Lock";
import { ButtonData } from "../../utils/data/SalonOwnerData/ButtonData";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

// import "../App.css";
import { tableData } from "../../utils/data/SalonOwnerData/TableData";

class SalonOwnerPage extends Component {
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
    const { date, month, year } = this.state;
    return (
      <Container
        sx={{ mx: "auto", pl: { xs: 1, md: 4 }, pr: { xs: 1, md: 4 }, mt: 2 }}
      >
        <Box>
          <Box sx={{ position: "relative" }}>
            <img
              src={require("../../assets/images/SalonOwnerProfile/HeaderImages/bg.png")}
              alt="banner"
              width="100%"
              // height="155px"
            />
            <Avatar
              src={require("../../assets/images/SalonOwnerProfile/HeaderImages/Profile.png")}
              sx={{
                width: { md: "140px", xs: "94px" },
                height: { md: "140px", xs: "94px" },
                // marginRight: "20px",
                position: "absolute",
                top: "70%",
                ml: { md: "8%", lg: "16%", sm: "14%" },
              }}
            />
          </Box>
        </Box>

        <Grid container>
          <Grid item sx={{ ml: { xs: "auto" } }}></Grid>
          <Grid
            item
            xs={7}
            md={4}
            sm={3}
            sx={{ margin: "0 !important", marginRight: "auto" }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Fira Sans",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: { md: "25px", xs: "22px" },
                lineHeight: "50px",
                textTransform: "capitalize",
                color: "#000000",
              }}
            >
              Steve Smith
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: { md: "18px", xs: "16px" },
                letterSpacing: "0.02em",
                textTransform: "lowercase",
                color: "#88878F",
              }}
            >
              stevesmith@example.com
            </Typography>
            <Button
              sx={{
                fontFamily: "Fira Sans",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: { md: "18px", xs: "17px" },
                letterSpacing: "0.02em",
                textDecorationLine: "underline",
                textTransform: "capitalize",
                color: "#FF0034",
              }}
            >
              <LockIcon />
              Change Passcode
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{
                fontFamily: "Fira Sans",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "16px",
                height: "57px",
                width: { md: "251px", xs: "231" },
                textAlign: "center",
                letterSpacing: "0.05em",
                textTransform: "capitalize",
                color: "#FFFFFF",
                backgroundColor: "#272522",
                borderRadius: "5px",
                padding: "5px",
                m: 2,
                "&:hover": {
                  backgroundColor: "#272522",
                },
              }}
            >
              Edit Bussness Details
            </Button>
            <Button
              sx={{
                height: { md: "57px", sm: "57px" },
                width: { md: "149px", xs: "133px !important" },
                fontFamily: "Fira Sans",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "48px",
                textAlign: "center",
                letterSpacing: "0.02em",
                textTransform: "capitalize",
                background: "#E7A356",
                borderRadius: "5px",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#E7A356",
                },
              }}
            >
              Log Out
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {ButtonData.map((button: any) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Button className="button-container">
                  <img
                    src={button.buttonImg}
                    alt="button"
                    style={{ width: "52px", height: "52px" }}
                  />
                  <Typography variant="h6" className="button-name">
                    {button.name}
                  </Typography>
                </Button>
              </Grid>
            );
          })}
        </Grid>

        {/* Table date filters and search */}

        <Grid container sx={{ my: 3 }}>
          <Grid container sx={{ mt: 3, mx: "auto" }} spacing={2}>
            <Grid item md={4} sm={3}>
              {" "}
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Fira Sans",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "50px",
                  textTransform: "capitalize",
                  color: "#000000",
                }}
              >
                Booking History
              </Typography>
            </Grid>
            <Grid item md={8} sm={9}>
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
                      <MenuItem value="2022">2022</MenuItem>
                      <MenuItem value="2021">2021</MenuItem>
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
        </Grid>
        <TableContainer sx={{ mb: 3 }}>
          <Table aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#F0F0F0" }}>
              <TableRow>
                <TableCell>
                  <Typography variant="h6" className="table-heading">
                    Customer Name{" "}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography variant="h6" className="table-heading">
                    Refer Id
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography variant="h6" className="table-heading">
                    Time
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography variant="h6" className="table-heading">
                    Amount
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography variant="h6">Status </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: "#F8F8F8" }}>
              {tableData.map((row: any) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ display: "flex" }}
                  >
                    <Avatar
                      src={row.img}
                      sx={{
                        marginRight: "15px",
                        borderRight: "dotted 1px red",
                      }}
                    />
                    <Typography variant="h6" className="table-row">
                      {row.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" className="table-row">
                      {row.referId}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" className="table-row">
                      {row.time}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" className="table-row">
                      {row.amount}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="h6"
                      className="table-row"
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
      </Container>
    );
  }
}

export default SalonOwnerPage;
