import {
  HeartOutlined,
  SendOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Button, Input, message, Pagination, Spin } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { rolexContext } from "../../context/rolexContext";
import DetailsAny from "./DetailsAny";
import "./Details.css";
// import { authContext } from "../../context/authContext";
import DetailsCommit from "./DetailsCommit";

const Details = () => {
  const { rolexEdit, editWatch, rolex, getWatch, pages } =
    useContext(rolexContext);
  const [edit, setEdit] = useState("");
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  // const { currentUser } = useContext(authContext);
  // const [userCommit, setUserCommit] = useState({ comment: "" });

  const [show, setShow] = useState(false);
  useEffect(() => {
    editWatch(params.id);
  }, [params.id]);

  useEffect(() => {
    setEdit(rolexEdit);
    setSearchParams({
      type: rolexEdit?.type,
      page,
    });
  }, [rolexEdit, page]);

  useEffect(() => {
    getWatch();
  }, [searchParams]);

  // function addCommit(newCommit) {
  //   let newCom = {
  //     ...newCommit,
  //     user: currentUser,
  //     id: Date.now(),
  //   };

  //   let news = [...rolexEdit.comment, newCom];
  //   currentUser
  //     ? handleAddCommit(params.id, news)
  //     : setTimeout(() =>
  //         message.warning(
  //           "Чтобы оставить комментарий нужно зарегистрироваться!"
  //         )
  //       );

  //   setUserCommit("");
  // }
  return edit ? (
    <div>
      <div className="details-container">
        <div className="details-start">
          <div className="details-div">
            <h1 className="details-title">{edit.model}</h1>
            <p className="details-title">{edit.charac}</p>
          </div>
          <div>
            <img className="details-img" src={edit.image} alt="image" />
          </div>
          <div className="details-price">
            <HeartOutlined className="details-heart" />
            <Link to="/form">
              <ShoppingOutlined className="details-heart" />
            </Link>
          </div>
        </div>
      </div>
      <h1 className="details-titles">{edit.titles}</h1>
      <p className="details-p">{edit.desc}</p>
      <div className="details-desc">
        <div style={{ display: "inline-block", overflow: "hidden" }}>
          <img
            src="https://content.rolex.com/dam/2022/harmonised/dial-raw-with-colored-shadow/51144_y_42.png?impolicy=v6-main-feature&sc1=0.7&c1x=750&c1y=750&ho1=-4&vo1=-15&imwidth=1920"
            alt="image"
            className="details-image2"
          />
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
        <h1
          className="details-watches"
          style={{ cursor: "pointer" }}
          // onClick={() => setShow(!show)}
        >
          Комментарии
        </h1>
        {/* {show ? (
          <div className="commit-div">
            <Input.TextArea
              placeholder="Добавить комментарий..."
              value={userCommit.comment}
              name="comment"
              onChange={(e) =>
                setUserCommit({
                  ...userCommit,
                  [e.target.name]: e.target.value,
                })
              }
            />

            <Button
              style={{ margin: 10 }}
              type="primary"
              icon={<SendOutlined />}
              onClick={() => addCommit(userCommit)}
            >
              Опубликовать
            </Button>
          </div>
        ) : null} */}
      </div>
      <div className="watches-div-h4">
        <DetailsCommit />
      </div>

      <div className="watches-div-h3">
        <h3 className="details-watches">Похожие модели </h3>
      </div>
      <div className="details-any">
        {rolex.map((item) => (
          <DetailsAny key={item.id} item={item} />
        ))}
      </div>
    </div>
  ) : (
    <div className="example">
      <Spin />
    </div>
  );
};

export default Details;
