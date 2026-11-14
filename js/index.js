let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let buscador = document.querySelector(".buscador")
let inpBuscar = document.querySelector(".inpBuscar")
let ulCategory = document.querySelector(".ulCategory")
let urlCategories = "https://dummyjson.com/products/categories"

//validador de caracteres del buscador
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

//api para menú de navegación lateral
fetch(urlCategories)
.then(function(res){
    return res.json()
})
.then(function(data){
    const category = data
    console.log(category);
    

    for (let i = 0; i < category.length; i++){
        ulCategory.innerHTML += `

        <li>
            <a href="./category.html?name=${category[i].slug}">
            ${category[i].name}
            </a>
        </li>
        `;
    }
})
.catch(function(e){
    console.log("error:"+e)
    })