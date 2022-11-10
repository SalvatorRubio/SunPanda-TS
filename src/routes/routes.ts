import HomePage from "@pages/HomePage";
import CityPage from "@pages/CityPage";
import React from "react";

type Routes = {
  path: string;
  component: React.FC;
};

const routes: Routes[] = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/:city",
    component: CityPage,
  },
];

export default routes;
