import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../Routing";

const AppRouter = () => {
  const user = true;
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route path={path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
