import React from "react";
import Routing from "./Routing";
import "antd/dist/antd.css";
import RolexContextProvider from "./context/rolexContext";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <RolexContextProvider>
      <Navbar />
      <Routing />
    </RolexContextProvider>
  );
};

export default App;
