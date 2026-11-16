let main = document.querySelector("#main")
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let urlCategories = "https://dummyjson.com/products/categories";
let numid = queryStringObj.get("id")
let url = "https://dummyjson.com/products/"+numid
console.log(location.href)

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        main.innerHTML = `
  <section class="imagen">
        <h2>${data.title}</h2>
        <p>${data.brand}</p>
        <p>${data.description}</p>
        <p>${data.price}</p>
        <img class="nombredelproducto" src=${data.images}} alt="foto producto mas vendido 1">
        <a href="./category.html?name=${data.category}">
         ${data.category}
        </a>
        <p>${data.stock}</p>
        <p>${data.tags[0]}</p>
        <p>${data.tags[1]}</p>
        <p>${data.tags[2]}</p>
  </section>
  <section class="reviews">
                <h2>Reseñas de Clientes</h2>
                <div class="reviews">
                    <article>
                        <p>${data.reviews[0].rating}</p>
                        <p>${data.reviews[0].comment}</p>
                        <p>${data.reviews[0].date}</p>
                        <p>${data.reviews[0].reviewerName}</p>
                    </article>
                    <article>
                        <p>${data.reviews[1].rating}</p>
                        <p>${data.reviews[1].comment}</p>
                        <p>${data.reviews[1].date}</p>
                        <p>${data.reviews[1].reviewerName}</p>
                    </article>
                    <article>
                        <p>${data.reviews[2].rating}</p>
                        <p>${data.reviews[2].comment}</p>
                        <p>${data.reviews[2].date}</p>
                        <p>${data.reviews[2].reviewerName}</p>
                    </article>
                </div>
            </section>`
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })
