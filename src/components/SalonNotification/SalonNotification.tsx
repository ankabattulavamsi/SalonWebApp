/** @format */

import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTitleProps,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import {
  notificationData,
  notify,
} from "../../utils/data/notification/salonNotificationData";

import "./SalonNotification.css";
import { NotificationStyles } from "./SalonNotification.style";

type NotiProps = {
  open: boolean;
  onClose: any;
  classes: any;
};

type State = {};

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        padding: " 16px 24px",
        fontFamily: "Fira Sans",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "38px",
        letterSpacing: "0.01em",
        textTransform: "capitalize",
        color: "#272522",
      }}
      {...other}
    >
      {children}
    </DialogTitle>
  );
};

class SalonNotification extends Component<NotiProps, State> {
  state = {};

  render() {
    const { open, onClose, classes } = this.props;

    return (
      <>
        <Dialog
          aria-labelledby="customized-dialog-title"
          open={open}
          onClose={onClose}
          disableScrollLock={true}
          className={`${classes.MainDialogBox} main-notification`}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            className={classes.DialogTitleBox}
          >
            Notification
          </BootstrapDialogTitle>
          <DialogContent dividers className={classes.listItemNotificationBox}>
            {notificationData.map((notification: notify, index: any) => {
              return (
                <List
                  sx={{ width: "320px", height: "103px" }}
                  className={classes.listItemNotification}
                  key={index}
                >
                  <ListItem sx={{ padding: 0 }}>
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          width: "64px",
                          height: "64px",
                          marginBottom: "10px",
                        }}
                        alt="notify-Img"
                        src={notification.image}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.listItemNotificationText}
                      primaryTypographyProps={{
                        fontFamily: "Fira Sans",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "17px",
                        lineHeight: "22px",
                        textTransform: "capitalize",
                        color: " #272522",
                      }}
                      secondaryTypographyProps={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "15px",
                        lineHeight: "30px",
                        textTransform: "uppercase",
                        color: " #272522",
                      }}
                      primary={notification.text}
                      secondary={notification.time}
                    />
                  </ListItem>
                  <Divider />
                </List>
              );
            })}
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

export default withStyles(NotificationStyles)(SalonNotification);
