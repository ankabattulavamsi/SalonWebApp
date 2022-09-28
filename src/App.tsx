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
<<<<<<< HEAD
    </Routes>
=======

        {/* Login */}
      </Routes>
>>>>>>> origin/develop
    </div>
  );
}

export default App;
