import React from "react";
import "./Header.css";

import TextStart from "../TextStart/TextStart";
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
          <p>
            Rolex представляет свои самые последние творения, которые привносят
            дух инноваций и оптимизм в мир часового искусства.
          </p>
          <span>
            В неизменном стремлении к совершенству Rolex постоянно обновляет
            эстетику и технические решения для своих эмблематических часов,
            приглашая расширить поле возможностей и намечать себе все более
            сложные задачи. И каждый раз — все с той же гарантией превосходного
            качества, возможного благодаря собственной мануфактуре и
            интегрированному часовому производству.
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
