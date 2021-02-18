window.onload = inicializar;
var formConvalidaciones;
function inicializar (){
    formConvalidaciones = document.getElementById("form-convalidaciones");
    formConvalidaciones.addEventListener("submit", enviarConvalidacionesAFirbase, false);
}

function enviarConvalidacionesAFirbase(){
    alert("hola");
}
