/** @format */
import React, { Component } from "react";
import { Box, Button, Dialog, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./delete.css";
import { Stack } from "@mui/system";
interface IProps {
  jobTitle: string;
  open: boolean;
  onClose: any;
  handleConfirmDelete?: (id?: string | number) => void;
  deletedId?: string | number;
}

export default class DeleteModal extends Component<IProps> {
  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.onClose}>
        <Box className="deleteBox">
          <DeleteOutlineOutlinedIcon className="deleteIcon" />
          <Typography variant="h3" className="titleJob" component="h3">
            Delete {this.props.jobTitle} ?
          </Typography>
          <Typography variant="body1">
            Are you sure want to delete this {this.props.jobTitle}?
          </Typography>
          <Stack className="groupButton">
            <Button
              onClick={this.props.onClose}
              variant="outlined"
              className="buttonSec cancel"
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              className="buttonSec confirm"
              onClick={() => {
                this.props.handleConfirmDelete &&
                  this.props.handleConfirmDelete(this.props.deletedId);
              }}
            >
              Confirm
            </Button>
          </Stack>
        </Box>
      </Dialog>
    );
  }
}
