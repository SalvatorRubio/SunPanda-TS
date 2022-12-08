import React from "react";
import { useNavigate } from "react-router";
import OrderForm from "@components/Order/OrderForm";

import arrow from "./img/left-arrow.svg";
import cn from "classnames";
import styles from "./Order.module.css";
import OrderProductsList from "@components/Order/OrderForm/OrderProductsList";

const Order: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3">
      <h1 className={styles.nav__back} onClick={() => navigate(-1)}>
        <img src={arrow} alt="arrow" /> Вернуться в ресторан
      </h1>
      <h1 className={cn("fw-bold mt-4", styles.title)}>Оформление заказа</h1>
      <div className="d-flex justify-content-center flex-wrap">
        <OrderForm />
        <OrderProductsList />
      </div>
    </div>
  );
};

export default Order;
