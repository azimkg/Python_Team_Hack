import { Button, Input } from "antd";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/loginContext";
import "./Activate.css";

const Activate = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [activation_code, setActivation_code] = useState("");
  const { activateLog } = useContext(authContext);
  function activateLogin(email, activation_code) {
    activateLog(email, activation_code, navigate);
  }
  return (
    <div className="azor">
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Код активации"
        value={activation_code}
        onChange={(e) => setActivation_code(e.target.value)}
      />
      <Button onClick={() => activateLogin(email, activation_code)}>
        Активировать
      </Button>
    </div>
  );
};

export default Activate;
