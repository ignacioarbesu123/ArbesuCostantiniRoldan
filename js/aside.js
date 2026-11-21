//api para menú de navegación lateral
let ulCategory = document.querySelector(".ulCategory")
let urlCategories = "https://dummyjson.com/products/categories";

fetch(urlCategories)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        const category = data
        console.log(category);


        for (let i = 0; i < category.length; i++) {
            ulCategory.innerHTML += `

        <li>
            <a href="./category.html?name=${category[i].slug}">
            ${category[i].name}
            </a>
        </li>
        `;
        }
    })
    .catch(function (e) {
        console.log("error:" + e)
    }); 
