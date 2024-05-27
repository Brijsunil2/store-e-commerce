import "../styles/CartPopup.css";
import { IoMdClose } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

const CartPopup = ({ popup, setPopup, cart, setCart }) => {
  return (
    <>
      <div className={popup ? "dim-background" : "invisible-background"}> </div>
      <div className={`cart-popup-right ${popup && "cart-popup-active"}`}>
        <div className="cart-popup-header">
          <h3>Shopping Cart</h3>
          <div className="close-popup" onClick={() => setPopup(false)}>
            <IoMdClose />
          </div>
        </div>
        <div className="cart-popup-body">
          {cart.map((cartItem) => (
            <div key={uuidv4()} className="cart-item-container">
              <p>{cartItem.id}</p>
            </div>
          ))}
        </div>
        <div className="cart-popup-footer">
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartPopup;
