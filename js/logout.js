let alogout = document.querySelector(".linkLogout")
let dos_liSaludo = document.querySelector(".liSaludo")
let dos_liLogout = document.querySelector(".liLogout")
let dos_liRegister = document.querySelector(".liRegister")
let dos_liLogin = document.querySelector(".liSaludo")

alogout.addEventListener("click",function(event){
    event.preventDefault()
    localStorage.removeItem("usuario")
    localStorage.removeItem("email")
    dos_liSaludo.style.display = "none"
    dos_liLogout.style.display = "none"
    dos_liLogin.style.display = "block";
    dos_liRegister.style.display = "block";


})
