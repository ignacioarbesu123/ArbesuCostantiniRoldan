let main = document.querySelector("#main")
let inpBuscar = document.querySelector(".inpBuscar")
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let numid = queryStringObj.get("id")
let url = "https://dummyjson.com/products/"+numid
let buscador = document.querySelector(".buscador")


buscador.addEventListener('submit', function(event){
    event.preventDefault();
    if (inpBuscar.value == ""){
        alert("El campo de busqueda no puede estar vacio")
    }else if(inpBuscar.value == "" || inpBuscar.value.length < 3) {
        alert("Tenés que escribir algo con al menos 3 caracteres")
    }else{
        this.submit()
    }
});

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        let tagis = ""
        for (let i = 0; i < data.tags.length; i++) {
            
            tagis +=
            `<li>${data.tags[i]}</li>`
            
        }
        let reseñas = ""
        for (let i = 0; i < data.reviews.length; i++) {
            reseñas +=
            `<article>
                        <p>${data.reviews[i].rating}</p>
                        <p>${data.reviews[i].comment}</p>
                        <p>${data.reviews[i].date}</p>
                        <p>${data.reviews[i].reviewerName}</p>
            </article>`

            
        }
        main.innerHTML = `
  <section class="imagen">
        <h2 class="nombredelproducto">${data.title}</h2>
        <p>${data.brand}</p>
        <p>${data.description}</p>
        <p>${data.price}</p>
        <img class="n
        ombredelproducto" src="${data.images[0]}" alt="${data.title}">
        <a href="./category.html?name=${data.category}">
         ${data.category}
        </a>
        <p>${data.stock}</p>
        <ul>${tagis}</ul>
    </section>
  <section class="reviews">
                <h2>Reseñas de Clientes</h2>
                <div class="reviews">
                    ${reseñas}
                </div>
            </section>`
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })
