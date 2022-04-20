import React, { useContext, useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { rolexContext } from "../../context/rolexContext";

const CardList = ({ item }) => {
  const { handleWatchDelete } = useContext(rolexContext);
  return (
    <div className="cardest">
      <div className="card-div">
        <img className="card-div-img" src={item.image} alt="image" />
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
