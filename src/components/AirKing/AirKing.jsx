import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { rolexContext } from "../../context/rolexContext";
import CardList from "../CardList/CardList";

const AirKing = () => {
  const { rolex, getWatch } = useContext(rolexContext);
  useEffect(() => {
    getWatch();
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      type: "airking",
    });
  }, []);

  useEffect(() => {
    getWatch();
  }, [searchParams]);
  return (
    <div className="yachtMaster">
      {rolex.map((item) => (
        <CardList key={item.id} item={item} />
      ))}
    </div>
  );
};

export default AirKing;
