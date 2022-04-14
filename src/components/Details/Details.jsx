import { HeartOutlined } from "@ant-design/icons";
import { Pagination, Spin } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { rolexContext } from "../../context/rolexContext";
import DetailsAny from "./DetailsAny";
import "./Details.css";

const Details = () => {
  const { rolexEdit, editWatch, rolex, getWatch, countRolex } =
    useContext(rolexContext);
  const [edit, setEdit] = useState("");
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(3);
  useEffect(() => {
    editWatch(params.id);
  }, [params.id]);

  useEffect(() => {
    setEdit(rolexEdit);
    setSearchParams({
      type: rolexEdit?.type,
      _start: 1,
      _end: 7,
      _page: page,
      _limit: limit,
    });
  }, [rolexEdit, page, limit]);

  useEffect(() => {
    getWatch();
  }, [searchParams]);

  return edit ? (
    <div>
      <div className="details-container">
        <div className="details-start">
          <div className="details-div">
            <h1 className="details-title">{edit.model}</h1>
            <p className="details-title">{edit.charac}</p>
          </div>
          <div>
            <img className="details-img" src={edit.image1} alt="image" />
          </div>
          <div className="details-price">
            <HeartOutlined className="details-heart" />
          </div>
        </div>
      </div>
      <h1 className="details-titles">{edit.titles}</h1>
      <p className="details-p">{edit.desc}</p>
      <div className="details-desc">
        <div style={{ display: "inline-block", overflow: "hidden" }}>
          <img src={edit.image2} alt="image" className="details-image2" />
        </div>
        <div className="details-text">
          <h1
            style={{
              color: "white",
              fontFamily: "'Alegreya Sans SC', sans-serif",
              fontWeight: "bold",
            }}
          >
            ОПРЕДЕЛЕНИЕ ВРЕМЕНИ В ПОЛЕТЕ
          </h1>
          <p
            style={{
              color: "white",
              fontFamily: "'Alegreya Sans SC', sans-serif",
              fontWeight: "bold",
            }}
          >
            Яркая особенность модели ROLEX – циферблат с крупными цифрами 3, 6 и
            9 и отчетливой минутной разметкой по краю циферблата, по которой
            удобно определять время в полете. Циферблат украшен надписью
            «ROLEX», выполненной в том же оригинальном стиле, что и на
            исторической модели 1950‑х годов.
          </p>
        </div>
      </div>
      <div className="watches-div-h3">
        <h3 className="details-watches">Галерея</h3>
      </div>
      <div className="gallery-main">
        <div className="gallery">
          <img
            className="gallery-img"
            src="https://content.rolex.com/dam/model-page/gallery/m126900-0001/model-page-air-king_m126900-0001_m126900-0001_2201jva_001_medium_1_portrait.jpg?imwidth=420, https://content.rolex.com/dam/model-page/gallery/m126900-0001/model-page-air-king_m126900-0001_m126900-0001_2201jva_001_medium_1_portrait.jpg?imwidth=840 2x"
            alt="img"
          />
        </div>
        <div className="gallery">
          <img
            className="gallery-img"
            src="https://content.rolex.com/dam/model-page/gallery/m126900-0001/model-page-air-king_m126900-0001_m126900-0001_2201ac_006_small_2_portrait.jpg?imwidth=380, https://content.rolex.com/dam/model-page/gallery/m126900-0001/model-page-air-king_m126900-0001_m126900-0001_2201ac_006_small_2_portrait.jpg?imwidth=720 2x"
            alt="img"
          />
        </div>
        <div className="gallery">
          <img
            className="gallery-img"
            src="https://content.rolex.com/dam/model-page/gallery/m126900-0001/model-page-air-king_m126900-0001_m126900-0001_2201ac_001_large_3_portrait.jpg?imwidth=840, https://content.rolex.com/dam/model-page/gallery/m126900-0001/model-page-air-king_m126900-0001_m126900-0001_2201ac_001_large_3_portrait.jpg?imwidth=1668 2x"
            alt="img"
          />
        </div>
        <div className="gallery">
          <img
            className="gallery-img"
            src="https://content.rolex.com/dam/model-page/gallery/m126900-0001/model-page-air-king_m126900-0001_m126900-0001_2201ac_005_medium_4_portrait.jpg?imwidth=420, https://content.rolex.com/dam/model-page/gallery/m126900-0001/model-page-air-king_m126900-0001_m126900-0001_2201ac_005_medium_4_portrait.jpg?imwidth=840 2x"
            alt="img"
          />
        </div>
      </div>
      <div className="gallery-container">
        <div className="disttributor">
          <div className="disttributor-title">
            <h2
              style={{
                color: "white",
                fontFamily: "'Alegreya Sans SC', sans-serif",
                fontWeight: "bold",
              }}
            >
              СВЯЗАТЬСЯ С ОФИЦИАЛЬНЫМ ДИСТРИБЬЮТОРОМ ROLEX
            </h2>
            <h3
              style={{
                color: "white",
                fontFamily: "'Alegreya Sans SC', sans-serif",
                fontWeight: "bold",
              }}
            >
              Коллекция Rolex включает классические и профессиональные часы
              разных размеров, из различных материалов, с различными вариантами
              циферблатов и браслетов на любой вкус.
            </h3>
            <button className="btnsa">Связаться с дистрибьютором</button>
          </div>
        </div>
      </div>
      <div className="watches-div-h3">
        <h3 className="details-watches">Похожие модели </h3>
      </div>
      <div className="details-any">
        {rolex.map((item) => (
          <DetailsAny key={item.id} item={item} />
        ))}
      </div>
      <div className="details-pagination">
        <Pagination
          total={+countRolex}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
        />
      </div>
    </div>
  ) : (
    <div className="example">
      <Spin />
    </div>
  );
};

export default Details;
