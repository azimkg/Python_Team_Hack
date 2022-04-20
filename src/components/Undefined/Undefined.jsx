import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Undefined.css";

const Undefined = () => {
  return (
    <div className="undefined">
      <div className="null">
        <h1 className="undefineded">ERROR 404</h1>
        <Link to="/">
          <Button type="primary">На главную</Button>
        </Link>
      </div>
    </div>
  );
};

export default Undefined;
