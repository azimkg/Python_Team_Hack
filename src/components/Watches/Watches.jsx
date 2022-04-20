import React, { useContext, useEffect, useState } from "react";
import { Carousel } from "antd";
import "./Watches.css";
import AllWatch from "../AllWatch/AllWatch";
import Search from "../Search/Search";
import Filters from "../Filter/Filter";
import { useSearchParams } from "react-router-dom";
// import { rolexContext } from "../../context/rolexContext";

const Watches = () => {
  const [price, setPrice] = useState([1, 6000]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  // const { getWatch } = useContext(rolexContext);
  useEffect(() => {
    setSearchParams({
      price_from: price[0],
      price_to: price[1],
    });
  }, [price]);

  return (
    <div className="watch-container">
      <div className="header">
        <video
          className="header-video"
          autoPlay
          loop
          muted
          src="https://content.rolex.com/dam/watches/hubs/all-watches/videos/hub-collection-watches-cover.mp4"
        ></video>
        <div className="header-background"></div>
        <div className="watches-title">
          <h1 className="watches-h1">
            ОТКРОЙТЕ ДЛЯ СЕБЯ КОЛЛЕКЦИЮ ПРЕСТИЖНЫХ И ВЫСОКОТОЧНЫХ ЧАСОВ ROLEX.
          </h1>
          <p className="watches-p">
            Rolex предлагает большой выбор моделей Oyster Perpetual и Cellini,
            где каждый сможет подобрать часы по вкусу. Откройте для себя широкую
            гамму часов Rolex, идеально сочетающих стиль и функциональность.
          </p>
        </div>
        <div className="watches-div-h3">
          <h3 className="watches-h3">Классические часы</h3>
        </div>
        <div className="carousel-caption">
          <Carousel autoplay>
            <div>
              <div className="carousel">
                <div className="carousel-div">
                  <img
                    className="carousel-img"
                    src="https://content.rolex.com/dam/new-watches-2022/homepage/roller-family/homepage-new-watches-2022-roller-watches-day-date-family-m228236-0012_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2022/homepage/roller-family/homepage-new-watches-2022-roller-watches-day-date-family-m228236-0012_portrait.jpg?imwidth=840 2x"
                    alt="image"
                  />
                  <h2 className="carousel-h2"> DAY-DATE</h2>
                  <p className="pi">Квинтэссенция престижа в мире часов</p>
                </div>
                <div className="carousel-div">
                  <img
                    className="carousel-img"
                    src="https://content.rolex.com/dam/new-watches-2022/homepage/roller-family/homepage-new-watches-2022-roller-watches-datejust-family-m126233-0039_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2022/homepage/roller-family/homepage-new-watches-2022-roller-watches-datejust-family-m126233-0039_portrait.jpg?imwidth=840 2x"
                    alt="image"
                  />
                  <h2 className="carousel-h2"> DATEJUST</h2>
                  <p className="pi">Эталон классических часов</p>
                </div>
                <div className="carousel-div">
                  <img
                    className="carousel-img"
                    src="https://content.rolex.com/dam/new-watches-2022/homepage/roller-family/homepage-new-watches-2022-roller-watches-datejust-family-m126233-0039_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2022/homepage/roller-family/homepage-new-watches-2022-roller-watches-datejust-family-m126233-0039_portrait.jpg?imwidth=840 2x"
                    alt="image"
                  />
                  <h2 className="carousel-h2"> OYSTER PERPETUAL</h2>
                  <p className="pi">Квинтэссенция Oyster</p>
                </div>
              </div>
            </div>
            <div>
              <div className="carousel">
                <div className="carousel-div">
                  <img
                    className="carousel-img"
                    src="https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0001_m279138rbr-0015-lady-datejust-28_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0001_m279138rbr-0015-lady-datejust-28_portrait.jpg?imwidth=840 2x"
                    alt="image"
                  />
                  <h2 className="carousel-h2"> LADY-DATEJUST</h2>
                  <p className="pi">Элегантность по-женски</p>
                </div>
                <div className="carousel-div">
                  <img
                    className="carousel-img"
                    src="https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0000_m326238-0009-sky-dweller_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0000_m326238-0009-sky-dweller_portrait.jpg?imwidth=840 2x"
                    alt="image"
                  />
                  <h2 className="carousel-h2"> SKY-DWELLER</h2>
                  <p className="pi">Контроль за временем по всему миру</p>
                </div>
                <div className="carousel-div">
                  <img
                    className="carousel-img"
                    src="https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0014_m50535-0002-cellini-moonphase_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0014_m50535-0002-cellini-moonphase_portrait.jpg?imwidth=840 2x"
                    alt="image"
                  />
                  <h2 className="carousel-h2">CELLINI</h2>
                  <p className="pi">Классические часы</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="watches-div-h3">
          <h3 className="watches-h3">Профессиональные часы</h3>
        </div>
        <div className="carousel-caption1">
          <Carousel autoplay>
            <div>
              <div className="carousel">
                <div className="carousel-div">
                  <img
                    className="carousel-img1"
                    src="https://content.rolex.com/dam/new-watches-2022/homepage/roller-family/homepage-new-watches-2022-roller-watches-air-king-family-m126900-0001_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2022/homepage/roller-family/homepage-new-watches-2022-roller-watches-air-king-family-m126900-0001_portrait.jpg?imwidth=840 2x"
                    alt="image"
                  />
                  <h2 className="carousel-h2">AIR-KING</h2>
                  <p className="pi">Часы для авиаторов</p>
                </div>
                <div className="carousel-div">
                  <img
                    className="carousel-img1"
                    src="https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0004_m126711chnr-0002-gmt-master-ii_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0004_m126711chnr-0002-gmt-master-ii_portrait.jpg?imwidth=840 2x"
                    alt="image"
                  />
                  <h2 className="carousel-h2"> GMT-MASTER ||</h2>
                  <p className="pi">Часы для путешественников</p>
                </div>
                <div className="carousel-div">
                  <img
                    className="carousel-img1"
                    src="https://content.rolex.com/dam/new-watches-2022/homepage/roller-family/homepage-new-watches-2022-roller-watches-yacht-master-family-m226658-0001_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2022/homepage/roller-family/homepage-new-watches-2022-roller-watches-yacht-master-family-m226658-0001_portrait.jpg?imwidth=840 2x"
                    alt="image"
                  />
                  <h2 className="carousel-h2">YACHT-MASTER</h2>
                  <p className="pi">Часы морских просторов</p>
                </div>
                <div className="carousel-div">
                  <img
                    className="carousel-img1"
                    src="https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0008_m124060-0001-submariner_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0008_m124060-0001-submariner_portrait.jpg?imwidth=840 2x"
                    alt="image"
                  />
                  <h2 className="carousel-h2">SUBMARINER</h2>
                  <p className="pi">Эталон часов для дайверов</p>
                </div>
              </div>
            </div>
            <div>
              <div className="carousel">
                <div className="carousel-div">
                  <img
                    className="carousel-img1"
                    src="https://content.rolex.com/dam/new-watches-2021/homepage/roller/all-watches/watches_0012_m116519ln-0038-cosmograph-daytona_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2021/homepage/roller/all-watches/watches_0012_m116519ln-0038-cosmograph-daytona_portrait.jpg?imwidth=840 2x"
                    alt="image"
                  />
                  <h2 className="carousel-h2">COSMOGRAPH DAYTONA</h2>
                  <p className="pi">Созданные специально для гонок</p>
                </div>
                <div className="carousel-div">
                  <img
                    className="carousel-img1"
                    src="https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0005_m126603-0001-sea-dweller_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0005_m126603-0001-sea-dweller_portrait.jpg?imwidth=840 2x"
                    alt="image"
                  />
                  <h2 className="carousel-h2">SEA-DWELLER</h2>
                  <p className="pi">Часы для покорения морских глубин</p>
                </div>
                <div className="carousel-div">
                  <img
                    className="carousel-img1"
                    src="https://content.rolex.com/dam/new-watches-2021/homepage/roller/all-watches/watches_0004_m124273-0001-explorer_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2021/homepage/roller/all-watches/watches_0004_m124273-0001-explorer_portrait.jpg?imwidth=840 2x"
                    alt="image"
                  />
                  <h2 className="carousel-h2">EXPLORER</h2>
                  <p className="pi">Зов горных вершин</p>
                </div>
                <div className="carousel-div">
                  <img
                    className="carousel-img1"
                    src="https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0012_m116400gv-0002-milgauss_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0012_m116400gv-0002-milgauss_portrait.jpg?imwidth=840 2x"
                    alt="image"
                  />
                  <h2 className="carousel-h2">MILGAUS</h2>
                  <p className="pi">Прославляя науку</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="watches-title">
          <h1 className="watches-h1">
            ROLEX ПРЕДЛАГАЕТ ШИРОКУЮ ГАММУ МОДЕЛЕЙ, ОТ ПРОФЕССИОНАЛЬНЫХ ДО
            КЛАССИЧЕСКИХ, В КОТОРОЙ КАЖДЫЙ СМОЖЕТ ПОДОБРАТЬ ЧАСЫ ПО ВКУСУ.
          </h1>
          <p className="watches-p">
            Откройте для себя коллекцию часов Rolex, выбрав предпочитаемые
            модели, материалы, безели, циферблаты и браслеты, и найдите часы,
            которые подходят именно Вам.
          </p>
        </div>
        <Search />
        <div
          className="container filter-block"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? (
            <h3 className="filter-title">Скрыть фильтр</h3>
          ) : (
            <h3 className="filter-title">Показать фильтр</h3>
          )}
          {showFilters ? <Filters price={price} setPrice={setPrice} /> : null}
        </div>
        <AllWatch />
      </div>
    </div>
  );
};

export default Watches;
