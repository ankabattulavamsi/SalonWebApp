import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import {
  bgColorImage,
  bgImage,
  TestmonialData,
  testmonialData,
} from "../../utils/fixtures/testomonialSection/test";
import "./TestimonialSection.css";
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
                  background: `url(${bgImage}) no-repeat`,
                  height: "40vh",
                  backgroundSize: "cover",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h3"
                  component={"h3"}
                  className="underline-testimonials"
                  sx={{
                    fontSize: "35px",
                  }}
                >
                  Testimonials
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  bgcolor: "#EBB273",
                  background: `url(${bgColorImage}) no-repeat`,
                  height: "40vh",
                  backgroundSize: "cover",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {testmonialData.map((testm: TestmonialData, index: number) => {
                  return (
                    <Box key={testm.id}>
                      <Box>
                        <Avatar src={testm.imageUrl} alt={testm.title} />
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

export default TestimonialSection;
