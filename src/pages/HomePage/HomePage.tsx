import React from "react";
import cn from "classnames";

import styles from "./HomePage.module.css";
import CitiesList from "@components/HomePage/CitiesList";

const HomePage: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
