import { CloseSquareOutlined } from "@ant-design/icons";
import { List } from "antd";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartRolex";
import "./Cart.css";

const CartRolex = () => {
  const { fan, getCart1, deleteFans } = useContext(cartContext);

  useEffect(() => {
    getCart1();
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <List
        itemLayout="vertical"
        dataSource={fan.fans}
        renderItem={(item) => (
          <div className="cart-list">
            <div className="cardest">
              <div className="card-divs">
                <CloseSquareOutlined
                  key="bit"
                  className="cart-form"
                  style={{ color: "grey" }}
                  onClick={() => deleteFans(item.item.id)}
                />
                <Link to={`/details/${item.item.id}`}>
                  <img
                    className="card-div-img"
                    src={item.item.image}
                    alt="image"
                  />
                </Link>
                <h3>{item.item.model}</h3>
                <h4>{item.item.charac}</h4>
                <h3>{"$" + item.item.price}</h3>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CartRolex;
