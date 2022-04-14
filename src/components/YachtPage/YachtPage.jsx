import React from "react";
import "./YachtPage.css";

const YachtPage = () => {
  return (
    <div>
      <video
        src="https://content.rolex.com/dam/watches/family-pages/yacht-master/video/cover/professional-watches-yacht-master-cover-video.mp4"
        autoPlay
        loop
        muted
        className="yacht-pages-video"
      ></video>
      <div className="yacht-pages-video2">
        <h1 className="yacht-pages-text">
          МОДЕЛИ ROLEX YACHT-MASTER И YACHT-MASTER || ВОПЛОЩАЮТ МОРСКОЙ ДУХ.
        </h1>
        <h3 className="yacht-pages-text1">
          Вдохновленные богатым наследием, связавшим Rolex с миром парусного
          спорта с 1950-х годов, часы Yacht-Master сочетают функциональность и
          стиль, а часы Yacht-Master II являются примером лучших технологий
          Rolex, использованных для создания яхтенного хронографа,
          предназначенного для парусных регат.
        </h3>
      </div>
      <div className="ypages">
        <div className="ypage1">
          <img
            className="ypage1-img"
            src="https://content.rolex.com/dam/watches/family-pages/yacht-master/roller-design-ym-ii/professional-watches-yacht-master-ii-yachting-race_syho17cb_2710211_portrait.jpg?imwidth=1080, https://content.rolex.com/dam/watches/family-pages/yacht-master/roller-design-ym-ii/professional-watches-yacht-master-ii-yachting-race_syho17cb_2710211_portrait.jpg?imwidth=2880 2x"
            alt=""
          />
        </div>
        <div className="ypage2">
          <h3 className="ypage-text">Инновационный яхтенный хронограф</h3>
          <h3 className="ypage-texts">
            Яркий морской стиль часов Yacht-master || полностью соответсвует
            концепции профессиональных часов Oyster. В этом яхтенном хронографе
            максимально проявилось неизменное внимание Rolex к каждой детали.{" "}
          </h3>
        </div>
      </div>
      <video
        src="https://content.rolex.com/dam/watches/family-pages/yacht-master/video/professional_watches_yacht-master_video_autoplay_0001.mp4"
        autoPlay
        loop
        muted
        className="yacht-pages-video"
      ></video>
      <div className="yacht-pages-videos">
        <h1 className="yacht-pages-title">
          В основе особых отношений Rolex и парусного спорта – схожесть
          принципов и общие непреходящие ценности, свойственные как часовому
          бренду, так и яхтсменам.
        </h1>
        <h2 className="yacht-pages-titles">
          Часы Oyster Perpetual Yacht-Master символизируют особую связь компании
          Rolex с миром парусного спорта, возникшую еще в 1950-х годах.
          Элегантность парусного спорта не могут затмить ни его сложность, ни
          тяжелые условия плавания. Сегодня Rolex является активным партнером
          самых престижных мировых яхт-клубов, учреждений и регат, подтверждая
          неуклонное стремление к совершенству и страстную увлеченность парусным
          спортом.
        </h2>
      </div>
      <div className="watches-div-h3">
        <h3 className="details-watches">Все категории </h3>
      </div>
      <div className="container_ypage">
        <div className="inlines">
          <img
            className="image-ypage"
            src="https://content.rolex.com/dam/new-watches-2022/homepage/roller-family/homepage-new-watches-2022-roller-watches-air-king-family-m126900-0001_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2022/homepage/roller-family/homepage-new-watches-2022-roller-watches-air-king-family-m126900-0001_portrait.jpg?imwidth=840 2x"
            alt="img"
          />
          <h2 className="category-text">AIR-KING</h2>
        </div>
        <div className="inlines">
          <img
            className="image-ypage"
            src="https://content.rolex.com/dam/new-watches-2022/homepage/roller-family/homepage-new-watches-2022-roller-watches-datejust-family-m126233-0039_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2022/homepage/roller-family/homepage-new-watches-2022-roller-watches-datejust-family-m126233-0039_portrait.jpg?imwidth=840 2x"
            alt="img"
          />
          <h2 className="category-text">DATEJUST</h2>
        </div>
        <div className="inlines">
          <img
            className="image-ypage"
            src="https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0000_m326238-0009-sky-dweller_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0000_m326238-0009-sky-dweller_portrait.jpg?imwidth=840 2x"
            alt="img"
          />
          <h2 className="category-text">SKY-DWELLER</h2>
        </div>
      </div>
    </div>
  );
};

export default YachtPage;
