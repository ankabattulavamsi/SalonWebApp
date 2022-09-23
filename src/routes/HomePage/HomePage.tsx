import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Categories from "../../components/Categories/Categories";
import Offers from "../../components/Offers/Offers";
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
      <AboutUs />
      <Offers />
    </>
  );
}
