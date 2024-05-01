import React from "react";
import shoppingbag from "../assets/bag.png";

const Header = () => {
  return (
    <header>
      <img src={shoppingbag} alt="Shopping bag logo for website" width="32" height="32"/>
      <h1>Store E-Commerce</h1>
    </header>
  );
};

export default Header;
