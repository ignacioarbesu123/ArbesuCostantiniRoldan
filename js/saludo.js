let usuario = localStorage.getItem("usuario")
let usuarioRecuperado = JSON.parse(usuario)
let email = usuarioRecuperado.email
let liLogin = document.querySelector(".liLogin")
let liRegister = document.querySelector(".liRegister")
let liSaludo = document.querySelector(".liSaludo")
let pSaludo = document.querySelector(".textoSaludo")
let liLogout = document.querySelector(".liLogout")

if (email != null) {
    pSaludo.innerText = "Bienvenido: " + email;
    liLogin.style.display = "none";
    liRegister.style.display = "none";

} else { 
    liSaludo.style.display = "none"
    liLogout.style.display = "none"
}
