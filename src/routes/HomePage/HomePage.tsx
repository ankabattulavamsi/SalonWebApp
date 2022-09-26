import React from "react";
import Categories from "../../components/Categories/Categories";
import FeatureCarousel from "../../components/FeatureCarousel/FeatureCarousel";
import TeamSection from "./../../components/TeamSection/TeamSection";

export default function HomePage() {
  return (
    <div>
      <div>
        carousal
        <FeatureCarousel />
      </div>
      <div
        id="featureCarousel"
        style={{ height: "900px", backgroundColor: "yellow" }}
      >
        Home
      </div>
      <div
        id="categories"
        style={{ height: "900px", backgroundColor: "yellow" }}
      >
        <Categories />
      </div>
      <div
        id="teamsection"
        style={{ height: "900px", backgroundColor: "blue" }}
      >
        <TeamSection />
      </div>
    </div>
  );
}
