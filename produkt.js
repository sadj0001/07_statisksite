const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const myProduct = urlParams.get("id");

console.log("Produkt:", myProduct);

let productContainer = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${myProduct}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
        <div class="produktbillede">
            <img class="billede" src="https://kea-alt-del.dk/t7/images/webp/640/${myProduct}.webp" alt="jakke">
        </div>

        <div
        <div class="produktinfo ${data.discount && "rabat1"}">
            <h1>Produktinformation</h1>
            <h3>Id</h3>
            <p>${data.id}</p>
            <h3>Model navn</h3>
            <p>${data.productdisplayname}</p>
            <h3>Pris</h3>
            <p>${data.price}</p>
            <h3>Mærke</h3>
            <p>${data.brandname}</>
            <h3>Season</h3>
            <p>${data.season}</p>
            <br><br>

            <h3>Vælg en størrelse</h3>

              <label for="sizeSelect">Vælg størrelse:</label>
    <select id="sizeSelect">
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
    </select>
        </div>
        </div>`;
  });
