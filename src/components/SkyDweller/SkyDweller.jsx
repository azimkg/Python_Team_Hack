import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { rolexContext } from "../../context/rolexContext";
import CardList from "../CardList/CardList";

const SkyDweller = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { rolex, getWatch } = useContext(rolexContext);
  useEffect(() => {
    getWatch();
  }, []);
  useEffect(() => {
    setSearchParams({
      type: "skydweller",
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

export default SkyDweller;
