import React from "react";
import HomePage from "@pages/HomePage";
import CityPage from "@pages/CityPage";
import RestaurantPage from "@pages/RestaurantPage";

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
  {
    path: "/:city/shop-:restaurant",
    component: RestaurantPage,
  },
];

export default routes;
