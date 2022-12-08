import React from "react";
import { useAppSelector } from "@hooks/useReduxMethods";
import cn from "classnames";
import styles from "./OrderProductsList.module.css";
import ProductsListCart from "@UI/ProductsListCart";

const OrderProductsList = () => {
  const {
    cartProducts,
    shopName,
    freeDeliveryPrice,
    totalCost,
    costDelivery,
    deliveryMethod,
  } = useAppSelector((state) => state.restaurant);

  const sumTotal = (): string | number => {
    let total = 0;
    cartProducts.map(({ price }) => (total += price));
    if (total < freeDeliveryPrice) {
      if (deliveryMethod === "Навынос") {
        return "Бесплатно";
      }
      return costDelivery;
    } else {
      return "Бесплатно";
    }
  };
  return (
    <div className="mx-5">
      <div
        className={cn(
          "d-flex flex-column align-items-start pb-0 p-2",
          styles.cart__header
        )}
      >
        {cartProducts.length > 0 && (
          <>
            <p className="m-0 text-secondary">Ваш заказ в ресторане</p>
            <span>{decodeURI(shopName)}</span>
          </>
        )}
      </div>
      {cartProducts.length ? (
        <div className="w-100">
          <ProductsListCart cartProducts={cartProducts} />
          <div className="d-flex justify-content-between px-3 my-2 w-100">
            <p className="m-0" style={{ fontSize: 13 }}>
              Доставка
            </p>
            <p className="m-0" style={{ color: "#757575", fontSize: 13 }}>
              {sumTotal()}
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center px-3 mt-5">
            <h1 className="fs-3">Итого</h1> <span>{totalCost} р</span>
          </div>
        </div>
      ) : (
        <h1 className="fs-3">Вернитесь в ресторан</h1>
      )}
    </div>
  );
};

export default OrderProductsList;
