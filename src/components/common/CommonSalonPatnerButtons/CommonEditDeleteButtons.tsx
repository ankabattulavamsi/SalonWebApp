import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

import '../../../components/OffersSection/SalonBestOffers.css'

class CommonEditDeleteButtons extends Component {
  render() {
    return (
      <Box 
        sx={{
          display: "flex",
          borderRadius: "5px",
          backgroundColor: "#FFFFFF",
          m: 1,
          width: "320px",
        }}
      >
        <Box 
        className='edit-button1'
          sx={{
            display: "flex",
            cursor: "pointer",
            p: 1,
            pr: 4,
            pl:4,
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
        >
          <ModeEditIcon style={{ marginTop: "10px" }} className='edit-icon' />
          <Button 
          className="best-offers-edit-text"
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            Edit
          </Button>
        </Box>

        <Divider sx={{ border: "1px solid #88878F", opacity: "0.2"  }} className='buttons-border-line' />

        <Box
        className='delete-button2'
          sx={{
            display: "flex",
            cursor: "pointer",
            p: 1,
            pl: 3,
            pr: 5,
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        >
          <DeleteIcon style={{ marginTop: "10px" }} className='delete-icon' />
          <Button 
          className="best-offers-delete-text"
            sx={{
              fontFamily: "Fira Sans",
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            Delete
          </Button>
        </Box>
      </Box>
    );
  }
}

export default CommonEditDeleteButtons;
