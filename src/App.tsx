/** @format */

import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme/Theme";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import LandingPageNavigation from "./routes/LandingPageNavigation/LandingPageNavigation";
import SalonPartner from "./routes/SalonPartner/SalonPartner";

import "./App.css";
import Nopage from "./routes/Nopage/Nopage";
import SpecialistTeam from "./components/OurSpecialists/SpecialistTeam";
import GallerySalon from "./components/GallerySalonOwner/Gallery.Salon";
import OffersSalon from "./components/OffersSection/OffersSalon";
import SalonBlogs from "./components/OurBlogs/SalonBlogs";
import BookingsMainPage from "./components/BookingsSection/BookingsMainPage/BookingsMainPage";
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>
          {/*Guest Flow*/}
          <Route path="/" element={<LandingPageNavigation />}>
            <Route index element={<HomePage />} />
          </Route>
          {/*Guest Flow*/}

          {/* Salon Partners */}
          <Route path="salon" element={<SalonPartner />} />
          <Route path="salon/offers" element={<OffersSalon />} />
          <Route path="salon/gallery" element={<GallerySalon />} />
          <Route path="salon/team" element={<SpecialistTeam />} />
          <Route path="salon/blog" element={<SalonBlogs />} />
          <Route path="salon/booking" element={<BookingsMainPage />} />
          <Route path="/*" element={<Nopage />} />
          {/* Salon Partners */}
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
