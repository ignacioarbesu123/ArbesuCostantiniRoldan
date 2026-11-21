let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let buscador = document.querySelector(".buscador")
let inpBuscar = document.querySelector(".inpBuscar")
let seccionSmartphones = document.querySelector(".seccionSmartphones")
let urlSmartphones = "https://dummyjson.com/products/category/smartphones";

//validador de caracteres del buscador
buscador.addEventListener('submit', function (event) {
    event.preventDefault();
    if (inpBuscar.value == "") {
        alert("El campo de busqueda no puede estar vacio")
    } else if (inpBuscar.value == "" || inpBuscar.value.length < 3) {
        alert("Tenés que escribir algo con al menos 3 caracteres")
    } else {
        this.submit()
    }
});

// seccion 1 del home: groceries
let seccionGroceries = document.querySelector(".seccionGroceries");
let urlGroceries = "https://dummyjson.com/products/category/groceries";

fetch(urlGroceries)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let productosGroceries = data.products;

        for (let i = 0; i < productosGroceries.length; i++) {
            seccionGroceries.innerHTML += `
            <article>
                    <img class="imgproducto" src="${productosGroceries[i].thumbnail}" alt="${productosGroceries[i].title}">
                    <h3>${productosGroceries[i].title}</h3>
                    <p>${productosGroceries[i].description}</p>
                    <p>$${productosGroceries[i].price}</p>
                    <a href="./producto.html?id=${productosGroceries[i].id}" class="botondetalle">Ver detalle</a>
                </article>

            `;
        }
    })
    .catch(function (e) {
        console.log("error: " + e);
    });


// seccion 2 del home: smartphones

fetch(urlSmartphones)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let productosSmartphones = data.products;

        for (let i = 0; i < productosSmartphones.length; i++) {
            seccionSmartphones.innerHTML += `
            <article>
                    <img class="imgproducto" src="${productosSmartphones[i].thumbnail}" alt="${productosSmartphones[i].title}">
                    <h3>${productosSmartphones[i].title}</h3>
                    <p>${productosSmartphones[i].description}</p>
                    <p>$${productosSmartphones[i].price}</p>
                    <a href="./producto.html?id=${productosSmartphones[i].id}" class="botondetalle">Ver detalle</a>
                </article>
            `;
        }
    })
    .catch(function (e) {
        console.log("error: " + e);
    });
