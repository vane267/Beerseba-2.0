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


function incluirNombre(){
    w = window.innerWidth;
    
    a = document.getElementById("nav-adicional")
    b = document.getElementById("pegar_1")
    c = document.getElementById("nav-bar")
    

    if(500 > w){
        console.log("es menor que 500")
        b.appendChild(a)
        a.removeAttribute("class")

    }
    else if(500 <= w){
        console.log("es mayor que 500")
        c.appendChild(a)
        a.setAttribute("class","nav-extra")
    }
}


function cargar_eventos(){

    incluirNombre()
    document.getElementById("button_prueba").addEventListener("click", validarCompra);
    window.addEventListener("resize",incluirNombre);
    
 
}