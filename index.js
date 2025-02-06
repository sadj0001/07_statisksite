console.log("index script loaded...");

const listcontainer = document.querySelector(".category_list_container");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json()) // "response" med lille "r"
  .then(showList);

function showList(categories) {
  console.log("Mine data er:", categories); // Rettet fra "category" til "categories"

  const markup = categories.map((element) => `<a class="category" href="produktliste.html?category=${element.category}">${element.category}</a>`).join("");

  console.log("min markup er", markup);
  listcontainer.innerHTML = markup; // Brug den allerede definerede listcontainer
}
