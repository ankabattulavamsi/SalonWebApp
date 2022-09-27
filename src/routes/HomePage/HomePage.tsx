import React from "react";
import Categories from "../../components/Categories/Categories";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import DownloadAdvertiementSection from "../../components/DownloadAdvertiementSection/DownloadAdvertiementSection";
import TeamSection from "./../../components/TeamSection/TeamSection";

export default function HomePage() {
  return (
    <>
      <div style={{ height: "900px", backgroundColor: "red" }}>HomePage</div>
      <div
        id="categories"
        style={{ height: "900px", backgroundColor: "yellow" }}
      >
        <Categories />
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
