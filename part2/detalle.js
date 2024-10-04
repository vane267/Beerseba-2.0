function validarCompra() {
    var color = document.forms["form.detalles"]["color"].value;
    var talle = document.forms["form.detalles"]["talle"].value;
    
    if ((color == null || color == "") || (talle == null || talle == "")) {
        alert("Falta completar campos");
    }
    else{
        window.location.href = "Resumen_compra.html";
    }
    }

function agregaUno() {
    var currentValue = parseInt(document.getElementById('contador').value);
    document.getElementById('contador').value = currentValue + 1;
}

function restaUno() {
    var currentValue = parseInt(document.getElementById('contador').value);
    if (currentValue > 1) {
        document.getElementById('contador').value = currentValue - 1;
    }
}

function cargar_eventos(){

    /* */
    document.getElementById("btn-comprar").addEventListener("click", validarCompra);
 
}
