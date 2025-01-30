let productId = 1163;
let productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((Response) => Response.json())
  .then((data) => {
    productContainer.innerHTML = `
   <div class="produkt_container">

            <div class="produktbillede">
                <img class="billede" src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="jakke">
            </div>

            <div class="produktinfo">
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
                
            </div>

            <div class="greybox">
                <h4>${data.productdisplayname}</h4>
                <p class="grey">${data.brandname}</p>
                <h5>Vælg en størrelse</h5>
            </div>

        </div>
            `;
  });
