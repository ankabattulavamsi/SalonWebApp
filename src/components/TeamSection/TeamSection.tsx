import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import "./TeamSection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "@mui/system";
import React, { Component } from "react";
import { TeamData, teamdata } from "../../utils/fixtures/expertTeam/team";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default class TeamSection extends Component {
  render() {
    return (
      <Box>
        <Container>
          <>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={false} // means to render carousel on server-side.
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              customTransition="all 0.7"
              transitionDuration={700}
              containerClass="carousel-container"
              deviceType={"mobile  | tablet"}
              dotListClass="custom-dot-list-style"
            >
              {teamdata.map((team: TeamData) => {
                return (
                  <Card
                    className="export-team"
                    sx={{
                      maxWidth: 345,

                      boxShadow: "1px 1px 20px #ccc",
                      borderRadius: "10px",
                      pb: 4,
                      mt: 20,
                      ml: "auto",
                      mr: "auto",
                      overflow: "visible",
                      alignSelf: "center",
                    }}
                    key={team.id}
                  >
                    <>
                      <CardMedia
                        height={"385"}
                        width={"385"}
                        component={"img"}
                        src={team.imgeUrl}
                        sx={{
                          display: "block",
                          objectFit: "contain",
                          justifyContent: "center",
                        }}
                        alt={team.title}
                      ></CardMedia>
                    </>
                    <CardContent
                      className="expert-team-content"
                      sx={{ bgcolor: "#FFF2E4", color: "black" }}
                    >
                      <Typography variant="h5" align="center">
                        {team.title}
                      </Typography>
                      <Typography align="center" variant="body2">
                        {team.position}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </Carousel>
          </>
        </Container>
      </Box>
    );
  }
}
