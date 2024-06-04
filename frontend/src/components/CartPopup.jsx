import "../styles/CartPopup.css";
import { IoMdClose } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { CiTrash } from "react-icons/ci";

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
              <div className="cart-item-image-container">
                <img src={cartItem.image}></img>
              </div>
              <div className="cart-item-text-container">
                <h4 className="product-title">
                  {cartItem.title.substring(0, 40)}{" "}
                  {cartItem.title.length > 40 && "..."}
                </h4>
                <h3 className="product-price">
                  ${parseFloat(cartItem.price).toFixed(2)}
                </h3>
              </div>
              <div className="cart-item-options-container">
                <button className="circle-btn plus-btn">+</button>
                <input type="text" className="quantity-input" value={cartItem.quantity} onChange={() => cartItem.value} min="1" max="99" />
                <button className="circle-btn minus-btn">-</button>
                <CiTrash className="remove-btn" />
              </div>
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
