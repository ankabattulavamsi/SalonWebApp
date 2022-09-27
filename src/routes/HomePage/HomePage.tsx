import React from "react";
import AboutUs from "../../components/AboutUsSection/AboutUs";
import Categories from "../../components/Categories/Categories";
import Offers from "../../components/OffersSection/Offers";
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
      <div
        id="teamsection"
        style={{ height: "900px", backgroundColor: "blue" }}
      >
        <TeamSection />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="offers">
        <Offers />
      </div>
    </>
  );
}
