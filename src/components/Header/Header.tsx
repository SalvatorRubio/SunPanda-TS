import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Navbar } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@hooks/useReduxMethods";
import { setTotalCost, clearCartState } from "@store/slices/restaurantSlice";

import logo from "./img/logo.jpg";
import basket from "./img/basket.svg";
import cn from "classnames";
import styles from "./Header.module.css";

type Props = {
  toggleShow: () => void;
};

const Header: React.FC<Props> = ({ toggleShow }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cityName, totalCost, cartProducts } = useAppSelector(
    (state) => state.restaurant
  );

  useEffect(() => {
    dispatch(setTotalCost());
  }, [cartProducts]);

  const handleClick = () => {
    navigate("/");
    dispatch(clearCartState());
  };
  return (
    <>
      <header>
        <Navbar
          expand="lg"
          fixed="top"
          className={cn(
            "px-lg-3 p-0 bg-white",
            styles.header__nav,
            cityName.length > 0 &&
              "d-flex justify-content-center flex-sm-nowrap flex-wrap",
            cityName.length === 0 && styles.header__navHomePage
          )}
        >
          <Navbar.Brand className={cn("px-3 py-0 m-0", styles.header__navImg)}>
            <img
              onClick={handleClick}
              src={logo}
              alt="SunPanda"
              className="w-100"
            />
          </Navbar.Brand>
          {cityName.length > 0 && (
            <div className="d-flex align-items-center justify-content-md-between justify-content-evenly p-lg-4 p-1 w-lg-75 w-md-50 w-sm-25 w-100">
              <button
                className={cn(
                  "border-0 text-uppercase rounded-1 fw-bolder",
                  styles.header__btn
                )}
                onClick={handleClick}
              >
                На главную
              </button>
              <h1 className={cn("m-0", styles.header__city)}>{cityName}</h1>
              <button
                onClick={toggleShow}
                className={cn(
                  "border-0 text-uppercase rounded-1 d-flex align-items-center justify-content-center fw-bolder",
                  styles.header__btnBasket
                )}
              >
                <img
                  className={cn("me-2", styles.button__icon)}
                  src={basket}
                  alt="Корзина"
                />
                {totalCost} ₽
              </button>
            </div>
          )}
        </Navbar>
      </header>
      {cityName.length > 0 && <div className={styles.empty__block}></div>}
    </>
  );
};

export default Header;
