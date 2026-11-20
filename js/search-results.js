let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let terminoBuscado = queryStringObj.get("busqueda");

let tituloBusqueda = document.querySelector(".tituloBusqueda");
let seccionResultados = document.querySelector(".resultadoproducto");
let urlBusqueda = "https://dummyjson.com/products/search?q=" + terminoBuscado;

fetch(urlBusqueda)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let resultados = data.products;

        if (resultados.length == 0) {
            tituloBusqueda.innerText = "No hay resultados para el término: " + terminoBuscado;
        } else {
            tituloBusqueda.innerText = "Resultados de busqueda para: " + terminoBuscado;

        for (let i = 0; i < resultados.length; i++) {
                seccionResultados.innerHTML += `
                    <article>
                        <img class="imgproducto" src="${resultados[i].thumbnail}" alt="${resultados[i].title}">
                        <h3>${resultados[i].title}</h3>
                        <p>${resultados[i].description}</p>
                        <p>$${resultados[i].price}</p>
                        <a href="./producto.html?id=${resultados[i].id}" class="botondetalle">Ver detalle</a>
                    </article>
                `;
            }
        }
    }) 
   .catch(function (e) {
        console.log("error: " + e);
    }); 
