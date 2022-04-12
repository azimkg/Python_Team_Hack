import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import AirKing from "./components/AirKing/AirKing";
import DateJust from "./components/DateJust/DateJust";
import EditedWatch from "./components/EditedWatch/EditedWatch";
import Footer from "./components/Footer/Footer";
import SkyDweller from "./components/SkyDweller/SkyDweller";
import YachtMaster from "./components/YactMaster/YachtMaster";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/yacht" element={<YachtMaster />} />
        <Route path="/sky" element={<SkyDweller />} />
        <Route path="/airking" element={<AirKing />} />
        <Route path="/datejust" element={<DateJust />} />
        <Route path="/edit/:id" element={<EditedWatch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
