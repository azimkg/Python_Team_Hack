import { HeartOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const AllWatchCard = ({ item }) => {
  return (
    <div>
      <HeartOutlined
        style={{
          fontSize: "20px",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "rgb(195, 192, 192)",
          padding: "5px",
          color: "white",
        }}
      />
      <div className="cardest">
        <div className="card-div">
          <Link to={`/details/${item.id}`}>
            <img className="card-div-img" src={item.image1} alt="image" />
          </Link>
          <h3>{item.model}</h3>
          <h4>{item.charac}</h4>
        </div>
      </div>
    </div>
  );
};

export default AllWatchCard;
