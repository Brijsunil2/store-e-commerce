import "../styles/CartPopupWindow.css";
import { IoMdClose } from "react-icons/io";

const CartPopupWindow = ({setPopup, cartItems}) => {
  return (
    <div className="cart-popup">
      <div className="cart-popup-header">
        <h2>Cart Summary</h2>
        <button type="button" onClick={() => setPopup(false)}><IoMdClose width="5rem" height="5rem"/></button>
      </div>
    </div>
  )
}

export default CartPopupWindow