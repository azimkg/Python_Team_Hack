import React from "react";
import "./DateJustPage.css";

const DateJustPage = () => {
  return (
    <div>
      <div className="header">
        <video
          className="header-video"
          autoPlay
          loop
          muted
          src="https://content.rolex.com/dam/watches/family-pages/datejust/update/2021/cover/cover-family-page-datejust.mp4"
        ></video>
        <div className="header-background"></div>
      </div>
      <div className="textStart">
        <div className="textStart-block">
          <h1 className="textStart-title datejust-title">DATEJUST</h1>
          <h2 className="textStart-text">Эталон классических часов</h2>
        </div>
      </div>
      <div className="datejust-block">
        <div className="datejust-texts">
          <p className="date-title">Неподвластный времени стиль</p>
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
          src="https://content.rolex.com/dam/watches/family-pages/datejust/update/2021/family-page-datejust-cover-m126333-0010_1601ac_003.jpg?imwidth=1350"
          alt=""
        />
      </div>
      <img
        src="https://content.rolex.com/dam/watches/family-pages/datejust/update/2021/family-page-datejust-watch-on-time_m126333-0010_1601ac_003.jpg?imwidth=1350"
        alt=""
        className="datejust-img"
      />
      <div className="datejust-bottom">
        <p className="date-text date-text-bottom">
          Благодаря различным видам безеля — гладкому, выпуклому, рифленому или
          украшенному бриллиантами — часы Datejust идеально отражают
          индивидуальный стиль своего владельца. Легендарный рифленый безель
          выполняется только из 18-каратного желтого золота, белого золота или
          золота Everose. Безель может быть частично или полностью украшен
          бриллиантами. Бриллианты классической огранки тщательно отбираются
          экспертами компании. Затем за дело берутся ювелиры Rolex, которые
          вручную осуществляют закрепку бриллиантов, чтобы подчеркнуть их
          уникальную красоту.
        </p>
        <img
          src="https://content.rolex.com/dam/watches/family-pages/datejust/update/2021/family-page-datejust-m126200-0020_2103jva_002.jpg?imwidth=1350"
          alt=""
          className="datejust-img-bottom"
        />
      </div>
    </div>
  );
};

export default DateJustPage;
