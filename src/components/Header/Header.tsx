import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "./img/logo.jpg";
import cn from "classnames";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={cn("p-lg-3 p-0 bg-white", styles.header__nav)}
      style={{ height: 105 }}
    >
      <Navbar.Brand className="p-0 m-0">
        <img style={{ height: 96, width: 384 }} src={logo} alt="SunPanda" />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
