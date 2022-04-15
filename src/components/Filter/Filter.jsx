import React from "react";
import { Slider } from "antd";
import "./Filter.css";

const Filters = ({ price, setPrice }) => {
  return (
    <div>
      <h3>Фильтр по цене</h3>
      <Slider
        value={price}
        onChange={(e) => setPrice(e)}
        defaultValue={[1, 6000]}
        min={50}
        max={6000}
        step={1}
        range
      />
    </div>
  );
};

export default Filters;
