import React, { useReducer } from "react";

export const cartContext = React.createContext();

const INIT_STATE = {
  fan: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_FUN":
      return {
        ...state,
        fan: action.payload,
      };
    default:
      return state;
  }
};
const FanContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getCart1() {
    let box = JSON.parse(localStorage.getItem("box"));
    if (!box) {
      box = { fans: [] };
      localStorage.setItem("box", JSON.stringify(box));
    }

    dispatch({
      type: "GET_FUN",
      payload: box,
    });
  }

  function addFans(product) {
    let box = JSON.parse(localStorage.getItem("box"));
    if (!box) {
      box = { fans: [] };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let isProductInCart = box.fans.some(
      (item) => item.item.id == newProduct.item.id
    );
    if (isProductInCart) {
      box.fans = box.fans.filter((item) => item.item.id != newProduct.item.id);
    } else {
      box.fans.push(newProduct);
    }
    localStorage.setItem("box", JSON.stringify(box));
  }

  function checkFans(id) {
    let box = JSON.parse(localStorage.getItem("box"));
    if (!box) {
      box = { fans: [] };
    }
    let isProductInFan = box.fans.some((item) => item.item.id == id);
    return isProductInFan;
  }

  function deleteFans(id) {
    let box = JSON.parse(localStorage.getItem("box"));
    if (!box) {
      box = { fans: [] };
    }
    box.fans = box.fans.filter((item) => item.item.id != id);
    localStorage.setItem("box", JSON.stringify(box));
    getCart1();
  }

  return (
    <cartContext.Provider
      value={{
        fan: state.fan,
        getCart1,
        addFans,
        checkFans,
        deleteFans,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export default FanContextProvider;
