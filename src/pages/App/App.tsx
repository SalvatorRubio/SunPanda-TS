import React from "react";
import routes from "@routes/routes";
import { Route, Routes } from "react-router";
import Header from "@components/Header";

interface IRoutes {
  path: string;
  component: React.FC;
}

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((route: IRoutes) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </>
  );
};

export default App;