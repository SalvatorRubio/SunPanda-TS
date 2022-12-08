import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Form, InputGroup } from "react-bootstrap";
import cn from "classnames";
import styles from "./OrderDelivery.module.css";

type FormValues = {
  name: string;
  phone: number;
  address: string;
  payment: string;
  entrance?: number;
  intercom?: number;
  floor?: number;
  flat?: number;
  description?: string;
  promoCode?: string;
};

const OrderDelivery: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <Form className="p-3 " onSubmit={handleSubmit(onSubmit)}>
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
      <Form.Group className="mb-3">
        <Form.Label>Введите адрес доставки</Form.Label>
        <Form.Control
          isInvalid={errors.address !== undefined}
          {...register("address", {
            required: true,
          })}
          type="text"
          placeholder="Введите адрес доставки"
        />
        <Form.Control.Feedback type="invalid">
          Введите адрес доставки!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Способ оплаты</Form.Label>
        <Form.Select {...register("payment")}>
          <option value="Наличными">Наличными при доставке</option>
          <option value="По карте">Картой при доставке</option>
        </Form.Select>
      </Form.Group>
      <InputGroup className="mb-3">
        <Form.Control {...register("entrance")} placeholder="Подъезд" />
        <Form.Control {...register("intercom")} placeholder="Домофон" />
        <Form.Control {...register("floor")} placeholder="Этаж" />
        <Form.Control {...register("flat")} placeholder="Квартира" />
      </InputGroup>
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

export default OrderDelivery;
