import "./styles/App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import FiltersSection from "./components/FiltersSection";
import ProductsSection from "./components/ProductsSection";
import { getProducts } from "./util/storeAPIFunc";

function App() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    getProducts().then(res => setProducts(res))
  }, [setProducts, getProducts])

  return (<>
    <Header/>
    <div className="body-container">
      <FiltersSection/>
      <ProductsSection/>
    </div>
  </>);
}

export default App;
