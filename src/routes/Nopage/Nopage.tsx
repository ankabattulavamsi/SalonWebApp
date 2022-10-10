import { Box, Typography } from "@mui/material";
import React, { Component } from "react";

export default class Nopage extends Component {
  render() {
    return (
      <Box>
        <Typography
          component={"h2"}
          textAlign="center"
          textTransform={"uppercase"}
          sx={{ fontSize: { xs: "3rem", sm: "5rem", md: "10rem" } }}
        >
          404 Not Found
        </Typography>
      </Box>
    );
  }
}
