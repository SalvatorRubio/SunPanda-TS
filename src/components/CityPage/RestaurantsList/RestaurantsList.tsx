import React from "react";
import { RestaurantsInfo } from "@pages/CityPage/CityPage";
import { NavLink } from "react-router-dom";

import cn from "classnames";

import styles from "./RestaurantsList.module.css";

type TypeRestaurantsList = {
  restaurants: RestaurantsInfo[];
  refRestaurants: React.RefObject<HTMLDivElement>;
};

export const RestaurantsList: React.FC<TypeRestaurantsList> = ({
  restaurants,
  refRestaurants,
}) => {
  return (
    <div className="my-5 px-3" ref={refRestaurants}>
      <h1 className={cn("pb-3", styles.title)}>Рестораны</h1>
      <div className="d-flex flex-wrap">
        {restaurants.map(({ img, name, price, timeEnd, timeStart }) => {
          return (
            <NavLink
              key={name}
              to={`shop-${name}`}
              // onClick={() => handleClick(price, timeStart, timeEnd, name)}
              className={cn(
                "text-decoration-none my-1 m-sm-2 rounded-3",
                styles.restaurants__item
              )}
            >
              <div className="d-flex flex-column rounded-3 bg-white">
                <img
                  src={img}
                  alt={name}
                  className="rounded-top"
                  style={{ height: 130, objectFit: "cover" }}
                />
                <div className="mt-3 mb-4">
                  <p className="text-center text-black m-0">
                    Бесплатная доставка от
                    <span className="fw-bolder">{price}</span>
                  </p>
                  <p className="text-center m-0 text-black">
                    Время работы
                    <span className="fw-bolder">
                      c {timeStart} до {timeEnd}
                    </span>
                  </p>
                </div>
              </div>
            </NavLink>
          );
        })}
        <div
          className={cn(
            "rounded-3 my-1 m-sm-2 d-flex align-items-center flex-column justify-content-center bg-white",
            styles.restaurants__itemNew
          )}
        >
          <h1 className="text-center text-uppercase mb-4">Скоро!!!</h1>
          <h1 className="text-center text-uppercase mb-4">Новый ресторан</h1>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsList;
