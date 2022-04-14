import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <br></br>
        <b>ЧАСЫ ROLEX</b>
        <br></br>
        <br></br>
        <ol>Часы Rolex</ol>
        <ol>Новинки 2022</ol>
        <ol>Канфигурaтор часов</ol>
        <ol>Поиск часов</ol>
        <ol>Мужские часы</ol>
        <ol>Женские часы</ol>
        <ol>История марки и часовое мастерство</ol>
        <b>МИР ROLEX</b>
        <ol>Спорт,искусство и исследования</ol>
      </ul>
      <div>
        <br></br>
        <b>КОЛЛЕКЦИЯ</b>
        <br></br>
        <br></br>
        <ul>
          <ol>Air-King</ol>
          <ol>Datejust</ol>
          <ol>Day-Date</ol>
          <ol>GMT-Master ||</ol>
          <ol>Oyster Perpetual</ol>
          <ol>Sky-Dweller</ol>
          <ol>Yacht-Master</ol>
          <ol>Cosmograph Daytona</ol>
          <ol>Lady-Datejast</ol>
          <ol>Explorer</ol>
          <ol>Milgauss</ol>
        </ul>
      </div>
      <div>
        <br></br>
        <b>ОФИЦИАЛЬНЫЕ КАНАЛЫ</b>
        <br></br>
        <br></br>
        <ul>
          <div className="social">
            <a
              style={{ color: "white", cursor: "pointer" }}
              target={"_blank"}
              href="https://www.instagram.com/rolex/"
            >
              <InstagramOutlined style={{ color: "wheat", width: "30px" }} />
              Instagram
            </a>
            <ol>
              <a
                style={{ color: "white", cursor: "pointer" }}
                target={"_blank"}
                href="https://www.facebook.com/rolex"
              >
                <FacebookOutlined style={{ color: "wheat", width: "30px" }} />
                Facebook
              </a>
              <ol>
                <a
                  style={{ color: "white", cursor: "pointer" }}
                  target={"_blank"}
                  href="https://www.youtube.com/rolex"
                >
                  <YoutubeFilled style={{ color: "wheat", width: "30px" }} />
                  Youtube
                </a>
                <ol>
                  <a
                    style={{ color: "white", cursor: "pointer" }}
                    target={"_blank"}
                    href="https://twitter.com/rolex"
                  >
                    <TwitterOutlined
                      style={{ color: "wheat", width: "30px" }}
                    />
                    Twitter
                  </a>
                </ol>
              </ol>
            </ol>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
