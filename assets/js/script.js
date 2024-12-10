async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.log("error", error);
  }
}
getProducts();