import React from "react";
import OurFeature from "../../components/OurFatures/OurFeature";
import TeamSection from "./../../components/TeamSection/TeamSection";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import DownloadAdvertiementSection from "../../components/DownloadAdvertiementSection/DownloadAdvertiementSection";
import OurBestServices from "../../components/OurBestServices/OurBestServices";
import FeatureCarousel from "../../components/FeatureCarousel/FeatureCarousel";
import AboutUs from "../../components/AboutUsSection/AboutUs";
import Offers from "../../components/OffersSection/Offers";
import OurBlogs from "../../components/OurBlogs/OurBlogs";
import Gallery from "../../components/Gallery/Gallery";
import withRouter from "../../hoc/withRouter";
import { NavigateFunction } from "react-router-dom";
import BuisnessDetails from "../../components/BuisnessDetail/BuisnessDetails";
import PayoutDetails from "../../components/PayoutDetails/PayoutDetails";
import { Box, Button } from "@mui/material";
interface HomeProps {
  navigate: NavigateFunction;
}
export interface HomeState {
  openBusiness: boolean;

  image: any;
  bname: string;
  owner: string;
  address: string;
  email: string;
  GSTIN: string;
  error: string;
  openPayout: boolean;
  upiAddress: string;
  accNumber: string;
  confirmaccNumber: string;
  accHoldername: string;
  ifscCode: string;
  bankname: string;
}
class HomePage extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      openBusiness: false,
      openPayout: false,
      image: "",
      address: "",
      bname: "",
      email: "",
      owner: "",
      GSTIN: "",
      error: "",
      upiAddress: "",
      accHoldername: "",
      bankname: "",
      confirmaccNumber: "",
      ifscCode: "",
      accNumber: "",
    };
  }
  // ON CHANGE FUNCTION    TO CHNGE  THE INPUTS VALUE AND STORE IN STATE
  handleChange = (e: any) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  // on change function to change the input value of the  profile image
  handleImageChange = (e: any): any => {
    this.setState({ image: URL.createObjectURL(e.target.files[0]) });
  };
  handleToggleDrawer = (type?: string) => {
    switch (type) {
      case "openPayout":
        this.setState({
          openPayout: !this.state.openPayout,
          image: "",
          address: "",
          bname: "",
          email: "",
          owner: "",
          GSTIN: "",
          error: "",
          upiAddress: "",
          accHoldername: "",
          bankname: "",
          confirmaccNumber: "",
          ifscCode: "",
          accNumber: "",
        });
        break;

      default:
        this.setState({
          openBusiness: !this.state.openBusiness,
          image: "",
          address: "",
          bname: "",
          email: "",
          owner: "",
          GSTIN: "",
          error: "",
          upiAddress: "",
          accHoldername: "",
          bankname: "",
          confirmaccNumber: "",
          ifscCode: "",
          accNumber: "",
        });
        break;
    }
  };

  //button click to navigate or open the payout detalis page
  handleClickSave = () => {
    this.handleToggleDrawer("openPayout");
  };
  render() {
    return (
      <>
        <div id="/">
          <FeatureCarousel />
        </div>
        <div>
          <OurFeature />
        </div>
        <div id="about">
          <AboutUs />
        </div>
        <div id="offers">
          <Offers />
        </div>
        <div id="services" style={{ marginBottom: "25px", marginTop: "15px" }}>
          <OurBestServices />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="downloadsection">
          <DownloadAdvertiementSection />
        </div>
        <div id="team">
          <TeamSection />
        </div>
        <div id="testimonial">
          <TestimonialSection />
        </div>
        <div id="blog">
          <OurBlogs />
        </div>

        <div style={{ width: "100%", height: "100vh" }}>
          <Box sx={{ mt: 10 }}>
            <Button onClick={() => this.handleToggleDrawer()}>press me</Button>
          </Box>

          <BuisnessDetails
            handleToggleDrawer={this.handleToggleDrawer}
            open={this.state.openBusiness}
            handleChange={this.handleChange}
            handleImageChange={this.handleImageChange}
            state={this.state}
            handleClickSave={this.handleClickSave}
          />

          <PayoutDetails
            open={this.state.openPayout}
            toggleFunc={this.handleToggleDrawer}
            state={this.state}
            handleChange={this.handleChange}
          />
        </div>
      </>
    );
  }
}

export default withRouter(HomePage);
