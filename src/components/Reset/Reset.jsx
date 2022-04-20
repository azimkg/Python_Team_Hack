import React, { useContext, useState } from "react";
import { useAuthContext } from "../../context/loginContext";

const Reset = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuthContext();
  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
      />
      <button onClick={() => resetPassword(email)}>Reset</button>
    </div>
  );
};

export default Reset;
