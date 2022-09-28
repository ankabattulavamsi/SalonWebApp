import React from "react";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import DownloadAdvertiementSection from "../../components/DownloadAdvertiementSection/DownloadAdvertiementSection";
import TeamSection from "./../../components/TeamSection/TeamSection";
import OurBestServices from '../../components/OurBestServices/OurBestServices';
import FeatureCarousel from "../../components/FeatureCarousel/FeatureCarousel";

export default function HomePage() {
  return (
    <>
       <div style={{ height: "900px" }}>
        <FeatureCarousel />
      </div>
      <div id='services' style={{marginBottom: '25px', marginTop: '15px'}}>
      <OurBestServices />
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
    
  
    </>
  );
}
