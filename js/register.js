let formRegister = document.querySelector(".register")
let campEmail = document.querySelector("#mail")
let campContraseña = document.querySelector("#contraseña")
let repContraseña = document.querySelector("#repetir-contraseña")

formRegister.addEventListener("submit", function(event){
    event.preventDefault();
    if(campEmail.value == ""){
        alert("Tenés que completar el Email")
    }else if(campContraseña.value.length < 6 || campContraseña.value.length == 0){
        alert("Tu contraseña debe tener al menos 6 caracteres")
    }else if(campContraseña.value != repContraseña.value){
        alert("Las contraseñas no coinciden")
    }else{
        this.submit()
    }
})
