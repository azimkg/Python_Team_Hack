import { Input } from "antd";
import "./Search.css";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { rolexContext } from "../../context/rolexContext";

const Search = () => {
  const [visible, setVisible] = useState(false);
  const { getWatch } = useContext(rolexContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") ? searchParams.get("search") : ""
  );

  useEffect(() => {
    getWatch();
  }, []);

  useEffect(() => {
    setSearchParams({
      search: searchValue,
    });
  }, [searchValue]);

  useEffect(() => {
    getWatch();
  }, [searchParams]);
  return (
    <div className="search-block container">
      <svg
        aria-labelledby="search-picto"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        class="sc-oTBUA hXGkGv icon"
        name="search"
        aria-hidden="true"
        alt=""
        className="search-class"
        onClick={() => setVisible(!visible)}
      >
        <path
          d="m15 13.6-4.1-4.1c.7-1 1.1-2.2 1.1-3.5 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.3 0 2.5-.4 3.5-1.1l4.1 4.1zm-9-3.6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
          id="search"
        />
      </svg>

      <div className="input-content">
        {visible ? (
          <input
            className="input"
            visible={visible}
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Search;
