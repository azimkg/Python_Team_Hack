import React from "react";
import "./Header.css";
import versImg1 from "../assets/ver-1.jpg";

import TextStart from "../TextStart/TextStart";
import Slider from "../Slider/Slider";
import VideoHeader from "../VideoHeader/VideoHeader";
import TopFooter from "../TopFooter/TopFooter";
const Header = () => {
  return (
    <>
      <div className="header">
        <video
          className="header-video"
          autoPlay
          loop
          muted
          src="https://content.rolex.com/dam/new-watches-2022/hub/video/cover/new-watches-2022-hub-cover.mp4"
        ></video>
        <div className="header-background"></div>
      </div>
      <TextStart />
      <div className="header-section">
        <div className="container">
          <p className="header-title">
            Rolex представляет свои самые последние творения, которые привносят
            дух инноваций и оптимизм в мир часового искусства.
          </p>
          <span className="header-text">
            В неизменном стремлении к совершенству Rolex постоянно обновляет
            эстетику и технические решения для своих эмблематических часов,
            приглашая расширить поле возможностей и намечать себе все более
            сложные задачи. И каждый раз — все с той же гарантией превосходного
            качества, возможного благодаря собственной мануфактуре и
            интегрированному часовому производству.
          </span>
          <Slider />
        </div>
        <VideoHeader />
        <div className="versatility container">
          <h1 className="versatility-title">Многогранность Rolex</h1>
          <img src={versImg1} alt="" className="versatility-img-1" />
        </div>
      </div>
    </>
  );
};

export default Header;
