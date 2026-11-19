let loginForm = document.querySelector(".login")
let campoContraseña = document.querySelector("#contraseña")
let campoEmail = document.querySelector("#mail")

loginForm.addEventListener('submit', function (event){
    event.preventDefault();
    if(campoEmail.value == ""){
        alert("tenés que completar el email");
    }else if(campoContraseña.value.length < 6 && campoContraseña.value.length > 0){
        alert("la contraseña tiene que tener al menos 6 caracteres");
    }else if (campoContraseña.value == "") {
        alert("Tenés que completar la contraseña");
    }else{
         let usuarioLogin = {
            email: campoEmail.value,
            contraseña: campoContraseña.value
        }
        let usuarioString = JSON.stringify(usuarioLogin)
        localStorage.setItem("usuario", usuarioString)
        this.submit();
    }
} )
