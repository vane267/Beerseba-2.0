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


function cargar_eventos(){

    /* aun por definirse */
    document.getElementById("btn-comprar").addEventListener("click", validarCompra);
 
}