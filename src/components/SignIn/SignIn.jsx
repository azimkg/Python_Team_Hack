import { Button, Input } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/loginContext";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, error, signIn } = useAuthContext();

  function handleRegister(email, password) {
    signIn(email, password, navigate);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30vw",
        margin: "20vh auto",
        textAlign: "center",
      }}
    >
      <h1>Авторизация</h1>

      <Input
        id="outlined-basic"
        label="email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
      />
      <Input
        id="outlined-basic"
        label="password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
      />
      <Button onClick={() => handleRegister(email, password)}>Sign In</Button>
      <Link to="/reset">
        <p>Забыли пароль</p>
      </Link>
      <p>
        Вы хотите зарегистрироваться?
        <Link to="/signup">Зарегистрироваться</Link>
      </p>
    </div>
  );
};

export default SignIn;
