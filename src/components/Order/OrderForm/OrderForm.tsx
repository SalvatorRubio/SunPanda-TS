import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import OrderDelivery from "@components/Order/OrderForm/OrderDelivery";
import cn from "classnames";
import styles from "./OrderForm.module.css";
import OrderTakeaway from "@components/Order/OrderForm/OrderTakeaway";
import { useAppDispatch } from "@hooks/useReduxMethods";
import { setDeliveryMethod, setTotalCost } from "@store/slices/restaurantSlice";

const OrderForm = () => {
  const [key, setKey] = useState<string>("Доставка");
  const dispatch = useAppDispatch();

  const handleChange = (el: string | null) => {
    if (el !== null) {
      setKey(el);
      dispatch(setDeliveryMethod(el));
      dispatch(setTotalCost());
    }
  };
  return (
    <div className={cn("bg-white rounded-2", styles.container)}>
      <Tabs
        activeKey={key}
        onSelect={(el) => handleChange(el)}
        defaultActiveKey="Доставка"
        className="my-2 px-3"
        justify
      >
        <Tab eventKey="Доставка" title="Доставка">
          <OrderDelivery />
        </Tab>
        <Tab eventKey="Навынос" title="Навынос">
          <OrderTakeaway />
        </Tab>
      </Tabs>
    </div>
  );
};

export default OrderForm;
