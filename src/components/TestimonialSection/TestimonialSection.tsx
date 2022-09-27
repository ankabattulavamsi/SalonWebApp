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
          <>
            <>
              <Box
                sx={{
                  bgcolor: "#EBB273",
                  background: `url(${bgImage}) no-repeat`,
                  height: "auto",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  overflow: "hidden",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Typography
                  variant="h3"
                  component={"h3"}
                  className="underline-testimonials"
                  sx={{
                    fontSize: "35px",
                    mt: 20,
                  }}
                >
                  Testimonials
                </Typography>

                <Box sx={{}}>
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
                                justifyContent: "center",
                                mb: 10,
                                gap: 2,
                                mt: 45,
                                ml: 0,
                              }}
                            >
                              <Box className="card-test-box">
                                <Box
                                  className="card-test"
                                  sx={{
                                    position: "absolute",
                                    top: "15px",
                                    left: "10px",
                                    zIndex: 100,
                                  }}
                                >
                                  <Card
                                    className="card-background"
                                    sx={{
                                      maxWidth: "90%",
                                      height: "206px",
                                      p: 4,
                                      m: 2,
                                      bgcolor: "#FFFFFF",
                                      color: "#88878F",
                                      ":hover": {
                                        bgcolor: "#272522",
                                        color: "#939290",
                                      },
                                      borderRadius: "10px",
                                      boxShadow:
                                        "10px 4px 40px rgba(0, 0, 0, 0.1)",
                                    }}
                                  >
                                    <Typography
                                      className="comments-testm"
                                      sx={{
                                        fontSize: {
                                          xs: "14px",
                                          sm: "16px",
                                          md: "18px",
                                        },
                                      }}
                                    >
                                      {testm.comments}
                                    </Typography>
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
                                <Typography
                                  className="test-item-title"
                                  textAlign={"left"}
                                  sx={{
                                    fontSize: { xs: "18px", md: "24px" },
                                  }}
                                >
                                  {testm.title}
                                </Typography>
                                <Typography
                                  textAlign={"left"}
                                  sx={{
                                    fontSize: { xs: "15px", md: "18px" },
                                  }}
                                  className="test-item-para"
                                >
                                  {testm.type}
                                </Typography>
                              </Box>
                            </Box>
                          );
                        }
                      )}
                    </Carousel>
                  </Container>
                </Box>
              </Box>
            </>
          </>
        </Box>
      </>
    );
  }
}

export default TestimonialSection;
