import "./styles/App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import FiltersSection from "./components/FiltersSection";
import ProductsSection from "./components/ProductsSection";
import { getProducts, getCategories } from "./util/storeAPIFunc";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
    getCategories().then((res) => setCategories(res));
  }, [setProducts, getProducts, setCategories, getCategories]);

  return (
    <>
      <Header />
      <div className="body-container">
        <FiltersSection categories={categories} />
        <ProductsSection products={products} />
      </div>
    </>
  );
}

export default App;
