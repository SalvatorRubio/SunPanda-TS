import { TypeRestaurantData } from "@pages/RestaurantPage/RestaurantPage";

import pizzaMin from "./img/menuImg/pizza-min-icon.jpg";
import salatMin from "./img/menuImg/salat-min-icon.jpg";
import sushiMin from "./img/menuImg/sushi_roll-min-icon.jpg";
import zakyskiMin from "./img/menuImg/zakyski-min-icon.jpg";

import sushiKrevetka from "./img/menuImg/sushi/sushi_krevetka.jpg";
import newYork from "./img/menuImg/sushi/new_york.jpg";
import sChukoi from "./img/menuImg/sushi/s_chukoi.jpg";
import syake from "./img/menuImg/sushi/syake_ikura.jpg";

import derevenskay from "./img/menuImg/pizza/DEREVENSKAYA-min.jpg";
import morskay from "./img/menuImg/pizza/MORSKAYA-min.jpg";
import prazd from "./img/menuImg/pizza/PRAZDNICHNAYA-min.jpg";
import prem from "./img/menuImg/pizza/PREMIYM-min.jpg";

import kartofel from "./img/menuImg/naggets/KARTOFEL_FREE-min.jpg";
import krilia from "./img/menuImg/naggets/KYRINIE_KRILYA-min.jpg";
import nagetci from "./img/menuImg/naggets/NAGETCI-min.jpg";
import panini from "./img/menuImg/naggets/PANINI-min.jpg";

import cezar from "./img/menuImg/salats/CEZAR_S_KREVETKOI-min.jpg";
import kali from "./img/menuImg/salats/SALAT_KALIFORNIYA-min.jpg";

export const restaurantImg: TypeRestaurantData[] = [
  {
    name: "%D0%A2%D0%9E%D0%9A%D0%98%D0%9E",
    costDelivery: 100,
    range: [
      {
        name: "Суши и роллы",
        img: sushiMin,
        products: [
          {
            name: "Суши креветка 50г",
            composition: ["рис", "нори", "креветка королевская"],
            price: 96,
            img: sushiKrevetka,
          },
          {
            name: "Сяке Икура 240г",
            composition: ["рис", "нори", "лосось", "сыр", "икра лосося"],
            price: 402,
            img: syake,
          },
          {
            name: "Филадельфия с чуккой 230г",
            composition: [],
            price: 438,
            img: sChukoi,
          },
          {
            name: "Нью Йорк 230г",
            composition: [
              "рис",
              "нори",
              "лосось",
              "угорь",
              "спайси",
              "соус",
              "кунжут",
            ],
            price: 318,
            img: newYork,
          },
        ],
      },
      {
        name: "Пицца",
        img: pizzaMin,
        products: [
          {
            name: "Пицца Праздничная 32см. 600г",
            composition: [
              "тесто",
              "томатная основа",
              "моцарелла",
              "курица",
              "шампиньоны",
              "лук зеленый",
              "маслины",
              "помидор",
            ],
            price: 402,
            img: prazd,
          },
          {
            name: "Пицца Премиум 32см. 600г",
            composition: [
              "тесто",
              "томатная основа",
              "моцарелла",
              "чесночный соус",
              "ветчина",
              "баварские колбаски",
              "черри",
              "чеддер",
            ],
            price: 474,
            img: prem,
          },
          {
            name: "Пицца Деревенская 40см. 1000г",
            composition: [
              "тесто",
              "томатная основа",
              "моцарелла",
              "фарш говяжий",
              "шампиньон",
              "паприка",
              "лук зеленый",
              "помидор",
            ],
            price: 720,
            img: derevenskay,
          },
          {
            name: "Пицца Морская 32см. 600г",
            composition: [
              "тесто",
              "томатная основа",
              "моцарелла",
              "креветки коктейльные",
              "лосось",
              "паприка",
              "черри",
            ],
            price: 570,
            img: morskay,
          },
        ],
      },
      {
        name: "Закуски",
        img: zakyskiMin,
        products: [
          {
            name: "Наггетсы 100г",
            composition: [],
            price: 156,
            img: nagetci,
          },
          {
            name: "Куриные крылья 200г",
            composition: [],
            price: 222,
            img: krilia,
          },
          {
            name: "Картофель фри 100г",
            composition: [],
            price: 84,
            img: kartofel,
          },
          {
            name: "Панини с беконом 300г",
            composition: [
              "пшеничная тортилья",
              "помидор",
              "пекинская капуста",
              "лук репчатый",
              "бекон",
              "сыр плавленный",
              "сырный соус",
            ],
            price: 84,
            img: panini,
          },
        ],
      },
      {
        name: "Салаты",
        img: salatMin,
        products: [
          {
            name: "Салат Цезарь с креветкой 200г",
            composition: [
              "салат айсберг",
              "лист салата",
              "креветки",
              "сухари",
              "черри",
              "соус",
            ],
            price: 330,
            img: cezar,
          },
          {
            name: "Салат калифорния 200г",
            composition: [
              "снежный краб",
              "масаго",
              "авокадо",
              "огурец",
              "майонез",
              "черри",
            ],
            price: 228,
            img: kali,
          },
        ],
      },
    ],
  },
];
