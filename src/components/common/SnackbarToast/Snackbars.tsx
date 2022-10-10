import { Alert, AlertColor, Snackbar } from "@mui/material";
import React, { Component } from "react";
interface SnackbarsProps {
  open: boolean;
  type: AlertColor;
  handleClose: (type?: string) => void;
  message: string;
}
interface SnackbarsState {}
export default class Snackbars extends Component<
  SnackbarsProps,
  SnackbarsState
> {
  render() {
    const { handleClose, open, type, message } = this.props;
    return (
      <Snackbar
        open={open}
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => handleClose()}
      >
        <Alert
          onClose={() => handleClose()}
          severity={type}
          sx={{ width: "100%", textTransform: "capitalize" }}
        >
          {message}
        </Alert>
      </Snackbar>
    );
  }
}
