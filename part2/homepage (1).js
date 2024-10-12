
function openNav() {
    document.getElementById("nav1").style.width = "250px";
    document.getElementById("nav1").style.height = "30%";

    document.getElementById("mySidebar").style.display ="block";

    document.getElementById("barra-desplegable").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("nav1").style.width = "0";
    document.getElementById("nav1").style.height = "0";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("barra-desplegable").style.visibility = "visible";
}


function incluirNombre(){
    w = window.innerWidth;
    a = document.getElementById("nav-adicional")
    b = document.getElementById("pegar_1")
    c = document.getElementById("nav-bar")
    if(600 > w){
        console.log("es menor que 600")
        b.appendChild(a)
    }
    else if(600 <= w){
        console.log("es mayor que 600")
        c.appendChild(a)
        a.setAttribute("class","nav-extra")
    }
}   


function cargar_eventos(){
    incluirNombre()
    window.addEventListener("resize",incluirNombre);
}