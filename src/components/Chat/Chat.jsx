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
    <div>
      <div className="container-kg">
        <div className="container-kg-message">
          {messages.map((message) => (
            <div
              style={{
                margin: 10,
                border:
                  user.uid === message.uid
                    ? "2px solid green"
                    : "2px dashed red",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
                padding: 5,
              }}
            >
              <div>
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </div>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <div className="container-chat">
          <TextArea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Controlled autosize"
            autoSize={{ minRows: 2, maxRows: 2 }}
            style={{ width: "80%" }}
          />
          <Button type="primary" onClick={sendMessage}>
            Отправить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
