import { RestaurantsInfo } from "@pages/CityPage/CityPage";

import tokyo from "./img/restaurants/ТОКИО-min.jpg";
import sushiLand from "./img/restaurants/sushi_land.jpg";
import shaurma from "./img/restaurants/-Land-(1)-min.jpg";
import labirint from "./img/restaurants/labirint.jpg";
import osetin from "./img/restaurants/osetin.jpg";
import artFlora from "./img/restaurants/favor-min.jpg";

export const restaurantsImg: RestaurantsInfo[] = [
  {
    name: "%D0%A2%D0%9E%D0%9A%D0%98%D0%9E",
    img: tokyo,
    timeStart: "11:00",
    timeEnd: "23:30",
    price: "1000₽",
  },
  {
    name: "Sushi%20Land",
    img: sushiLand,
    timeStart: "10:00",
    timeEnd: "22:30",
    price: "1000₽",
  },
  {
    name: "%D0%A8%D0%B0%D1%83%D1%80%D0%BC%D0%B0%20Land",
    img: shaurma,
    timeStart: "10:00",
    timeEnd: "22:30",
    price: "1000₽",
  },
  {
    name: "%D0%9B%D0%B0%D0%B1%D0%B8%D1%80%D0%B8%D0%BD%D1%82",
    img: labirint,
    timeStart: "11:00",
    timeEnd: "22:00",
    price: "500₽",
  },
  {
    name: "%D0%9E%D1%81%D0%B5%D1%82%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B5%20%D0%BF%D0%B8%D1%80%D0%BE%D0%B3%D0%B8",
    img: osetin,
    timeStart: "10:00",
    timeEnd: "19:00",
    price: "1500₽",
  },
  {
    name: "Art%20-%20Flora",
    img: artFlora,
    timeStart: "11:00",
    timeEnd: "19:00",
    price: "Нет",
  },
];
