import { Component } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import "./offers.css";
import { Offer, offerArray } from "../../utils/fixtures/offerSection/offer";

class Offers extends Component {
  render() {
    return (
      <Box sx={{ mb: 10, mt: 10 }}>
        <Container maxWidth="lg">
          <Grid
            spacing={2}
            container
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {offerArray.slice(0, 2).map((offer: Offer) => {
              return (
                <Grid item md={6} xs={12} key={offer.id}>
                  <Card
                    sx={{
                      mt: 5,
                      maxHeight: { xs: "100%", sm: "300px" },
                      display: "flex",
                      mx: "auto",
                      bgcolor: offer.bgColor,
                      borderRadius: "20px",
                    }}
                  >
                    <CardContent
                      sx={{
                        width: { xs: "50%", sm: "48%" },
                        paddingTop: "8%",
                        paddingLeft: "7%",
                        paddingRight: 0,
                      }}
                    >
                      <Button
                        sx={{
                          mt: 2,
                          fontSize: { xs: "70%", sm: "22px" },
                          backgroundColor: "#fff",
                          color: "#272522",
                          fontFamily: "Praise",
                          fontWeight: 400,
                          fontStyle: "normal",
                          width: "70%",
                        }}
                      >
                        {offer.discount}% OFF
                      </Button>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          mt: 2,
                          fontSize: { xs: "80%", sm: "22px" },
                          fontFamily: "Fira Sans",
                          fontWeight: 600,
                          color: "#272522",
                        }}
                      >
                        {offer.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mt: 2,
                          fontSize: { xs: "70%", sm: "80%", md: "14px" },
                          fontfamily: "Roboto",
                          fontWeight: 400,
                          color: "#88878F",
                          opacity: 0.5,
                        }}
                      >
                        {offer.description}...
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        width: { xs: "50%", sm: "555px" },
                        height: "100%",
                      }}
                    >
                      <CardMedia
                        component="img"
                        width="100%"
                        height="100%"
                        image={offer.imgUrl}
                        alt="green iguana"
                        sx={{ objectFit: { xs: "cover", sm: "contain" } }}
                      />
                    </Box>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          {}
        </Container>
      </Box>
    );
  }
}

export default Offers;
