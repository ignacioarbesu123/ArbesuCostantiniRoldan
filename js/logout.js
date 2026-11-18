let alogout = document.querySelector(".linkLogout")
let dos_liSaludo = document.querySelector(".liSaludo")
let dos_liLogout = document.querySelector(".liLogout")

alogout.addEventListener("click",function(event){
    localStorage.removeItem("usuario")
    localStorage.removeItem("email")
    dos_liSaludo.style.display = "none"
    dos_liLogout.style.display = "none"
    liLogin.style.display = "block";
    liRegister.style.display = "block";


})
