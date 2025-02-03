let productContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((Response) => Response.json())
  .then((data) => showList(data));

function showList(products) {
  const markup = products
    .map(
      (product) => `<div class="kort">
                    <img class="billede" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="jakke">
                    <h2> ${product.productdisplayname}</h2>
                    <p class="grey">${product.brandname}</p>
                <p>${product.price}</p>
                <a href="produkt.html">Læs mere</a>
                </div>`
    )
    .join("");
  productContainer.innerHTML = markup;
}
