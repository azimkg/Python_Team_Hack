import React from "react";
import Routing from "./Routing";
import "antd/dist/antd.css";
import RolexContextProvider from "./context/rolexContext";
import "./App.css";
import FanContextProvider from "./context/cartRolex";

const App = () => {
  let obj = {
    results: [
      {
        id: 1,
        type: "yacht",
        model: "aaa",
        charac: "iii",
        titles: "ooo",
        desc: "rrr",
        price: "2000.00",
        images: [
          {
            id: 1,
            image: "http://127.0.0.1:8000/media/img/1_1_954_BFZTxF.webp",
            product: 1,
          },
          {
            id: 2,
            image: "http://127.0.0.1:8000/media/img/1_1_954_BFZTxF.webp",
            product: 2,
          },
        ],
      },
    ],
  };
  // for (let key of obj) {
  //   console.log(obj.key);
  // }
  return (
    <RolexContextProvider>
      <FanContextProvider>
        <Routing />
      </FanContextProvider>
    </RolexContextProvider>
  );
};

export default App;
