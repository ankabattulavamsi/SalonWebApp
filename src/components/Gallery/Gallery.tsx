import React, { Component } from 'react'

import { Grid, Typography } from "@mui/material";
import { GallaryImgs } from '../../utils/fixtures/GallaryData';

export class Gallery extends Component {
    render() {
        return (
            <Grid >
                <Typography sx={{ fontSize: "30px", textAlign: "center", color: "black", fontWeight: "600", fontFamily: 'Fira Sans' }}>Salon Gallery</Typography>
                <Grid container sx={{ justifyContent: "center", textAlign: "center", }}>
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

export default Gallery
