import React from "react";

const AirKingPage = () => {
  return (
    <div>
      <div>
        <div className="header">
          <video
            className="header-video"
            autoPlay
            loop
            muted
            src="https://content.rolex.com/dam/watches/family-pages/gmt-master-ii/video/cover/professional-watches-gmt-master-ii-cover-video.mp4"
          ></video>

          <div className="header-background"></div>
        </div>
        <div className="textStart">
          <div className="textStart-block">
            <h1 className="textStart-title datejust-title">AIR-KING</h1>
            <h2 className="textStart-text">Часы для авиаторов</h2>
          </div>
        </div>
        <div className="datejust-block">
          <div className="datejust-texts">
            <p className="date-title">Пионеры золотого века авиации</p>
            <p className="date-text">
              Испытанная временем эстетическая концепция Datejust остается одной
              из самых узнаваемых в мире. Характерная форма корпуса Oyster,
              рифленый безель из 18-каратного золота, линза Cyclops на окошке
              индикации даты и браслет Jubilee с пятью звеньями, специально
              созданный для этой модели, – каждый элемент подчеркивает
              непревзойденный классический стиль этих знаменитых часов.
            </p>
          </div>
          <img
            src="https://content.rolex.com/dam/new-watches-2022/new-watches/air-king/new-watches-2022-air-king-calibre-3230-push.jpg?imwidth=640"
            alt=""
          />
        </div>
        <img
          src="https://content.rolex.com/dam/new-watches-2022/family-pages/air-king/family-page-air-king-beauty_m126900-0001_1601ac_003.jpg?imwidth=1350"
          alt=""
          className="datejust-img"
        />
        <div className="datejust-bottom">
          <p className="date-text date-text-bottom">
            Благодаря различным видам безеля — гладкому, выпуклому, рифленому
            или украшенному бриллиантами — часы Air-King идеально отражают
            индивидуальный стиль своего владельца. Легендарный рифленый безель
            выполняется только из 18-каратного желтого золота, белого золота или
            золота Everose. Безель может быть частично или полностью украшен
            бриллиантами. Бриллианты классической огранки тщательно отбираются
            экспертами компании. Затем за дело берутся ювелиры Rolex, которые
            вручную осуществляют закрепку бриллиантов, чтобы подчеркнуть их
            уникальную красоту.
          </p>
          <img
            src="https://content.rolex.com/dam/new-watches-2022/new-watches/air-king/new-watches-2022-air-king-banner.jpg?imwidth=1350"
            alt=""
            className="datejust-img-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default AirKingPage;
