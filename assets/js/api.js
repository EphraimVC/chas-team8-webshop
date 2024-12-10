async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    // console.log(data);
    // allProducts = data;
    return data;
   
  } catch (error) {
    console.log("error", error);
  }
}

export {getProducts}