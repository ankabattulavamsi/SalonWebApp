import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  bgColorImage,
  bgImage,
  TestmonialData,
  testmonialData,
} from "../../utils/fixtures/testomonialSection/test";
import "./TestimonialSection.css";

interface TestimonialSectionProps {}

interface TestimonialSectionState {}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1113 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
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
                  backgroundPosition: "center center",
                  overflow: "hidden",
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

                <Box>
                  <Container
                    maxWidth="lg"
                    sx={{ display: "grid", height: "100%" }}
                  >
                    <Carousel
                      swipeable={false}
                      draggable={false}
                      showDots={true}
                      responsive={responsive}
                      ssr={false} // means to render carousel on server-side.
                      infinite={true}
                      autoPlay={false}
                      autoPlaySpeed={1000}
                      customTransition="all .5"
                      transitionDuration={500}
                      arrows={false}
                    >
                      {testmonialData.map(
                        (testm: TestmonialData, index: number) => {
                          return (
                            <Box
                              key={testm.id}
                              sx={{
                                display: "flex",
                                justifyContent: "space-evenly",
                              }}
                            >
                              <Box
                                sx={{
                                  position: "relative",
                                }}
                              >
                                <Box
                                  sx={{
                                    position: "absolute",
                                    top: "-500%",
                                    width: "555px",
                                    left: 0,
                                    zIndex: 100,
                                    overflow: "visible",
                                  }}
                                >
                                  <Card
                                    sx={{
                                      maxWidth: "100%",
                                      minHeight: "406px",
                                    }}
                                  >
                                    <Typography>{testm.comments}</Typography>
                                  </Card>{" "}
                                </Box>
                                <Avatar
                                  src={testm.imageUrl}
                                  alt={testm.title}
                                  sx={{
                                    width: "90px",
                                    height: "90px",
                                  }}
                                />
                              </Box>
                              <Box>
                                <Typography>{testm.title}</Typography>
                                <Typography>{testm.type}</Typography>
                              </Box>
                            </Box>
                          );
                        }
                      )}
                    </Carousel>
                  </Container>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

export default TestimonialSection;
