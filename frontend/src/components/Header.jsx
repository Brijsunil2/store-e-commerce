import "../styles/Header.css";
import { FaShoppingCart } from "react-icons/fa";
import shoppingbag from "../assets/bag.png";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header>
      <div className="site-logo">
        <img
          src={shoppingbag}
          alt="Shopping bag logo for website"
          width="32"
          height="32"
        />
        <h1>Store E-Commerce</h1>
      </div>
      <div className="header-right-items">
        <button className="cart-btn"><FaShoppingCart /> Cart</button>
      </div>
      <SearchBar></SearchBar>
    </header>
  );
};

export default Header;
