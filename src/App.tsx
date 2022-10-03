import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme/Theme";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import LandingPageNavigation from "./routes/LandingPageNavigation/LandingPageNavigation";
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
        </Routes>
      </ThemeProvider>

      {/* Login */}

      {/* Login */}
    </div>
  );
}

export default App;
