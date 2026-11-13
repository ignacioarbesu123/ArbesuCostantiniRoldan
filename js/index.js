let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let buscador = document.querySelector(".buscador")
let inpBuscar = document.querySelector(".inpBuscar")
let ulCategory = document.querySelector(".ulCategory")
let urlCategories = "https://dummyjson.com/products/categories"

//validador de caracteres del buscador
buscador.addEventListener('submit', function(event){
    event.preventDefault();
    if(inpBuscar.value == "" || inpBuscar.value.length < 3){
        alert("Tenés que escribir algo con más de 3 caracteres")
    }else{
        this.submit
    }
})

//api para menú de navegación lateral
fetch(urlCategories)
.then(function(res){
    return res.json()
})
.then(function(data){
    const category = data
    console.log(category);
    

    for (let i = 0; i < category.length; i++){
        ulCategory.innerHTML +=
        `
        <li>
        <a href="category.html?name=${category[i].name}">
            ${category[i].name}
        </a>
        </li>
        `
    }
})
.catch(function(e){
    console.log("error:"+e)
})