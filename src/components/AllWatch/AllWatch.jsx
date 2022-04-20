import React, { useContext, useEffect, useState } from "react";
import { rolexContext } from "../../context/rolexContext";
import AllWatchCard from "./AllWatchCard";
import "./AllWatch.css";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "antd";

const AllWatch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { rolex, getWatch, countRolex, next, previous } =
    useContext(rolexContext);
  const [page, setPage] = useState(
    searchParams.get("offset") ? searchParams.get("offset") : 1
  );
  useEffect(() => {
    getWatch();
  }, []);

  useEffect(() => {
    setSearchParams({
      page: page,
    });
  }, [page]);

  useEffect(() => {
    getWatch();
  }, [searchParams]);

  console.log(rolex);
  return (
    <>
      <div className="container-cards">
        {rolex.map((item) => (
          <AllWatchCard key={item.id} item={item} />
        ))}
      </div>
      <div className="details-pagination">
        <Pagination
          // total={}
          current={+page}
          // pageSize={}
          defaultCurrent={1}
          onChange={(page) => {
            setPage(page);
          }}
        />
      </div>
    </>
  );
};

export default AllWatch;
