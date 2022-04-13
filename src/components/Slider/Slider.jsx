import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Autoplay, Scrollbar } from "swiper";
import airKing from "../assets/air-king-slider.webp";
import dateJust from "../assets/dateJust-slider.webp";
import sky from "../assets/sky-slider.webp";
import yacht from "../assets/yacht-slider.webp";
import { Link } from "react-router-dom";
import "./Slider.css";

const Slider = () => {
  return (
    <div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        // breakpoints={{
        //   0: {
        //     width: 0,
        //     slidesPerView: 2,
        //   },
        //   480: {
        //     width: 480,
        //     slidesPerView: 2,
        //   },
        //   768: {
        //     width: 768,
        //     slidesPerView: 3,
        //   },
        // }}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Scrollbar]}
        className="my-swiper"
      >
        <SwiperSlide>
          <div className="slider-block">
            <Link to="/airking">
              <img className="slider-img" src={airKing} alt="" />
              <p className="slider-block-text">AIR-KING</p>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-block">
            <Link to="/sky">
              <img className="slider-img" src={sky} alt="" />
              <p className="slider-block-text">Sky-Dweller</p>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-block">
            <Link to="yacht">
              <img className="slider-img" src={yacht} alt="" />
              <p className="slider-block-text">Yacht-Master</p>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-block">
            <Link to="datejust">
              <img className="slider-img" src={dateJust} alt="" />
              <p className="slider-block-text">Datejust</p>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
