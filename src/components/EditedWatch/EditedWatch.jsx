import { Button, Form, Input, Spin } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { rolexContext } from "../../context/rolexContext";
import "./EditedWatch.css";

const EditedWatch = () => {
  const { rolexEdit, editWatch, handleEditWatch } = useContext(rolexContext);
  const [edit, setEdit] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    editWatch(params.id);
  }, []);

  useEffect(() => {
    setEdit(rolexEdit);
  }, [rolexEdit]);

  function handleValue(e) {
    let newWatch = { ...edit, [e.target.name]: e.target.value };
    setEdit(newWatch);
  }

  function save() {
    handleEditWatch(params.id, edit);
    navigate("/admin");
  }

  return edit ? (
    <div className="edit-container">
      <h1 style={{ textAlign: "center" }}>Хотите что-то изменить?</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Image">
          <Input name="image" value={edit.image} onChange={handleValue} />
        </Form.Item>
        <Form.Item label="Model">
          <Input name="model" value={edit.model} onChange={handleValue} />
        </Form.Item>
        <Form.Item label="Characteristic">
          <Input name="charac" value={edit.charac} onChange={handleValue} />
        </Form.Item>
        <Form.Item label="Title model">
          <Input name="titles" value={edit.titles} onChange={handleValue} />
        </Form.Item>
        <Form.Item label="Description">
          <Input name="desc" value={edit.desc} onChange={handleValue} />
        </Form.Item>
        <Form.Item label="Type">
          <Input name="image2" value={edit.type} onChange={handleValue} />
        </Form.Item>
      </Form>
      <Button
        onClick={save}
        style={{ width: "100%", maxWidth: "50%", margin: "0 auto" }}
      >
        Сохранить
      </Button>
    </div>
  ) : (
    <div className="example">
      <Spin />
    </div>
  );
};

export default EditedWatch;
