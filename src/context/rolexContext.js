import React, { useReducer } from "react";
import axios from "axios";
import { ROLEX_API } from "../helpers/API";
import { GET_EDIT_WATCH, GET_WATCH } from "../helpers/cases";

export const rolexContext = React.createContext();

const INIT_STATE = {
  rolex: [],
  editRolex: null,
  countRolex: 0,
  pages: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_WATCH:
      return {
        ...state,
        rolex: action.payload.results,
        pages: action.payload.count / 5,
        // next
        // countRolex: action.payload.headers["x-total-count"],
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
console.log(INIT_STATE.rolex);

const RolexContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getWatch() {
    // let res = await axios(ROLEX_API + window.location.search);
    let res = await axios(`${ROLEX_API}details/` + window.location.search);
    console.log(res);
    dispatch({
      type: GET_WATCH,
      payload: res.data,
    });
  }

  async function handleAddWatch(newWatch) {
    let formData = new FormData();
    formData.append("model", newWatch.model);
    formData.append("charac", newWatch.charac);
    formData.append("titles", newWatch.titles);
    formData.append("desc", newWatch.desc);
    formData.append("price", newWatch.price);
    formData.append("image", newWatch.image);
    formData.append("type", newWatch.type);
    // let token = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("token")).access
    }`;
    await axios.post(`${ROLEX_API}details/`, formData, {
      headers: { Authorization },
    });
    getWatch();
  }

  async function handleWatchDelete(id) {
    await axios.delete(`${ROLEX_API}details/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("token")).access
        }`,
      },
    });
    getWatch();
  }

  async function editWatch(id) {
    let res = await axios(`${ROLEX_API}details/${id}/`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("token")).access
        }`,
      },
    });
    dispatch({
      type: GET_EDIT_WATCH,
      payload: res,
    });
  }

  async function handleEditWatch(id, edited) {
    let formData = new FormData();
    formData.append("model", edited.model);
    formData.append("charac", edited.charac);
    formData.append("titles", edited.titles);
    formData.append("desc", edited.desc);
    formData.append("price", edited.price);
    formData.append("type", edited.type);
    const Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("token")).access
    }`;
    console.log(Authorization);
    await axios.patch(`${ROLEX_API}edit/${id}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization,
      },
    });
    getWatch();
  }

  async function handleAddCommit(id, comments) {
    let formData = new FormData();
    formData.append("product", id);
    formData.append("name", comments.name);
    formData.append("text", comments.text);
    const Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("token")).access
    }`;
    await axios.post(`${ROLEX_API}details/${id}/comment/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      Authorization,
    });
  }

  return (
    <rolexContext.Provider
      value={{
        countRolex: state.countRolex,
        rolex: state.rolex,
        rolexEdit: state.rolexEdit,
        pages: state.pages,
        getWatch,
        handleAddWatch,
        handleWatchDelete,
        editWatch,
        handleEditWatch,
        handleAddCommit,
      }}
    >
      {children}
    </rolexContext.Provider>
  );
};
export default RolexContextProvider;
