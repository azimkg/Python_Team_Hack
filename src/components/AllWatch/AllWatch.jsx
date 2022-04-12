import React, { useContext, useEffect } from "react";
import { rolexContext } from "../../context/rolexContext";
import AllWatchCard from "./AllWatchCard";
import "./AllWatch.css";

const AllWatch = () => {
  const { rolex, getWatch } = useContext(rolexContext);

  useEffect(() => {
    getWatch();
  }, []);

  return (
    <div className="container-cards">
      {rolex.map((item) => (
        <AllWatchCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default AllWatch;
