// const filterCategories = document.querySelector(".filter");
import { getProducts } from "./api.js";
const filterSelectEl = document.getElementById("filter-select");

const sortSelectEl = document.getElementById("sort-select");

const itemsContainerEl = document.getElementById("items-container");

let compare;
compare =
  sortSelectEl.value === "ascending"
    ? (compare = (a, b) => a.price - b.price)
    : (compare = (a, b) => b.price - a.price);


let allProducts = [];

async function displayProducts() {
  const products = await getProducts();
  const productsList = products
    .sort(compare)
    .filter((product) =>
      filterSelectEl.value !== "all"
        ? product.category === filterSelectEl.value
        : product
    )
    .map(
      (item) =>
        `<div class= "items">
      <img class"product-img" src="${item.image}" alt = '${item.title}' width = "150" height = "175" />
    <h4>${item.title}</h4>
    <p>${item.description}</p>
    <p> Price: $${item.price}</p>
    <button>Add to cart</button>
    </div>
        `
    )
    .join("");
  itemsContainerEl.innerHTML = productsList;
  console.log(compare);
}

function filterByCategory(category) {
  const filteredProducts = allProducts.filter(
    (product) => product.category === category
  );
  displayProducts(filteredProducts);
}

function testFunc(category) {
  if (category === "all") {
    getProducts();
  } else filterByCategory(category);
}

function sortFunc(sortOption) {
  let sortedProducts = [...allProducts];

  if (sortOption === "ascending") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "descending") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }
  displayProducts(sortedProducts);
}
displayProducts();

filterSelectEl.addEventListener("change", displayProducts);

sortSelectEl.addEventListener("change", displayProducts);
