// const filterCategories = document.querySelector(".filter");
import { getProducts } from "./api.js";
const filterSelectEl = document.getElementById("filter-select");

const sortSelectEl = document.getElementById("sort-select");

const itemsContainerEl = document.getElementById("items-container");


async function displayProducts() {
  let compare;
compare =
  sortSelectEl.value === "ascending"
    ? compare = (a, b) => a.price - b.price
    : compare = (a, b) => b.price - a.price;


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

}

displayProducts();

filterSelectEl.addEventListener("change", displayProducts);

sortSelectEl.addEventListener("change", displayProducts);
