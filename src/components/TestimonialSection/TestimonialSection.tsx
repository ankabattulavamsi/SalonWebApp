import { Box, Grid } from "@mui/material";
import React from "react";
import { bgImage } from "../../utils/fixtures/testomonialSection/test";

interface TestimonialSectionProps {}

interface TestimonialSectionState {}

class TestimonialSection extends React.Component<
  TestimonialSectionProps,
  TestimonialSectionState
> {
  constructor(props: TestimonialSectionProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Box>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  bgcolor: "#EBB273",
                  background: `linear-gradient(180deg, #EBB273  , rgba(0,0,0,0.08), transparent),url(${bgImage}) no-repeat`,
                  height: "40vh",
                  backgroundSize: "cover",
                  width: "100%",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12}>
              new box
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

export default TestimonialSection;
