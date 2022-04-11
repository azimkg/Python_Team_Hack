import React, { useContext, useEffect } from "react";
import { HeartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import { rolexContext } from "../../context/rolexContext";

const CardList = ({ item }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { handleWatchDelete } = useContext(rolexContext);
  useEffect(() => {
    setSearchParams({
      type: "skydweller",
    });
  }, []);

  //   useEffect(() => {
  //     setSearchParams({
  //       type: "yacht",
  //     });
  //   }, []);

  //   useEffect(() => {
  //     setSearchParams({
  //       type: "datejust",
  //     });
  //   }, []);

  //   useEffect(() => {
  //     setSearchParams({
  //       type: "airking",
  //     });
  //   }, []);
  return (
    <div>
      <div className="card-div">
        <img className="card-div-img" src={item.image1} alt="image" />
        <h3>{item.model}</h3>
        <h4>{item.charac}</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "10px",
          }}
        >
          <Button onClick={() => handleWatchDelete(item.id)}>Удалить</Button>
          <Link to={`/edit/${item.id}`}>
            <Button>Изменить</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardList;
