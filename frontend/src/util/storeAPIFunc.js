const APIURL = "https://fakestoreapi.com"

const getProducts = async (limit = null) => {
  const req = await fetch(`${APIURL}/products/${limit ? "" : `?${limit}`}`);
  return await req.json();
};

const getProductByID = async (id) => {
  const req = await fetch(`${APIURL}/products/${id}`);
  return await req.json();
}

const getCategories = async () => {
  const req = await fetch(`${APIURL}/products/categories`);
  return await req.json();
}

const getProductsByCategory = async (category, limit = null) => {
  const req = await fetch(`${APIURL}/products/category/${category}/${limit ? "" : `?${limit}`}`);
  return await req.json();
}


export { getProducts, getCategories, getProductsByCategory };
