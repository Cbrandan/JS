function cambiarTitulo (){
    const controles = document.getElementsByClassName("titulo");
    if(controles.length > 1){
        for(let x = 0; x < controles.length; x++){
            controles[x].innerHTML = "CAMBIÉ LOS TÍTULOS";
        }
    }
    else{
        if(controles.length == 1){
            controles[0].innerHTML = "CAMBIÉ EL TÍTULO";
        }
    }
}


function cargarFoto(){
    const cuadro = document.getElementById("cuadro");
    const loading = document.getElementById("loading");
    const foto = document.getElementById("foto");

    cuadro.classList.remove("hidden"); /*le estoy sacando la clase hidden que en CSS defini para que no se vea el cuadro*/
    setTimeout(() => {
        loading.classList.remove("showing");
        loading.classList.add("hidden");
        foto.classList.remove("hidden");
    }, 5000);

}