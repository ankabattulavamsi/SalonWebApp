import React, { Component } from "react";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

class TermsandCondtions extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Box sx={{ my: 5 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Fira Sans",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "50px",
              textTransform: "capitalize",
              color: "#000000",
              my: 1,
            }}
          >
            Term & Conditons
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "30px",
              textTransform: "lowercase",
              color: "#88878F",
              my: 2,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "30px",
              textTransform: "lowercase",
              color: "#88878F",
            }}
          >
            Quis ipsum suspendisse ultrices gravida Risus commodo viverra send
            do eiusmod maecenas accumsan lacus vel facilisis.
          </Typography>
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "30px",
              textTransform: "lowercase",
              color: "#88878F",
            }}
          >
            {" "}
            <CheckOutlinedIcon
              sx={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "5px",
                mr: 1,
                textAlign: "center",
                fontSize: "18px",
              }}
            />
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "30px",
              textTransform: "lowercase",
              color: "#88878F",
            }}
          >
            {" "}
            <CheckOutlinedIcon
              sx={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "5px",
                mr: 1,
                fontSize: "18px",
                textAlign: "center",
              }}
            />
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "30px",
              textTransform: "lowercase",
              color: "#88878F",
            }}
          >
            {" "}
            <CheckOutlinedIcon
              sx={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "5px",
                fontSize: "18px",
                mr: 1,
                textAlign: "center",
              }}
            />
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "30px",

              textTransform: "lowercase",
              color: "#88878F",
            }}
          >
            {" "}
            <CheckOutlinedIcon
              sx={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "5px",
                mr: 1,
                fontSize: "18px",
                textAlign: "center",
              }}
            />
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "30px",
            textTransform: "lowercase",
            color: "#88878F",
            my: 2,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "30px",
            textTransform: "lowercase",
            color: "#88878F",
            my: 3,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Quis ipsum suspendisse ultrices gravida Risus
          commodo viverra send do eiusmod maecenas accumsan lacus vel facilisis.
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal . There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some. Contrary to popular belief, Lorem
          Ipsum is not simply random text It has roots in a piece of classical.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. The standard chunk of Lorem
          Ipsum used since the 1500s is reproduced below for those interested.
          Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
          Cicero are also reproduced in their exact original form, accompanied
          by English versions from the 1914 translation by H. Rackham.There are
          many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly.
        </Typography>
      </Container>
    );
  }
}

export default TermsandCondtions;
