import "../styles/CartPopup.css";
import { IoMdClose } from "react-icons/io";

const CartPopup = ({ popup, setPopup }) => {
  return (
    <>
      {popup && (
        <div className={`cart-popup-right ${popup && "cart-popup-show"}`}>
          <div className="cart-popup-header">
            <h3>Shopping Cart</h3>
            <div className="close-popup" onClick={() => setPopup(false)}><IoMdClose /></div>
          </div>
          
        </div>
      )}
    </>
  );
};

export default CartPopup;
