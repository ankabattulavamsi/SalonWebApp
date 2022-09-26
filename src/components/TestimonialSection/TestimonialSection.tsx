import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import {
  bgColorImage,
  bgImage,
  TestmonialData,
  testmonialData,
} from "../../utils/fixtures/testomonialSection/test";
import "./TestimonialSection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
interface TestimonialSectionProps {}

interface TestimonialSectionState {}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1113 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1113, min: 763 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 763, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

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
                <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots
                  responsive={responsive}
                  ssr={false} // means to render carousel on server-side.
                  infinite
                  autoPlay
                  autoPlaySpeed={4000}
                  keyBoardControl={true}
                  customTransition="all 0.7"
                  transitionDuration={700}
                  containerClass="container"
                  deviceType={"mobile  | tablet"}
                  dotListClass="custom-dot-list-style"
                >
                  {testmonialData.map(
                    (testm: TestmonialData, index: number) => {
                      return (
                        <Box key={testm.id}>
                          <Box>
                            <Avatar src={testm.imageUrl} alt={testm.title} />
                          </Box>
                        </Box>
                      );
                    }
                  )}
                </Carousel>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

export default TestimonialSection;
