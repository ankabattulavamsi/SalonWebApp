import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component, Fragment } from "react";

export class CommonViewAllButton extends Component {
  render() {
    return (
      <>
        <Box
          sx={{
            backgroundColor: "#272522",
            borderRadius: "8px",
            width: { xs: "110px", sm: "160px", lg: "200px" },
            textAlign: "center",
            ml: { lg: "auto", sm: "auto" },
            mr: 0,
          }}
        >
          <Button
            sx={{
              color: "#FFFFFF",
              fontFamily: "Fira Sans",
              fontWeight: 700,
              letterSpacing: "0.02em",
              fontSize: { xs: "16px", sm: "20px", lg: "24px" },
            }}
          >
            View All
          </Button>
        </Box>
      </>
    );
  }
}

export default CommonViewAllButton;