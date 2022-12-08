import React from "react";

import cn from "classnames";
import styles from "./OrderTakeaway.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Form, InputGroup } from "react-bootstrap";

type FormValues = {
  name: string;
  phone: number;
  description?: string;
  promoCode?: string;
};

const OrderTakeaway: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <Form className="p-3" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Введите ваше имя</Form.Label>
        <Form.Control
          isInvalid={errors.name !== undefined}
          {...register("name", {
            required: true,
          })}
          type="text"
          placeholder="Введите ваше имя"
        />
        <Form.Control.Feedback type="invalid">
          Введите имя!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Введите номер телефона</Form.Label>
        <Form.Control
          isInvalid={errors.phone !== undefined}
          {...register("phone", {
            required: true,
          })}
          type="tel"
          placeholder="Введите номер телефона"
        />
        <Form.Control.Feedback type="invalid">
          Введите номер телефона!
        </Form.Control.Feedback>
      </Form.Group>
      <InputGroup className="mb-3">
        <Form.Control
          as="textarea"
          className="bg-light"
          placeholder="Комментарий"
          {...register("description")}
          style={{ height: 150 }}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          disabled
          placeholder="Промокод"
          {...register("promoCode")}
        />
      </InputGroup>
      <Button type="submit" className={cn(" border-0", styles.btn)}>
        Заказать
      </Button>
    </Form>
  );
};

export default OrderTakeaway;
