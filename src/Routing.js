import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import AirKing from "./components/AirKing/AirKing";
import Auth from "./components/Auth/Auth";
import Chat from "./components/Chat/Chat";
import DateJust from "./components/DateJust/DateJust";
import DateJustPage from "./components/DateJustPage/DateJustPage";
import Details from "./components/Details/Details";
import EditedWatch from "./components/EditedWatch/EditedWatch";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SkyDweller from "./components/SkyDweller/SkyDweller";
import TopFooter from "./components/TopFooter/TopFooter";
import Watches from "./components/Watches/Watches";
import YachtPage from "./components/YachtPage/YachtPage";
import YachtMaster from "./components/YactMaster/YachtMaster";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/yacht" element={<YachtMaster />} />
        <Route path="/sky" element={<SkyDweller />} />
        <Route path="/airking" element={<AirKing />} />
        <Route path="/datejust" element={<DateJust />} />
        <Route path="/edit/:id" element={<EditedWatch />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/date-p" element={<DateJustPage />} />
        <Route path="/" element={<Header />} />
        <Route path="/ypage" element={<YachtPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <TopFooter />
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
