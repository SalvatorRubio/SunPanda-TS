import React from "react";
import HomePage from "@pages/HomePage";
import CityPage from "@pages/CityPage";
import RestaurantPage from "@pages/RestaurantPage";
import Order from "@pages/Order";

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
    path: "/City-:city",
    component: CityPage,
  },
  {
    path: "/City-:city/shop-:restaurant",
    component: RestaurantPage,
  },
  { path: "/City-:city/order", component: Order },
];

export default routes;
