import React from "react";
import { Card } from "antd";
import "./WatchList.css";
import { Link } from "react-router-dom";

const { Meta } = Card;

const WatchList = () => {
  return (
    <div className="watch-list">
      <Link to="/airking">
        <div>
          <Card
            hoverable
            className="watch-card"
            cover={
              <img
                className="watch-img"
                alt="example"
                src="https://content.rolex.com/dam/watches/family-pages/air-king/roller-history/family-page-airking-history_1958_air-king_16jdm_001_portrait.jpg?imwidth=420, https://content.rolex.com/dam/watches/family-pages/air-king/roller-history/family-page-airking-history_1958_air-king_16jdm_001_portrait.jpg?imwidth=840 2x"
              />
            }
          >
            <Meta title="AIR-KING" description="Часы для авиаторов" />
          </Card>
        </div>
      </Link>
      <Link to="/datejust">
        <div>
          <Card
            hoverable
            className="watch-card"
            cover={
              <img
                className="watch-img"
                alt="example"
                src="https://content.rolex.com/dam/watches/family-pages/datejust/update/2021/_rollers/03/family-page-datejust-roller-03-m278274-0018_2010jva_001_new_portrait.jpg?imwidth=420, https://content.rolex.com/dam/watches/family-pages/datejust/update/2021/_rollers/03/family-page-datejust-roller-03-m278274-0018_2010jva_001_new_portrait.jpg?imwidth=840 2x"
              />
            }
          >
            <Meta title="DATEJUST" description="Эталон классических часов" />
          </Card>
        </div>
      </Link>
      <Link to="/sky">
        <div>
          <Card
            hoverable
            className="watch-card"
            cover={
              <img
                className="watch-img"
                alt="example"
                src="https://content.rolex.com/dam/new-watches-2020/new-sky-dweller/roller-beauty/new-sky-dweller-everose-gold-01_portrait.jpg?imwidth=420, https://content.rolex.com/dam/new-watches-2020/new-sky-dweller/roller-beauty/new-sky-dweller-everose-gold-01_portrait.jpg?imwidth=840 2x"
              />
            }
          >
            <Meta title="SKY-DWELLER" description="Контроль за временем" />
          </Card>
        </div>
      </Link>
      <Link to="/yacht">
        <div>
          <Card
            hoverable
            className="watch-card"
            cover={
              <img
                className="watch-img"
                alt="example"
                src="https://content.rolex.com/dam/new-watches-2022/family-pages/keep-exploring/keep-exploring-yacht-master_m226658-0001_2201ac_001_portrait.jpg?imwidth=380, https://content.rolex.com/dam/new-watches-2022/family-pages/keep-exploring/keep-exploring-yacht-master_m226658-0001_2201ac_001_portrait.jpg?imwidth=380 2x"
              />
            }
          >
            <Meta title="YACHT-MASTER" description="Часы морских просторов" />
          </Card>
        </div>
      </Link>
    </div>
  );
};

export default WatchList;
