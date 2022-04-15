import React from "react";
import Routing from "./Routing";
import "antd/dist/antd.css";
import RolexContextProvider from "./context/rolexContext";
import "./App.css";
import FanContextProvider from "./context/cartRolex";
import AuthContextProvider from "./context/authContext";

const App = () => {
  return (
    <AuthContextProvider>
      <RolexContextProvider>
        <FanContextProvider>
          <Routing />
        </FanContextProvider>
      </RolexContextProvider>
    </AuthContextProvider>
  );
};

export default App;
