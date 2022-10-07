import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Component } from "react";
import { Edit, Delete } from "@mui/icons-material";
import {
  gallaryData,
  GallaryData,
} from "../../utils/data/GalleryOwner/Gallery";
import ViewAll from "../common/ViewBtn/ViewAll";
import { galleryStyles } from "./GalleryOwners.styles";
import "./GalleryOwner.styles.css";
interface GalleryOwnerProps {
  classes: any;
}
interface GalleryOwnerState {}
class GalleryOwner extends Component<GalleryOwnerProps, GalleryOwnerState> {
  render() {
    const { classes } = this.props;
    return (
      <Box>
        <Container maxWidth={"lg"}>
          <Box className={classes.titlebox}>
            <Box>
              <Typography
                className={`underline-download-app  ${classes.titleText}`}
              >
                Our Gallery
              </Typography>
            </Box>
            <Box className={classes.viewBox}>
              <ViewAll title="view all gallery" />
            </Box>
          </Box>

          <Grid container spacing={2}>
            {gallaryData.map((images: GallaryData) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={images.id}>
                  <Card
                    sx={{ width: "100%" }}
                    className={`cards ${classes.card}`}
                  >
                    <CardMedia
                      component="img"
                      alt={`${images.id}`}
                      image={images.imgUrl}
                      src={images.imgUrl}
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
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default withStyles(galleryStyles)(GalleryOwner);
