import React, { useEffect, useState } from "react";
import {
  TypeProduct,
  TypeRestaurantRange,
} from "@pages/RestaurantPage/RestaurantPage";
import cn from "classnames";
import styles from "./ProductList.module.css";

type Props = {
  restaurantRange: TypeRestaurantRange[];
  category: string;
};

type TypeMenuList = {
  name: string;
  products: TypeProduct[];
};

const ProductList: React.FC<Props> = ({ restaurantRange, category }) => {
  const [menuList, setMenuList] = useState<TypeMenuList[]>([]);
  useEffect(() => {
    if (restaurantRange.find((item) => item.name === category)) {
      // eslint-disable-next-line array-callback-return
      restaurantRange.map(({ name, products }) => {
        if (name === category) {
          return setMenuList([{ name, products }]);
        }
      });
    } else {
      setMenuList(restaurantRange);
    }
  }, [restaurantRange, category]);

  return (
    <>
      {menuList.map(({ name, products }) => {
        return (
          <div key={name} className="my-5">
            <h1 className={cn("mb-5", styles.title)}>{name}</h1>
            <div className="d-flex flex-wrap">
              {products.map(({ name, price, composition, img }) => {
                return (
                  <div
                    key={name}
                    // onClick={() => handleClick(name, price, img)}
                    className={cn(
                      "bg-white rounded-4 me-3 d-flex flex-column justify-content-between align-content-between position-relative",
                      styles.product__item
                    )}
                  >
                    <div
                      className={cn(
                        "position-relative ",
                        styles.product__itemImg
                      )}
                    >
                      <img
                        className={cn("rounded-4 fw-bolder w-100")}
                        src={img}
                        alt={name}
                      />
                      {composition.length > 0 && (
                        <div
                          className={cn(
                            "position-absolute text-center rounded-4 w-100 text-white px-2 pt-1",
                            styles.product__itemComposition
                          )}
                        >
                          <h6>Состав</h6>
                          <p className="m-0">"{name}"</p>
                          <span>{composition.join(", ")}</span>
                        </div>
                      )}
                    </div>

                    <p className={cn("m-0 px-2", styles.product__itemName)}>
                      {name}
                    </p>
                    <button
                      className={cn(
                        "m-2 p-1 rounded border-0 text-white",
                        styles.product__button
                      )}
                    >
                      В корзину {price}₽
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      {/*<ModalAddProduct show={show}/>*/}
    </>
  );
};

export default ProductList;
