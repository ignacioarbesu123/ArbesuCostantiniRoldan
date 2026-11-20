let catqueryString = location.search;
let catqueryStringObj = new URLSearchParams(catqueryString)
let catnumid = catqueryStringObj.get("name")
let apiurlcategory = "https://dummyjson.com/products/category/"+catnumid
let catsection = document.querySelector(".sectioncategory")
let cath2 = document.querySelector(".h2beauty")
let buscador = document.querySelector(".buscador")
let inpBuscar = document.querySelector(".inpBuscar")

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

fetch(apiurlcategory)
.then(function(res){
    return res.json()
})
.then(function(data){
    let relleno = ""
    const cat = data.products
    for (let i = 0; i < cat.length; i++) {
        relleno +=
        `<article>
            <img class="imgproducto" src="${cat[i].images[0]}" alt="${cat[i].title}">
            <h3>${cat[i].title}</h3>
            <h4>${cat[i].description}</h4>
            <h5>${cat[i].price}</h5>
            <a href="./producto.html?id=${cat[i].id}" class="botondetalle">Ver Detalle</a>
        </article>
        `
    }
        catsection.innerHTML = relleno
})

.catch(function(e){
    console.log("error:"+e)
});

cath2.innerText = catnumid