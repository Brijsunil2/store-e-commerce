import "../styles/ProductSection.css";

const ProductSection = ({ product }) => {
  const handleAddToCart = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="productsection-container">
      <div className="product-img-container">
        <img src={product.image}></img>
      </div>
      <div>
        <h4 className="product-title">{product.title}</h4>
        <h3 className="product-price">
          ${parseFloat(product.price).toFixed(2)}
        </h3>
        <button
          className="addtocart-btn"
          key={product.id}
          value={product.id}
          type="button"
          onClick={handleAddToCart}
        >
          + Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
