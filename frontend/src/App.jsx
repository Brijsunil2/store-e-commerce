import "./styles/App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import FiltersSection from "./components/FiltersSection";
import ProductsSection from "./components/ProductsSection";
import {
  getProducts,
  getCategories,
  getProductByID,
} from "./util/storeAPIFunc";

const getLocalStorageItem = (key) => {
  const cart = localStorage.getItem(key);
  return JSON.parse(cart) || [];
};

function App() {
  const ref = useRef(true)
  const [database, setDatabase] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => getLocalStorageItem("cart"));
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ categories: [] });

  const updateCart = async () => {
    const detailedCart = [];

    await cart.forEach((item) => {
      getProductByID(item.id).then((res) => {
        detailedCart.push({ ...res, quantity: item.quantity });
      });
    });
    setCart(detailedCart)
  };

  const searchFunc = async (searchText) => {
    const temp = database.filter((prod) =>
      prod.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setProducts([...temp, cart]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart, ["id", "quantity"]));

    getProducts().then((res) => {
      setDatabase(res);
      setProducts([...res]);
    });

    getCategories().then((res) => {
      setCategories([...res]);
    });

    if (ref.current) {
      updateCart();
      ref.current = false
    }
    
  }, [cart]);

  return (
    <>
      <Header searchFunc={searchFunc} cart={cart} setCart={setCart} />
      <div className="body-container">
        <FiltersSection
          mainCategories={categories}
          filters={filters}
          setFilters={setFilters}
        />
        <ProductsSection
          products={products}
          filters={filters}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </>
  );
}

export default App;
