import React, { useContext, useEffect, useState } from "react";
import { rolexContext } from "../../context/rolexContext";
import AllWatchCard from "./AllWatchCard";
import "./AllWatch.css";
import { useSearchParams } from "react-router-dom";
import { Button, Pagination } from "antd";

const AllWatch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { rolex, getWatch, countRolex, pages } = useContext(rolexContext);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getWatch();
  }, []);

  useEffect(() => {
    setSearchParams({
      page,
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
        <div>
          <Button
            className="prev"
            disabled={page === 1 ? true : false}
            onClick={() => setPage(page - 1)}
          >
            Предыдущая
          </Button>
          <span></span>
          <Button
            disabled={page === pages ? true : false}
            className="next"
            onClick={() => setPage(page+1)}
          >
            Следующая
          </Button>
        </div>
      </div>
    </>
  );
};

export default AllWatch;
