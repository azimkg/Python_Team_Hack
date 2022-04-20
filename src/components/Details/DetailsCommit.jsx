import { List } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { rolexContext } from "../../context/rolexContext";

const DetailsCommit = () => {
  const { rolexEdit, handleAddCommit } = useContext(rolexContext);
  // const { currentUser } = useContext(authContext);
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  function deleteCommit(id) {
    let newCommit = rolexEdit.comments.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    handleAddCommit(params.id, newCommit);
  }

  console.log(rolexEdit);
  return (
    <div>
      <List
        itemLayout="vertical"
        dataSource={rolexEdit.comments}
        renderItem={(item) => (
          <div>
            <h2 icon>{item.user}</h2>
            <h3>{item.comment}</h3>
          </div>
        )}
      />
    </div>
  );
};

export default DetailsCommit;
