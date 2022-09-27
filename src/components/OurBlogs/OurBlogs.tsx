import React, { Component } from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import {withStyles} from '@mui/styles';

import { BlogStyles } from './OurBlog.Style';
import blog1 from '../../assets/images/Blogimages/blogimg-1.png';
import blog2 from '../../assets/images/Blogimages/blogimg-2.png';
import blog3 from '../../assets/images/Blogimages/blogimg-3.png';

interface blogProps{
    classes: any;
}
class OurBlogs extends Component<blogProps> {
    render() {
        const {classes} = this.props;

        return (
            <>
                <Box sx={{mb:10}}>
                    <Box>
                        <Typography className={classes.blogHeading}>
                            Our Blogs
                        </Typography>
                        <Typography sx={{width:'30px',borderBottom:'5px solid #EBB273'}}></Typography>
                    </Box>
                    <Grid container justifyContent='center' columnSpacing={4}
                    rowSpacing={3}
                    >
                        <Grid item lg={3} md={3} xs={12} sm={12}>
                            <Card className={classes.blogCard} >
                                <CardMedia
                                component="img"
                                height="200"
                                image={blog1}
                                alt="blog 1"
                                />
                                <CardContent>
                                    <Box>
                                        <Box 
                                            sx={{
                                                width:'20%',
                                                position:'relative',
                                                left:'40%',
                                                top:'250%',
                                                zIndex:1,
                                                py:2,
                                                px:2,
                                                background:'#272522',
                                                borderRadius:'5px',
                                                // display:'flex',
                                                // alignItems:'center',
                                                // justifyContent:'center'
                                            }}
                                        >
                                            <Typography sx={{textAlign:'center'}}>
                                                25
                                            </Typography>
                                            <Typography sx={{textAlign:'center'}}>
                                                June
                                            </Typography>
                                        </Box>
                                        <Typography className={classes.blogCardTitle}>
                                            Men Haircut new style
                                        </Typography>
                                        <Typography className={classes.blogCardText}>
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={3} md={3} xs={12} sm={12}>
                            <Card className={classes.blogCard}>
                                <CardMedia
                                component="img"
                                height="200"
                                image={blog2}
                                alt="blog 2"
                                />
                                <CardContent>
                                    <Box>
                                        <Typography className={classes.blogCardTitle}>
                                         eyebrow shapes
                                        </Typography>
                                        <Typography className={classes.blogCardText}>
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={3} md={3} xs={12} sm={12}>
                            <Card className={classes.blogCard}>
                                <CardMedia
                                component="img"
                                height="200"
                                image={blog3}
                                alt="blog 3"
                                />
                                <CardContent>
                                    <Box>
                                        <Typography className={classes.blogCardTitle}>
                                            Top 5 benefits facial
                                        </Typography>
                                        <Typography className={classes.blogCardText}>
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </>
        );
    }
}

export default withStyles(BlogStyles)(OurBlogs);