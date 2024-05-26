import "./styles/App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import FiltersSection from "./components/FiltersSection";
import ProductsSection from "./components/ProductsSection";
import {
  getProducts,
  getCategories,
} from "./util/storeAPIFunc";

const getLocalStorageItem = (key) => {
  const cart = localStorage.getItem(key);
  return JSON.parse(cart) || [];
};

function App() {
  const [database, setDatabase] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => getLocalStorageItem("cart"));
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ categories: [] });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    getProducts().then((res) => {
      setDatabase(res);
      setProducts([...res]);
    });
    getCategories().then((res) => {
      setCategories([...res]);
    });
  }, [setProducts, getProducts, setCategories, getCategories, cart]);

  const searchFunc = async (searchText) => {
    const temp = database.filter((prod) =>
      prod.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setProducts([...temp, cart]);
  };

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
