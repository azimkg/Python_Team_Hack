import React, { useContext, useState } from "react";
import { authContext } from "../../context/authContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";
import "./Chat.css";
import { Avatar, Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Input } from "antd";

const { TextArea } = Input;
let moment = require("moment");
let myDate;
myDate = moment().format("MMMM Do YYYY, h:mm:ss a");

// let newObj = {
//   date: new Date(),
// };
const Chat = () => {
  const { auth, firestore, currentUser } = useContext(authContext);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );
  console.log(user);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      date: new Date(),
    });
    setValue("");
  };

  console.log(messages);

  if (loading) {
    return (
      <div className="container-spinner">
        <Spin indicator={antIcon} />
      </div>
    );
  }

  return (
    <div className="chat">
      <div className="container-kg">
        <div className="container-kg-message">
          <h1 className="myDate">{myDate}</h1>
          {messages.map((message) => (
            <div
              className="fit-text"
              style={{
                margin: 10,
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                padding: 5,
              }}
            >
              <div className="avatar-name">
                <Avatar className="avatar" src={message.photoURL} />
                <div className="name">{message.displayName}</div>
              </div>
              <div className="message-text">{message.text}</div>
            </div>
          ))}
        </div>
        <div className="container-chat">
          <TextArea
            className="textArea"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Введите что нибудь"
            autoSize={{ minRows: 2, maxRows: 2 }}
            style={{ width: "80%" }}
          />
          <button className="sendMessage" onClick={sendMessage}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
