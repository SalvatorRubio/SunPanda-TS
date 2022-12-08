import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "@hooks/useReduxMethods";

import banner from "./img/banner.png";
import appstore from "./img/appstore.png";
import googleplay from "./img/googleplay.png";
import ok from "./img/ok.png";
import tg from "./img/tg.png";
import youtube from "./img/youtube.png";

import cn from "classnames";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const { cityName } = useAppSelector((state) => state.restaurant);
  return (
    <footer className={cn("w-100", styles.footer)}>
      <div
        className={cn(
          "d-flex justify-content-md-between justify-content-center flex-wrap align-items-center m-auto",
          styles.container
        )}
      >
        <div className={cn("w-lg-25 w-sm-50", styles.footer__item)}>
          <img
            src={banner}
            className={styles.footer__itemBanner}
            alt="SunPanda"
          />
          <ul className="p-0 m-0">
            <li>
              <a
                className={cn(
                  "text-decoration-none text-white",
                  styles.footer__itemLink
                )}
                href="https://franshiza.ru/franchise/read/SunPanda/"
              >
                Франшиза SunPanda
              </a>
            </li>
            <li>
              <Link
                className={cn(
                  "text-decoration-none text-white",
                  styles.footer__itemLink
                )}
                to="/about"
              >
                О нас
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  "text-decoration-none text-white",
                  styles.footer__itemLink
                )}
                to="/partners"
              >
                Стать партнером
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  "text-decoration-none text-white",
                  styles.footer__itemLink
                )}
                to="/agreement"
              >
                Пользовательское соглашение
              </Link>
            </li>
          </ul>
        </div>

        {cityName.length > 0 && (
          <>
            <div
              className={cn("w-lg-25 w-sm-50 ", styles.footer__item)}
              style={{ minHeight: 90 }}
            >
              <h2
                className={cn(
                  "text-center text-white m-0",
                  styles.footer__itemTitle
                )}
              >
                Мы в соцсетях
              </h2>
              <div className="d-flex mt-4">
                <a href="tel:+79962757918">
                  <img
                    className={styles.footer__itemIcon}
                    src={ok}
                    alt="Одноклассники"
                  />
                </a>

                <a href="mailto:support@sunpanda.ru">
                  <img
                    src={tg}
                    className={styles.footer__itemIcon}
                    alt="Одноклассники"
                  />
                </a>
                <a href="mailto:support@sunpanda.ru">
                  <img
                    src={youtube}
                    className={styles.footer__itemIcon}
                    alt="Одноклассники"
                  />
                </a>
              </div>
            </div>
            <div className={cn("w-lg-25 w-sm-50", styles.footer__item)}>
              <h2
                className={cn(
                  "text-center text-white m-0",
                  styles.footer__itemTitle
                )}
              >
                Скачай на телефон
              </h2>
              <div className="d-flex flex-column align-items-center mt-4">
                <a href="tel:+79962757918">
                  <img
                    src={googleplay}
                    className={styles.mobile__banner}
                    alt="Одноклассники"
                  />
                </a>

                <a href="mailto:support@sunpanda.ru">
                  <img
                    src={appstore}
                    className={styles.mobile__banner}
                    alt="Одноклассники"
                  />
                </a>
              </div>
            </div>
          </>
        )}

        <div className={cn("w-lg-25 w-sm-50", styles.footer__item)}>
          <h2
            className={cn("text-center text-white", styles.footer__itemTitle)}
          >
            Контакты ООО "Сан Панда"
          </h2>
          <p className="text-center text-white m-0" style={{ fontSize: 16 }}>
            Call центр:{" "}
            <a
              href="tel:+79962757918"
              className="text-white text-decoration-none"
            >
              8 (996) 275 79 18
            </a>
          </p>
          <p className="text-center text-white m-0" style={{ fontSize: 16 }}>
            E-mail:{" "}
            <a
              href="mailto:support@sunpanda.ru"
              className="text-white text-decoration-none"
            >
              support@sunpanda.ru
            </a>
          </p>
          <p className="text-center text-white m-0" style={{ fontSize: 16 }}>
            © Copyright 2022 Все права защищены - sunpanda.ru
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
