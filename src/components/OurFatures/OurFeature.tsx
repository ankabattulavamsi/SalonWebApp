import React, { Component } from "react";
import { featureData } from "../../utils/data/Features/Features_data";
import featureImg from "../../assets/Features/featureImg.png";
import { Container, Grid, Typography, Box } from "@mui/material";
import { withStyles } from "@mui/styles";
import { styles } from "./OueFeatureStyle";
interface Iprops {
  classes: any;
}
interface Istate {}
class OurFeature extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes }: any = this.props;
    return (
      <Container>
        <Grid container className={classes.feature_info_section}>
          <Grid
            item
            lg={9}
            md={8}
            sm={12}
            xs={12}
            className={classes.feature_content_section}
          >
            <Box className={classes.feature_title_section}>
              <Typography variant="h4">Our best features</Typography>
            </Box>
            <Box className={classes.feature_paraLg_section}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </Typography>
            </Box>
            <Box className={classes.feature_paraSm_section}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Box>

            <Grid container>
              {featureData.map((item: any, id: number) => {
                return (
                  <Grid
                    item
                    lg={5}
                    md={6}
                    sm={6}
                    xs={12}
                    key={id}
                    className={classes.feature_iconBox_section}
                  >
                    <img src={item.img} alt="logos" />
                    <Typography component="h3">{item.title}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            sm={12}
            xs={12}
            className={classes.feature_imageBox_section}
          >
            <img src={featureImg} alt="featureImg" />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(OurFeature);
