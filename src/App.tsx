import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { StorePage } from "./pages/StorePage";
import { BottomNavBar } from "./components/layout/BottomNavBar";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* The 'exact' prop has been removed from this line */}
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/store" element={<StorePage />} />
          {/* <Route path="/plans" element={<PlansPage />} />
          <Route path="/profile" element={<ProfilePage />} /> */}
        </Routes>

        <BottomNavBar />
      </div>
    </BrowserRouter>
  );
};
