import "./styles/App.css";
import Header from "./components/Header";
import FiltersSection from "./components/FiltersSection";
import ProductsSection from "./components/ProductsSection";

function App() {
  return (<>
    <Header/>
    <div className="body-container">
      <FiltersSection/>
      <ProductsSection/>
    </div>
  </>);
}

export default App;
