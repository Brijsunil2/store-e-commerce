import "../styles/CartPopup.css";
import { IoMdClose } from "react-icons/io";

const CartPopup = ({ popup, setPopup }) => {
  return (
    <div className={`cart-popup-right ${popup && "cart-popup-active"}`}>
      <div className="cart-popup-header">
        <h3>Shopping Cart</h3>
        <div className="close-popup" onClick={() => setPopup(false)}>
          <IoMdClose />
        </div>
      </div>
      <div className="cart-popup-body"></div>
      <div className="cart-popup-footer">
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPopup;
