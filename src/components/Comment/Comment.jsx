import { Input } from "antd";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/loginContext";
import { rolexContext } from "../../context/rolexContext";

const Comment = () => {
  const { handleAddCommit } = useContext(rolexContext);
  const { user } = useAuthContext();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const params = useParams();
  function addCommit() {
    let obj = {
      name: user,
      text: text,
    };
    handleAddCommit(params.id, obj);
  }
  return (
    <div>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default Comment;
