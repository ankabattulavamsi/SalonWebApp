import React, { Component } from 'react'
import { withStyles } from "@mui/styles";
import { Styles } from "./GalleryStyles";

import { Grid, Typography, Box } from "@mui/material";
import { GallaryImgs } from '../../utils/fixtures/GallaryData';

export class Gallery extends Component {
    render() {
        const { classes }: any = this.props;
        return (

            <Grid>
                <Box className={classes.Gallery_heading}>
                    <Typography variant='h4'>Salon Gallery</Typography>
                </Box>
                <Grid container sx={{ justifyContent: "center", textAlign: "center", margin: "30px 0" }}>
                    {
                        GallaryImgs.map((item: any, i: any) => {
                            return (
                                <Grid key={i}>
                                    <Grid item lg={4} md={4} sm={12} xs={12} sx={{ padding: 1 }}>
                                        <img src={item.img} />
                                    </Grid>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(Styles)(Gallery)
