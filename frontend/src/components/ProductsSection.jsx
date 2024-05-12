import "../styles/ProductsSection.css";
import ProductSection from "./ProductSection";

const ProductsSection = ({ products, filters, cart, setCart }) => {
  const addToCart = (prodID) => {
    const foundProduct = cart.find((cartItem) => cartItem.id === prodID);

    if (!foundProduct) {
      setCart([...cart, { id: prodID, quantity: 1 }]);
    }
  };

  const removeFromCart = (prodID) => {
    setCart(cart.filter((cartItem) => cartItem.id !== prodID));
  };

  return (
    <div className="productssection-container">
      {products.length == 0 && <h2>No Products Found</h2>}
      {products.map((product) => {
        if (
          filters.categories.length == 0 ||
          filters.categories.includes(product.category)
        ) {
          return (
            <ProductSection
              key={product.id}
              product={product}
              inCart={cart.find((cartItem) => cartItem.id === product.id) ? true : false}
              addToCart={addToCart}
              removeFromCart ={removeFromCart}
            />
          );
        }
      })}
    </div>
  );
};

export default ProductsSection;
