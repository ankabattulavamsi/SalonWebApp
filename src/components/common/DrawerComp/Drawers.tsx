import { Button, Drawer } from "@mui/material";
import React, { Component } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import "./Drawer.css";
import { withStyles } from "@mui/styles";
import { DrawerStyles } from "./Drawers.styles";
interface DrawersProps {
  open: boolean;
  toggleDrawer: (type?: string) => void;
  children: React.ReactNode;
  classes: any;
  anchor?: "bottom" | "left" | "right" | "top";
}
class Drawers extends Component<DrawersProps, {}> {
  render() {
    const { children, open, toggleDrawer, classes, anchor } = this.props;
    return (
      <>
        <Drawer
          anchor={anchor ? anchor : "right"}
          open={open}
          onClose={() => toggleDrawer()}
        >
          <Box
            sx={{
              ml: { xs: "1rem", md: "1rem" },
              mt: { xs: "1rem", md: "1rem" },
            }}
          >
            <Button
              role="button"
              onClick={() => toggleDrawer()}
              onKeyDown={() => toggleDrawer()}
            >
              <CloseIcon className={classes.icon} />
            </Button>
          </Box>
          <Box sx={{ px: 4 }}>{children}</Box>
        </Drawer>
      </>
    );
  }
}

export default withStyles(DrawerStyles)(Drawers);
