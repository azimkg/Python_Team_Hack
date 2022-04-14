import React from "react";
import Routing from "./Routing";
import "antd/dist/antd.css";
import RolexContextProvider from "./context/rolexContext";
import "./App.css";
import FanContextProvider from "./context/cartRolex";

const App = () => {
  return (
    <RolexContextProvider>
      <FanContextProvider>
        <Routing />
      </FanContextProvider>
    </RolexContextProvider>
  );
};

export default App;
