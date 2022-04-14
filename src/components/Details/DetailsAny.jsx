import { HeartOutlined } from "@ant-design/icons";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartRolex";

const DetailsAny = ({ item }) => {
  const { addFans, checkFans } = useContext(cartContext);
  const [like, setLike] = useState(checkFans(item.id));
  function clickFan() {
    addFans(item);
    setLike(checkFans(item.id));
  }
  return (
    <div>
      <HeartOutlined
        className="heartOut"
        style={{ color: "white" }}
        onClick={clickFan}
      />
      <div className="cardest">
        <div className="card-div">
          <Link to={`/details/${item.id}`}>
            <img className="card-div-img" src={item.image1} alt="image" />
          </Link>
          <h3>{item.model}</h3>
          <h4>{item.charac}</h4>
          <h2>{"$" + item.price}</h2>
        </div>
      </div>
    </div>
  );
};

export default DetailsAny;
