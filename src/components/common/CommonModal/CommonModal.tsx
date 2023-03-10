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
      <Box>
        <>
          <BootstrapDialog
            onClose={() => handleClose()}
            open={open}
            sx={{ mt: -10, maxWidth: "xl" }}
            className="common-modal"
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
                  right: -8,
                  top: 0,
                  color: "#ffffff",
                  fontSize: "1.5rem",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <DialogContent
              dividers
              className="scrollbar--hide"
              sx={{ bgcolor: "#fff", width: "100%", height: "100%" }}
            >
              {children}
            </DialogContent>
          </BootstrapDialog>
        </>
      </Box>
    );
  }
}

export default CommonModal;
