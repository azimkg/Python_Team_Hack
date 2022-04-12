import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import icon from "../assets/icon.svg";
import icon2 from "../assets/icon2.svg";
import close2 from "../assets/icons-close.svg";
import search from "../assets/search-icon.svg";
import heart from "../assets/heart.svg";
import { IconContext } from "react-icons";
import airKing from "../assets/air-king.webp";
import dateJust from "../assets/dateJust.webp";
import sky from "../assets/sky.webp";
import yacht from "../assets/yacht.webp";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Autoplay, Scrollbar } from "swiper";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars" onClick={showSidebar}>
            <img
              className="icon-bars"
              src="https://cdn-icons.flaticon.com/png/512/3945/premium/3945664.png?token=exp=1649776294~hmac=6b6c676b30baf4a29c0c19659b40db74"
            />
            <p className="bars-text">Меню</p>
          </Link>
          <img src={icon} alt="" className="icon-img" />
          <div className="menu-right">
            <div className="menu">
              <img src={search} alt="Поиск" />
              <p>Поиск</p>
            </div>
            <div className="menu">
              <img src={heart} alt="Подборка" />
              <p>Ваша подборка</p>
            </div>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <img className="close" src={close2} />
              </Link>
              <img src={icon2} alt="" className="icon-img icon-img-menu" />
            </li>
            <div className="slider">
              <Swiper
                scrollbar={{
                  hide: true,
                }}
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Scrollbar]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="slide-block">
                    <Link to="/airking">
                      <img className="slide-img" src={airKing} alt="" />
                    </Link>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="slide-block">
                    <Link to="/sky">
                      <img className="slide-img" src={sky} alt="" />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-block">
                    <Link to="yacht">
                      <img className="slide-img" src={yacht} alt="" />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-block">
                    <Link to="datejust">
                      <img className="slide-img" src={dateJust} alt="" />
                    </Link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="menu-links">
              <Link to="/watches">
                <p className="menu-links-item">Часы Rolex</p>
              </Link>
              <Link to="/watches">
                <p className="menu-links-item">Новинки 2022</p>
              </Link>
              <Link to="/watches">
                <p className="menu-links-item">Поиск Часов</p>
              </Link>
              <Link to="/watches">
                <p className="menu-links-item">Мир Rolex</p>
              </Link>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
