import "./styles/App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import FiltersSection from "./components/FiltersSection";
import ProductsSection from "./components/ProductsSection";
import {
  getProducts,
  getCategories,
  getProductByID,
} from "./util/storeAPIFunc";

function App() {
  const [database, setDatabase] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ categories: [] });

  const updateCart = async (initialCart) => {
    const detailedCart = await Promise.all(
      initialCart.map(async (item) => {
        const res = await getProductByID(item.id);
        return { ...res, quantity: item.quantity };
      })
    );
    setCart(detailedCart);
  };

  const searchFunc = async (searchText) => {
    const temp = database.filter((prod) =>
      prod.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setProducts([...temp, ...cart]);
  };

  useEffect(() => {
    const data = localStorage.getItem("STORE_E_COMMERCE_CART");
    if (data) {
      const initialCart = JSON.parse(data);
      updateCart(initialCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "STORE_E_COMMERCE_CART",
      JSON.stringify(cart.map(({ id, quantity }) => ({ id, quantity })))
    );
  }, [cart]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const products = await getProducts();
      const categories = await getCategories();

      setDatabase(products);
      setProducts(products);
      setCategories(categories);
    };

    fetchInitialData();
  }, []);

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
