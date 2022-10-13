import React from "react";
import { Edit, Delete } from "@mui/icons-material";
import { Card, CardMedia, CardActions, Button } from "@mui/material";
import { withStyles } from "@mui/styles";
import { stylesCard } from "./Cards";
import { Box } from "@mui/system";
import "./GalleryOwner.styles.css";
interface GalleryCardProps {
  classes: any;
  imgUrl: string;
  id: number;
}
interface GalleryCardState {}
class GalleryCard extends React.Component<GalleryCardProps, GalleryCardState> {
  render() {
    const { classes, id, imgUrl } = this.props;
    return (
      <Card sx={{ width: "100%" }} className={`cards ${classes.card}`}>
        <CardMedia
          component="img"
          alt={`${id}`}
          image={imgUrl}
          src={imgUrl}
          sx={{ borderRadius: "4px" }}
          className={classes.imgCard}
        />

        <CardActions className={`cardActio ${classes.cardActions}`}>
          <Box
            sx={{
              width: "100%",
              mx: "auto",
              justifyContent: "center",
              gap: "50px",
            }}
          >
            <Button className={classes.buttonClass}>
              <Edit />
            </Button>
            <Button className={classes.buttonClass}>
              <Delete />
            </Button>
          </Box>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(stylesCard)(GalleryCard);
