import { Button, Input } from "antd";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/loginContext";
import "./Forget.css";

const Forget = () => {
  const navigate = useNavigate();
  const { forgetAccount } = useAuthContext();
  const [email, setEmail] = useState("");
  function handleForget() {
    forgetAccount(email, navigate);
  }
  return (
    <div className="forget">
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleForget}>Отправить</Button>
    </div>
  );
};

export default Forget;
