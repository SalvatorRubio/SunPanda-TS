import React, { useEffect } from "react";
import CitiesList from "@components/HomePage/CitiesList";
import { clearCartState } from "@store/slices/restaurantSlice";
import { useAppDispatch } from "@hooks/useReduxMethods";

import cn from "classnames";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(clearCartState());
  }, []);
  return (
    <section>
      <div className={cn("d-flex justify-content-between", styles.container)}>
        <div className={styles.lElement}></div>
        <div className={cn("d-flex flex-column pt-3 ", styles.logo)}>
          <div className={styles.cElement}></div>
          <p className="text-center p-0 text-uppercase text-white">
            Агрегатор доставки <br /> из ресторанов <br /> вашего города
          </p>
        </div>
        <div className={styles.rElement}></div>
      </div>
      <CitiesList />
    </section>
  );
};

export default HomePage;
