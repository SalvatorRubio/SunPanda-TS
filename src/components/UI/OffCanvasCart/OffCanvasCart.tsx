import React from "react";
import { useNavigate } from "react-router";

import { Offcanvas } from "react-bootstrap";
import { useAppSelector } from "@hooks/useReduxMethods";

import ProductsListCart from "@UI/ProductsListCart";

import imgCart from "./img/cart.jpg";
import arrow from "./img/arrow.svg";
import cn from "classnames";
import styles from "./OffCanvasCart.module.css";

type Props = {
  show: boolean;
  handleClose: () => void;
};

const OffCanvasCart: React.FC<Props> = ({ show, handleClose }) => {
  const {
    cartProducts,
    shopName,
    totalCost,
    freeDeliveryPrice,
    costDelivery,
    cityEngName,
    deliveryMethod,
  } = useAppSelector((state) => state.restaurant);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`City-${cityEngName}/order`);
  };

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
    <>
      <Offcanvas
        className={styles.container}
        show={show}
        onHide={handleClose}
        scroll={true}
        backdrop={true}
        placement="end"
        backdropClassName="bg-transparent "
        style={{ marginTop: 100, width: 300, border: "none" }}
      >
        <Offcanvas.Header
          className={cn(
            "d-flex flex-column align-items-start pb-0 p-2  position-relative",
            styles.offcanvas__header
          )}
        >
          {cartProducts.length ? (
            <>
              <p className="m-0 text-secondary">Ваш заказ в ресторане</p>
              <span>{decodeURI(shopName)}</span>
            </>
          ) : (
            <p className="m-0 text-secondary">Корзина пуста</p>
          )}

          <div
            onClick={handleClose}
            className={cn(
              "position-absolute top-100 bg-white rounded-4",
              styles.offcanvas__headerBtn
            )}
          >
            <img src={arrow} alt="Закрыть" />
          </div>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body className="p-0">
          <div className=" w-100">
            {cartProducts.length ? (
              <>
                <ProductsListCart cartProducts={cartProducts} />
                <div className="d-flex justify-content-between px-3 my-2 w-100">
                  <p className="m-0" style={{ fontSize: 13 }}>
                    Доставка
                  </p>
                  <p className="m-0" style={{ color: "#757575", fontSize: 13 }}>
                    {sumTotal()}
                  </p>
                </div>
                <button
                  className={cn(
                    "text-uppercase w-100 text-white border-0 rounded-1 py-1",
                    styles.btn
                  )}
                  onClick={handleClick}
                >
                  <span>
                    Оформить заказ <span>{totalCost}</span> ₽
                  </span>
                </button>
              </>
            ) : (
              <div className="h-100 d-flex align-items-center justify-content-center">
                <img
                  src={imgCart}
                  style={{ width: 200, maxHeight: 200 }}
                  alt="Корзина"
                />
              </div>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvasCart;
