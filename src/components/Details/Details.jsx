import { Spin } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { rolexContext } from "../../context/rolexContext";
import "./Details.css";

const Details = () => {
  const { rolexEdit, editWatch, handleEditWatch } = useContext(rolexContext);
  const [edit, setEdit] = useState("");
  const params = useParams();

  useEffect(() => {
    editWatch(params.id);
  }, []);
  useEffect(() => {
    setEdit(rolexEdit);
  }, [rolexEdit]);

  return edit ? (
    <div>
      <div className="details-container">
        <div className="details-start">
          <div>
            <h1>{edit.model}</h1>
            <p>{edit.charac}</p>
          </div>
          <div>
            <img src={edit.image1} alt="image" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  ) : (
    <div className="example">
      <Spin />
    </div>
  );
};

export default Details;
