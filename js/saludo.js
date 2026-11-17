let email = localStorage.getItem("email")
let liLogin = document.querySelector(".liLogin")
let liRegister = document.querySelector(".liRegister")
let liSaludo = document.querySelector(".liSaludo")
let liLogout = document.querySelector(".textoSaludo")

if (email != null) {
    textoSaludo.Innertext = "Bienvenido" + email;
    liLogin.style.display = "none";
    liRegister.style.display = "none";
} else { 
    liSaludo.style.display = "none"
    liLogout.style.display = "none"



    
}