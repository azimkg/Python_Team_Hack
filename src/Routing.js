import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import AirKing from "./components/AirKing/AirKing";
import AppRouter from "./components/AppRouter/AppRouter";
import Chat from "./components/Chat/Chat";
import DateJust from "./components/DateJust/DateJust";
import DateJustPage from "./components/DateJustPage/DateJustPage";
import Details from "./components/Details/Details";
import EditedWatch from "./components/EditedWatch/EditedWatch";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import SkyDweller from "./components/SkyDweller/SkyDweller";
import StarRating from "./components/StarRating/StarRating";
import TopFooter from "./components/TopFooter/TopFooter";
import Watches from "./components/Watches/Watches";
import YachtPage from "./components/YachtPage/YachtPage";
import YachtMaster from "./components/YactMaster/YachtMaster";

export const publicRoutes = [
  {
    path: "/login",
    Component: <Login />,
  },
];
export const privateRoutes = [
  {
    path: "/chat",
    Component: <Chat />,
  },
];

const Routing = () => {
  const user = false;

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
      </Routes>
      <AppRouter />
      <StarRating />
      <TopFooter />
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
