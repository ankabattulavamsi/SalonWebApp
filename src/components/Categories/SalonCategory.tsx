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

import CommonViewAllButton from "../common/CommonSalonPatnerButtons/CommonViewAllButton";
import { salonCategoryData } from "../../utils/data/SalonCategory/SalonCategory_data";
import WithRouterHoc from "../common/CommonNavigateComp/WithRouterHoc";
interface categoryProps{
    classes: any,
    navigate: any
}
class SalonCategory extends Component <categoryProps> {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Container className={classes.categoryBox}>
          <Box className={classes.categoryTitleBox}>
            <Typography variant="h2">Category</Typography>
            <CommonViewAllButton 
              buttonName="View All Category" 
              onClickNavigateOffersPage={()=>{}}
            />
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
                      <CardActions className={classes.categoryButtonBox}>
                        <Button><EditIcon/>{item.editButton}</Button>
                        <Button ><DeleteIcon/>{item.deleteButton}</Button>
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

export default WithRouterHoc(withStyles(styles)(SalonCategory));
