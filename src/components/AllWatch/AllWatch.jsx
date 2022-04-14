import React, { useContext, useEffect, useState } from "react";
import { rolexContext } from "../../context/rolexContext";
import AllWatchCard from "./AllWatchCard";
import "./AllWatch.css";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "antd";

const AllWatch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { rolex, getWatch, countRolex } = useContext(rolexContext);
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(9);
  useEffect(() => {
    getWatch();
  }, []);

  useEffect(() => {
    setSearchParams({
      _page: page,
      _limit: limit,
    });
  }, [page, limit]);

  useEffect(() => {
    getWatch();
  }, [searchParams]);

  return (
    <>
      <div className="container-cards">
        {rolex.map((item) => (
          <AllWatchCard key={item.id} item={item} />
        ))}
      </div>
      <div className="details-pagination">
        <Pagination
          total={+countRolex}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
        />
      </div>
    </>
  );
};

export default AllWatch;
