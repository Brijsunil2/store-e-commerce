import "./styles/App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import FiltersSection from "./components/FiltersSection";
import ProductsSection from "./components/ProductsSection";
import { getProducts, getCategories } from "./util/storeAPIFunc";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({categories: []});

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
    getCategories().then((res) => {
      setCategories([...res]);
    });
  }, [
    setProducts,
    getProducts,
    setCategories,
    getCategories,
  ]);



  return (
    <>
      <Header />
      <div className="body-container">
        <FiltersSection mainCategories={categories} filters={filters} setFilters={setFilters} />
        <ProductsSection products={products} filters={filters} />
      </div>
    </>
  );
}

export default App;
