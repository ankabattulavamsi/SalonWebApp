import React, { Component } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
} from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { withStyles } from "@mui/styles";
import { styles } from "./SalonCategory.style";

import { salonCategoryData } from "../../utils/data/SalonCategory/SalonCategory_data";



interface categoryProps{
    classes: any
}
class SalonCategory extends Component <categoryProps> {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Container className={classes.categoryBox}>
          <Box className={classes.categoryTitleBox}>
            <Typography variant="h2">Category</Typography>
            <Button>View all Category</Button>
          </Box>
          <Grid container spacing={4} className={classes.categoryImageBox}>
            {salonCategoryData.map((item: any) => {
              return (
                <Grid item 
                  lg={4} 
                  md={4} 
                  sm={6} 
                  xs={12} 
                  key={item.id}
                >
                  <Card className={classes.categoryCard}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.categoryImage}
                        image={item.img}
                        title="categoryImg"
                      />
                      <CardContent className={classes.categoryContent}>
                        <Typography>{item.title}</Typography>
                      </CardContent>
                      <CardActions className={classes.categoryButton}>
                        <Button><EditIcon/>{item.editButton}</Button>
                        <Button><DeleteIcon/>{item.deleteButton}</Button>
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(SalonCategory);
