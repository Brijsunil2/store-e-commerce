import "../styles/ProductsSection.css";
import ProductSection from "./ProductSection";

const ProductsSection = ({ products, filters }) => {
  return (
    <div className="productssection-container">
      {products.map(
        (product) =>
          filters.categories.includes(product.category) && (
            <ProductSection key={product.id} product={product} />
          )
      )}
    </div>
  );
};

export default ProductsSection;
