import React, { useEffect, useState } from "react";

import menu from "./img/menu.png";
import styles from "./MenuList.module.css";
import cn from "classnames";
import { TypeRestaurantRange } from "@pages/RestaurantPage/RestaurantPage";

type TypeMenuList = {
  name: string;
  img: string;
  status: boolean;
};

type Props = {
  restaurantRange: TypeRestaurantRange[];
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const MenuList: React.FC<Props> = ({ restaurantRange, setCategory }) => {
  const [menuListCategory, setMenuListCategory] = useState<TypeMenuList[]>([
    {
      name: "Все меню",
      img: menu,
      status: true,
    },
  ]);

  const handleClick = (name: string) => {
    const categories = menuListCategory.map((item) => {
      if (item.name === name) {
        return { ...item, status: true };
      }
      return { ...item, status: false };
    });
    setCategory(name);
    setMenuListCategory(categories);
  };

  useEffect(() => {
    setMenuListCategory([...menuListCategory]);
    const res = restaurantRange.map(({ name, img }) => {
      return { name, img, status: false };
    });

    setMenuListCategory([...menuListCategory, ...res]);
  }, [restaurantRange]);

  return (
    <div className="d-flex flex-wrap mt-5 w-100">
      {menuListCategory.map(({ name, img, status }) => {
        return (
          <div
            key={name}
            onClick={() => handleClick(name)}
            className={cn(
              "bg-white rounded-3 mx-2 d-flex flex-md-column flex-row align-items-center justify-content-md-center justify-content-evenly my-md-0 my-2",
              status ? styles.active : "",
              styles.menu__item
            )}
          >
            <img className="rounded-4" src={img} alt={name} />
            <p className="text-center mt-2 w-75 mb-1" style={{ fontSize: 14 }}>
              {name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
