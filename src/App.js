import React from "react";
import Routing from "./Routing";
import "antd/dist/antd.css";
import RolexContextProvider from "./context/rolexContext";
import "./App.css";

const App = () => {
  return (
    <RolexContextProvider>
      <Routing />
    </RolexContextProvider>
  );
};

export default App;
