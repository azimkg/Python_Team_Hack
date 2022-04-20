import { Button, Input } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/loginContext";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setConfirm_password] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const { signIn, error, signUp } = useAuthContext();
  // console.log(email, password)

  function handleLogin(email, password, password_confirm, name, last_name) {
    signUp({ email, password, password_confirm, name, last_name }, navigate);
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
      <h1>Регистрация</h1>
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
      <Input
        id="outlined-basic"
        label="email"
        variant="outlined"
        onChange={(e) => setConfirm_password(e.target.value)}
        value={password_confirm}
        placeholder="Confirm Password"
      />
      <Input
        id="outlined-basic"
        label="password"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Name"
      />
      <Input
        id="outlined-basic"
        label="password"
        variant="outlined"
        onChange={(e) => setLastName(e.target.value)}
        value={last_name}
        placeholder="Last name"
      />

      <Button
        onClick={() =>
          handleLogin(email, password, password_confirm, name, last_name)
        }
      >
        Sign up
      </Button>
      <p>
        Если вы авторизованы? <Link to="/signin">Авторизация</Link>
      </p>
    </div>
  );
};

export default SignUp;
