import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useAuthContext } from "../../context/loginContext";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const { confirmResetPassword } = useAuthContext();
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setToken(searchParams.get("token"));
  }, []);
  return (
    <div>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
      />
      <button onClick={() => confirmResetPassword(password, token)}>
        Save
      </button>
    </div>
  );
};

export default ResetPassword;
