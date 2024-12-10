import { getProducts } from "./api.js";

const filterSelectEl = document.getElementById("filter-select");
const sortSelectEl = document.getElementById("sort-select");
const itemsContainerEl = document.getElementById("items-container");
const loaderEl = document.getElementById("loader");

async function displayProducts() {
  let compare;
  switch (sortSelectEl.value) {
    case "ascending":
      compare = (a, b) => a.price - b.price;
      break;
    case "descending":
      compare = (a, b) => b.price - a.price;
      break;
    case "none":
    default:
      compare = null;
  }

  loaderEl.classList.remove("hide");
  itemsContainerEl.classList.add("hide");

  const products = await getProducts();
  const productsList = products
    .sort(compare || ((a, b) => 0))
    .filter((product) =>
      filterSelectEl.value !== "all"
        ? product.category === filterSelectEl.value
        : product
    )
    .map(
      (item) =>
        `<div class="items">
          <img class="product-img" src="${item.image}" alt="${item.title}" width = "150" height = "175" />
          <h4>${item.title}</h4>
          <p>${item.description}</p>
          <p> Price: $${item.price}</p>
          <button>Add to cart</button>
        </div>`
    )
    .join("");

  itemsContainerEl.innerHTML = productsList;
  itemsContainerEl.classList.remove("hide");
  loaderEl.classList.add("hide");
}

displayProducts();
filterSelectEl.addEventListener("change", displayProducts);
sortSelectEl.addEventListener("change", displayProducts);
