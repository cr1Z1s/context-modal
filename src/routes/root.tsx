import { Route, Routes } from "react-router-dom";

import { FC } from "react";
import { routes } from "./urls";

export const Root: FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
