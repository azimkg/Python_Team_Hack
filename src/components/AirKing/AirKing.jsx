import { LeftOutlined } from "@ant-design/icons";
import React, { useContext, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
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
    <div>
      <Link to="/admin">
        <p className="pishka">
          <LeftOutlined className="back" />
          Назад
        </p>
      </Link>
      <div className="yachtMaster">
        {rolex.map((item) => (
          <CardList key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AirKing;
