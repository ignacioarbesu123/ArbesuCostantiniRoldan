let usuario = localStorage.getItem("usuario")
let usuarioRecuperado = JSON.parse(usuario)
let liLogin = document.querySelector(".liLogin")
let liRegister = document.querySelector(".liRegister")
let liSaludo = document.querySelector(".liSaludo")
let pSaludo = document.querySelector(".textoSaludo")
let liLogout = document.querySelector(".liLogout")

if (usuarioRecuperado != null) {
    pSaludo.innerText = "Bienvenido: " + usuarioRecuperado.email;
    liLogin.style.display = "none";
    liRegister.style.display = "none";

} else {
    liSaludo.style.display = "none"
    liLogout.style.display = "none"
}
