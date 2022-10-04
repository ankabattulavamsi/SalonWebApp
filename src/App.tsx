import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme/Theme";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import LandingPageNavigation from "./routes/LandingPageNavigation/LandingPageNavigation";
import SalonPartner from "./routes/SalonPartner/SalonPartner";
import SalonHomePage from "./routes/SalonPartner/SalonHomePage";

import "./App.css";

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

          {/* Login */}
          {/* Salon Partners */}
          <Route path="salon" element={<SalonPartner />}>
            <Route index element={<SalonHomePage />} />
          </Route>
          {/* Salon Partners */}
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
