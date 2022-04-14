import React, { useReducer } from "react";
import axios from "axios";
import { ROLEX_API } from "../helpers/API";
import { GET_EDIT_WATCH, GET_WATCH } from "../helpers/cases";

export const rolexContext = React.createContext();

const INIT_STATE = {
  rolex: [],
  editRolex: null,
  countRolex: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_WATCH:
      return {
        ...state,
        rolex: action.payload.data,
        countRolex: action.payload.headers["x-total-count"],
      };
    case GET_EDIT_WATCH:
      return {
        ...state,
        rolexEdit: action.payload.data,
      };
    default:
      return state;
  }
};

const RolexContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getWatch() {
    let res = await axios(ROLEX_API + window.location.search);
    dispatch({
      type: GET_WATCH,
      payload: res,
    });
  }
  async function handleAddWatch(newWatch) {
    await axios.post(ROLEX_API, newWatch);
    getWatch();
  }
  async function handleWatchDelete(id) {
    await axios.delete(`${ROLEX_API}/${id}`);
    getWatch();
  }

  async function editWatch(id) {
    let res = await axios(`${ROLEX_API}/${id}`);
    dispatch({
      type: GET_EDIT_WATCH,
      payload: res,
    });
  }

  async function handleEditWatch(id, edited) {
    await axios.patch(`${ROLEX_API}/${id}`, edited);
    getWatch();
  }

  return (
    <rolexContext.Provider
      value={{
        countRolex: state.countRolex,
        rolex: state.rolex,
        rolexEdit: state.rolexEdit,
        getWatch,
        handleAddWatch,
        handleWatchDelete,
        editWatch,
        handleEditWatch,
      }}
    >
      {children}
    </rolexContext.Provider>
  );
};
export default RolexContextProvider;
