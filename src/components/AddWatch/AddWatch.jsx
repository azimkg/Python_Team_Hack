import React, { useContext, useState } from "react";
import { Form, Input, Button, Modal, message, Upload } from "antd";
import "./AddWatch.css";
import { rolexContext } from "../../context/rolexContext";
import { UploadOutlined } from "@ant-design/icons";
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
  const [image, setImage] = useState("");
  const [charac, setCharac] = useState("");
  const [titles, setTitles] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const onFinish = (values) => {
    console.log(values);
  };
  // const props = {
  //   // name: "file",
  //   // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  //   // headers: {
  //   //   authorization: "authorization-text",
  //   // },
  //   onChange(info) {
  //     if (info.file.status !== "uploading") {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };
  function addWatch() {
    if (!titles || !model || !desc || !charac) {
      return setTimeout(() => {
        message.error("Заполните все поля!");
      }, 500);
    }
    let newWatch = {
      image,
      model,
      charac,
      titles,
      desc,
      price,
      type,
    };
    console.log(newWatch);
    handleAddWatch(newWatch);
    handleOk();
    setImage("");
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
  console.log(image);
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
          <Form.Item label="Image ">
            {/* <Input value={image} onChange={(e) => setImage(e.target.value)} /> */}
            {/* <Upload
              onChange={(e) => console.log(e.file.originFileObj)}
              value={image}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload> */}
            <input
              onChange={(e) => setImage(e.target.files[0])}
              // value={image}
              type="file"
              name=""
              id=""
            />
            <img src={image ? image : ""} alt="" />
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
