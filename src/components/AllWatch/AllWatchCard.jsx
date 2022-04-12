import { HeartOutlined } from "@ant-design/icons";
import React from "react";

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
          <img className="card-div-img" src={item.image1} alt="image" />
          <h3>{item.model}</h3>
          <h4>{item.charac}</h4>
        </div>
      </div>
    </div>
  );
};

export default AllWatchCard;
