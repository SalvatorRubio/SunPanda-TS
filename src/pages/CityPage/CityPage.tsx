import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import styles from "./CityPage.module.css";
import cn from "classnames";
import { getApiResource } from "@utils/network";
import { API_CITY_RESTAURANTS } from "@constants/api";
import SliderDiscount from "@components/CityPage/SliderDiscounts";
import Steps from "@components/CityPage/Steps";
import RestaurantsList from "@components/CityPage/RestaurantsList";

type CityInfo = {
  discounts: string[];
  restaurants: RestaurantsInfo[];
};

export type RestaurantsInfo = {
  img: string;
  name: string;
  price: string;
  timeEnd: string;
  timeStart: string;
};

const CityPage: React.FC = () => {
  const { city } = useParams();
  const [discounts, setDiscounts] = useState<string[]>([]);
  const [restaurants, setRestaurants] = useState<RestaurantsInfo[]>([]);

  const refRestaurants = useRef<HTMLDivElement>(null);

  const getCityInfo = async () => {
    try {
      const res: CityInfo = await getApiResource(API_CITY_RESTAURANTS + city);
      setRestaurants(res.restaurants);
      setDiscounts(res.discounts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCityInfo();
  }, []);

  const buttonHandler = () => {
    if (refRestaurants.current !== null)
      refRestaurants.current.scrollIntoView();
  };

  return (
    <>
      <div className="w-100">
        <div className={styles.banner}>
          <div
            className={cn(
              "d-flex flex-column justify-content-md-center justify-content-start w-75 m-auto",
              styles.banner__title
            )}
          >
            <h1 className="">ДОСТАВКА ГОТОВЫХ БЛЮД ИЗ РЕСТОРАНОВ</h1>
            <button className="border-0" onClick={buttonHandler}>
              Заказать доставку
            </button>
          </div>
        </div>
      </div>
      <SliderDiscount discounts={discounts} />
      <Steps />
      <RestaurantsList
        restaurants={restaurants}
        refRestaurants={refRestaurants}
      />
    </>
  );
};

export default CityPage;
