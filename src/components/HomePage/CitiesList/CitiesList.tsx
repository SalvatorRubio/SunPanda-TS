import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./CitiesList.module.css";

type Cities = {
  name: string;
  href: string;
};

const CitiesList: React.FC = () => {
  const cities: Cities[] = [
    {
      name: "Ахтубинск",
      href: "/Ahtubinsk",
    },
    {
      name: "Новошахтинск",
      href: "/Novoshahtinsk",
    },
    {
      name: "Крымск",
      href: "/Krymsk",
    },
    {
      name: "Каменск-Шахтинский",
      href: "/KamenskShahtinsk",
    },
    {
      name: "Сарапул",
      href: "/Sarapul",
    },
  ];
  return (
    <section className="w-100 py-3">
      <h1 className={cn("text-center text-uppercase", styles.title)}>
        Мы <span>работаем</span> в городах
      </h1>
      <div className="w-50 pt-4 m-auto d-flex flex-wrap justify-content-center">
        {cities.map((item) => {
          return (
            <Link
              key={item.name}
              className={cn(
                "py-1 px-3 text-white text-decoration-none rounded-1 mx-5 my-4",
                styles.cities__name
              )}
              to={item.href}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CitiesList;
