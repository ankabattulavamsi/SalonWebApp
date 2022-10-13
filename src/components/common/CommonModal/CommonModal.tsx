import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import "./CommonModal.css";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface CommonModalProps {
  handleClose: (type?: string) => void;
  open: boolean;
  children: React.ReactNode;
}
interface CommonModalState {}
class CommonModal extends React.Component<CommonModalProps, CommonModalState> {
  render() {
    const { handleClose, open, children } = this.props;
    return (
      <Box className="common-modal">
        <BootstrapDialog
          onClose={() => handleClose()}
          open={open}
          sx={{ mt: -10 }}
        >
          <Box
            sx={{
              bgcolor: "transparent",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
              position: "relative",
              height: "3rem",
              background: "transparent",
            }}
          >
            <IconButton
              aria-label="close"
              onClick={() => handleClose()}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <DialogContent dividers sx={{ bgcolor: "#fff" }}>
            {children}
          </DialogContent>
        </BootstrapDialog>
      </Box>
    );
  }
}

export default CommonModal;
