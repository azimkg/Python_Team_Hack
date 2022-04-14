import React, { useContext, useState } from "react";
import { Form, Input, Button, Modal, message } from "antd";
import "./AddWatch.css";
import { rolexContext } from "../../context/rolexContext";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const AddWatch = () => {
  const { handleAddWatch } = useContext(rolexContext);
  const [model, setModel] = useState("");
  const [image1, setImage1] = useState("");
  const [charac, setCharac] = useState("");
  const [titles, setTitles] = useState("");
  const [desc, setDesc] = useState("");
  const [image2, setImage2] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const onFinish = (values) => {
    console.log(values);
  };

  function addWatch() {
    if (!image1 || !image2 || !titles || !model || !desc || !charac) {
      return setTimeout(() => {
        message.error("Заполните все поля!");
      }, 500);
    }
    let newWatch = {
      image1,
      model,
      charac,
      titles,
      desc,
      image2,
      price,
      type,
    };
    handleAddWatch(newWatch);
    handleOk();
    setImage1("");
    setImage2("");
    setModel("");
    setCharac("");
    setDesc("");
    setTitles("");
    setType("");
    setPrice("");
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="AddWatch">
      <Button type="primary" className="custom-btn btn-13" onClick={showModal}>
        Add Watch
      </Button>
      <Modal
        title="Add new watch"
        visible={isModalVisible}
        onOk={addWatch}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item label="Image 1">
            <Input value={image1} onChange={(e) => setImage1(e.target.value)} />
          </Form.Item>
          <Form.Item label="Model">
            <Input value={model} onChange={(e) => setModel(e.target.value)} />
          </Form.Item>
          <Form.Item label="Characteristic">
            <Input value={charac} onChange={(e) => setCharac(e.target.value)} />
          </Form.Item>
          <Form.Item label="Title model">
            <Input value={titles} onChange={(e) => setTitles(e.target.value)} />
          </Form.Item>
          <Form.Item label="Description">
            <Input value={desc} onChange={(e) => setDesc(e.target.value)} />
          </Form.Item>
          <Form.Item label="Image 2">
            <Input value={image2} onChange={(e) => setImage2(e.target.value)} />
          </Form.Item>
          <Form.Item label="Price">
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Type">
            <Input value={type} onChange={(e) => setType(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddWatch;
