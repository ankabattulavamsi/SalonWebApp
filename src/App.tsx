import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/HomePage/HomePage";
import LandingPageNavigation from "./routes/LandingPageNavigation/LandingPageNavigation";

import "./App.css";

function App() {
  // Note

  return (
    <div>
      <Routes>
        {/*Guest Flow*/}
        <Route path="/" element={<LandingPageNavigation />}>
          <Route index element={<HomePage />} />
        </Route>
        {/*Guest Flow*/}

        {/* Login */}
    </Routes>

        {/* Login */}
    </div>
  )
}

export default App;
