import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { StorePage } from "./pages/StorePage";
import { BottomNavBar } from "./components/layout/BottomNavBar";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full max-w-sm mx-auto min-h-screen relative overflow-x-hidden">
        <Routes>
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
