import { Avatar, Box, Stack, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { useState } from "react";
import { Styles } from "../SalonOwnerPage.Styles";

const MobileTable = ({ person, classes }: any) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Box
      sx={{
        maxWidth: "500px",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px",
          backgroundColor: "#F8F8F8",
        }}
        onClick={() => setIsActive(!isActive)}
      >
        <Box sx={{ display: "flex" }}>
          <Avatar src={person.img} sx={{ width: "58px", height: "58px" }} />
          <Typography variant="h6" className={classes.profileName}>
            {person.name}
          </Typography>
        </Box>
        <Typography>
          {isActive ? (
            <Avatar
              src={require("../../../assets/images/SalonOwnerProfile/MobileTableIcons/activeProfileIcon1.png")}
            />
          ) : (
            <Avatar
              src={require("../../../assets/images/SalonOwnerProfile/MobileTableIcons/activeProfileIcon2.png")}
            />
          )}
        </Typography>
      </Box>
      {isActive && (
        <Stack sx={{ backgroundColor: "#F0F0F0 !important" }}>
          <Box className={classes.profileNameContainer}>
            <Typography
              variant="body2"
              className={classes.mobileTableColumnHeading}
            >
              Refer Id
            </Typography>
            <Typography variant="body1" className={classes.mobileTableValue}>
              {person.referId}
            </Typography>
          </Box>
          <Box className={classes.profileNameContainer}>
            <Typography
              variant="body2"
              className={classes.mobileTableColumnHeading}
            >
              Time
            </Typography>
            <Typography variant="body1" className={classes.mobileTableValue}>
              {person.time}
            </Typography>
          </Box>
          <Box className={classes.profileNameContainer}>
            <Typography
              variant="body2"
              className={classes.mobileTableColumnHeading}
            >
              Amount
            </Typography>
            <Typography variant="body1" className={classes.mobileTableValue}>
              {person.amount}
            </Typography>
          </Box>
          <Box className={classes.profileNameContainer}>
            <Typography
              variant="body2"
              className={classes.mobileTableColumnHeading}
            >
              Status
            </Typography>
            <Typography variant="body1" className={classes.mobileTableValue}>
              {person.status}
            </Typography>
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default withStyles(Styles)(MobileTable);
