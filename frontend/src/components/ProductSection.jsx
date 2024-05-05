import "../styles/ProductSection.css";

const ProductSection = ({ product }) => {
  return (
    <div className="productsection-container">
      <div className="product-img-container">
        <img src={product.image}></img>
      </div>
      <h4 className="product-title">{product.title}</h4>
      <h3 className="product-price">${parseFloat(product.price).toFixed(2)}</h3>
      <button type="button">+ Add to Cart</button>
      {console.log(product)}
    </div>
  );
};

export default ProductSection;
