import React from "react";
import Routing from "./Routing";
import "antd/dist/antd.css";
import RolexContextProvider from "./context/rolexContext";
import "./App.css";
import FanContextProvider from "./context/cartRolex";
import LoginContextProvider from "./context/loginContext";
import AuthContextProvider from "./context/authContext";

const App = () => {
  return (
    <AuthContextProvider>
      <LoginContextProvider>
        <RolexContextProvider>
          <FanContextProvider>
            <Routing />
          </FanContextProvider>
        </RolexContextProvider>
      </LoginContextProvider>
    </AuthContextProvider>
  );
};

export default App;
