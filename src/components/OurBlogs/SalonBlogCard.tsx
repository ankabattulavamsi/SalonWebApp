import React, { Component } from 'react'
import { withStyles } from '@mui/styles';
import { BlogStyles } from './OurBlog.Style';
import { Box, Button, Grid, Typography } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { blogsData } from '../../utils/data/blogs/blogs_data';

interface blogProps{
    classes: any;
}
interface salonBlogS {
    cardActive: number;
  }
class SalonBlogCard extends Component<blogProps, salonBlogS> {
    state = {
        cardActive: 0,
      };

      handlecardActive = (id: number) => {
        this.setState({ cardActive: id });
      };
  render() {
    const {classes} = this.props;
    return (
      <>
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            columnSpacing={4}
            rowSpacing={3}
            sx={{ px: { sm: 4, xs: 2, md: 0, lg: 0 } }}
          >
            {blogsData.map((item) => {
              return (
                <Grid item lg={3} md={3} xs={12} sm={6} key={item.id}>
                  <Box
                    className={classes.salonBlogCard}
                    onMouseEnter={() => this.handlecardActive(item.id)}
                    onMouseLeave={() => this.setState({ cardActive: 0 })}
                  >
                    <Box sx={{ position: "relative" }}>
                      <img
                        height="230"
                        width="100%"
                        src={item.image}
                        alt="blog 1"
                      />
                      <Box
                        sx={{
                          width: { sm: "20%", md: "30%", lg: "20%" },
                          position: "absolute",
                          left: "40%",
                          top: "78%",
                          py: 1,
                          px: 2,
                          background:
                            this.state.cardActive === item.id
                              ? "#E7A356"
                              : "#272522",
                          color:
                            this.state.cardActive === item.id
                              ? "#fff"
                              : "#E7A356",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography className={classes.blogDate}>
                          {item.date}
                        </Typography>
                        <Typography className={classes.blogMonth}>
                          {item.month}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography className={classes.salonBlogCardTitle}>
                      {item.name}
                    </Typography>
                    <Typography className={classes.salonBlogCardText}>
                      {item.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "5%",
                      }}
                    >
                      <Button
                        startIcon={<EditIcon />}
                        className={classes.salonEditBtn}
                        sx={{
                          background:
                            this.state.cardActive === item.id
                              ? "#E7A356"
                              : "#fff",
                          color:
                            this.state.cardActive === item.id
                              ? "#fff"
                              : "#88878F",
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        startIcon={<DeleteIcon />}
                        className={classes.salonDelBtn}
                        sx={{
                          background:
                            this.state.cardActive === item.id
                              ? "#272522"
                              : "#fff",
                          color:
                            this.state.cardActive === item.id
                              ? "#fff"
                              : "#88878F",
                        }}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
      </>
    )
  }
}
export default withStyles(BlogStyles)(SalonBlogCard);