import "../styles/Header.css";
import { FaShoppingCart } from "react-icons/fa";
import shoppingbag from "../assets/bag.png";
import SearchBar from "./SearchBar";
import CartPopup from "./CartPopup";
import { useState } from "react";

const Header = ({ searchFunc, cart, setCart }) => {
  const [popup, setPopup] = useState(false);

  return (
    <header>
      <div className="site-logo">
        <a href="/">
          <img
            src={shoppingbag}
            alt="Shopping bag logo for website"
            width="32"
            height="32"
          />
          <h1>Store E-Commerce</h1>
        </a>
      </div>

      <div className="header-right-items">
        <button className="cart-btn" onClick={() => setPopup(true)}>
          <FaShoppingCart /> Cart
        </button>
      </div>
      <SearchBar
        placeholder="Search Products.."
        searchFunc={searchFunc}
      ></SearchBar>
      
      <CartPopup popup={popup} setPopup={setPopup} cart={cart} setCart={setCart} />
    </header>
  );
};

export default Header;
