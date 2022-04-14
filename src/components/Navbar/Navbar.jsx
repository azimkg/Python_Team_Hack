import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import icon from "../assets/icon.svg";
import fabars from "../assets/fabars.png";
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
import CartRolex from "../CartRolex/CartRolex";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [favorites, setFavorites] = useState(false);
  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);
  const showFavorites = () => setFavorites(!favorites);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="menu-bars" onClick={showSidebar}>
            <img className="icon-bars" src={fabars} />
            <p className="bars-text">Меню</p>
          </div>
          <img
            src={icon}
            alt="icon"
            onClick={() => navigate("/")}
            className="icon-img"
          />
          <div className="menu-right">
            <div className="menu">
              <img src={search} alt="Поиск" />
              <p>Поиск</p>
            </div>
            <div className="menu menu-bars-fav" onClick={showFavorites}>
              <img className="icon-bars-fav" src={heart} alt="Подборка" />
              <p className="bars-text-fav">Ваша подборка</p>
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
                breakpoints={{
                  0: {
                    width: 0,
                    slidesPerView: 2,
                  },
                  480: {
                    width: 480,
                    slidesPerView: 2,
                  },
                  768: {
                    width: 768,
                    slidesPerView: 3,
                  },
                }}
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Scrollbar]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="slide-block">
                    <Link to="/airking">
                      <img className="slide-img" src={airKing} alt="" />
                      <p className="slide-block-text">AIR-KING</p>
                    </Link>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="slide-block">
                    <Link to="/sky">
                      <img className="slide-img" src={sky} alt="" />
                      <p className="slide-block-text">Sky-Dweller</p>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-block">
                    <Link to="yacht">
                      <img className="slide-img" src={yacht} alt="" />
                      <p className="slide-block-text">Yacht-Master</p>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-block">
                    <Link to="datejust">
                      <img className="slide-img" src={dateJust} alt="" />
                      <p className="slide-block-text">Datejust</p>
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
        <nav className={favorites ? "nav-menu-fav active-fav" : "nav-menu-fav"}>
          <ul onClick={showFavorites}>
            <li className="navbar-toggle-fav">
              <Link to="#" className="menu-bars-fav-close">
                <div className="fav-close-block">
                  <svg
                    className="icon-fav"
                    width="20"
                    height="20"
                    fill="rgb(18, 120, 74)"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    alt=""
                  >
                    <path d="m8.9 7.5 6.1 6.1-1.4 1.4-6.1-6.1-6.1 6.1-1.4-1.4 6.1-6.1-6.1-6.1 1.4-1.4 6.1 6.1 6.1-6.1 1.4 1.4z" />
                  </svg>
                </div>
              </Link>
            </li>
          </ul>
          <h2 className="fav-title">ВАША ПОДБОРКА</h2>
          <p className="fav-text">
            Редактировать подборку, управлять подборкой.
          </p>
          <button className="btn-fav">Поиск часов Rolex</button>
          <CartRolex />
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
