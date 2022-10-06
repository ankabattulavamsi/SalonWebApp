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
interface HomeProps {
  navigate: NavigateFunction;
}
export interface HomeState {}
class HomePage extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {};
  }

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
      </>
    );
  }
}

export default withRouter(HomePage);
