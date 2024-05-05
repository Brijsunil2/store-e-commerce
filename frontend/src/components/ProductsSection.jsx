import "../styles/ProductsSection.css";
import ProductSection from "./ProductSection";

const ProductsSection = ({ products }) => {
  return (
    <div className="productssection-container">
      {products.map((product) => (
        <ProductSection key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsSection;
