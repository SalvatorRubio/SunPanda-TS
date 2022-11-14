import React, { useEffect, useState } from "react";
import { getApiResource } from "@utils/network";
import { API_RESTAURANTS_DATA } from "@constants/api";
import { useNavigate, useParams } from "react-router";

import arrow from "./img/left-arrow.svg";

import styles from "./RestaurantPage.module.css";
import cn from "classnames";
import RestaurantInfo from "@components/RestaurantPage/RestaurantInfo";
import MenuList from "@components/RestaurantPage/MenuList";
import ProductList from "@components/RestaurantPage/ProductList";

type TypeRestaurantData = {
  name: string;
  costDelivery: number;
  range: TypeRestaurantRange[];
};

export type TypeRestaurantRange = {
  name: string;
  img: string;
  products: TypeProduct[];
};

export type TypeProduct = {
  name: string;
  composition: string[];
  price: number;
  img: string;
};

const RestaurantPage: React.FC = () => {
  const [costDelivery, setCostDelivery] = useState<number>(0);
  const [restaurantRange, setRestaurantRange] = useState<TypeRestaurantRange[]>(
    []
  );
  const [category, setCategory] = useState<string>("");
  const { city, restaurant } = useParams();
  const navigate = useNavigate();

  const getRestaurantApi = async (url: string) => {
    try {
      const res: TypeRestaurantData[] = await getApiResource(url);
      res.map((item) => {
        if (item.name === encodeURI(restaurant!)) {
          setCostDelivery(item.costDelivery);
          setRestaurantRange(item.range);
        }
        return item;
      });
    } catch (err) {
      //TODO Сделать обработку ошибок
      console.log(err);
    }
  };

  useEffect(() => {
    getRestaurantApi(API_RESTAURANTS_DATA + city);
  }, []);

  return (
    <div className="p-3">
      <h1 className={styles.nav__back} onClick={() => navigate(-1)}>
        <img src={arrow} alt="arrow" /> Все рестораны
      </h1>
      <h1 className={cn("fw-bold mt-4", styles.title)}>{restaurant}</h1>
      <RestaurantInfo costDelivery={costDelivery} />
      <MenuList restaurantRange={restaurantRange} setCategory={setCategory} />
      <ProductList restaurantRange={restaurantRange} category={category} />
    </div>
  );
};

export default RestaurantPage;
