let buscador = document.querySelector(".buscador")
let inpBuscar = document.querySelector(".inpBuscar")

buscador.addEventListener('submit', function(event){
    event.preventDefault();
    if(inpBuscar.value == "" || inpBuscar.value.length < 3){
        alert("Tenés que escribir algo con más de 3 caracteres")
    }else{
        this.submit
    }
})