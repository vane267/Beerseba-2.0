
function openNav() {
    /*modifica el contenedor del desplegable*/
    document.getElementById("nav1").style.width = "250px";
    document.getElementById("nav1").style.height = "40%";

    /*muestra el dropdown*/
    document.getElementById("mySidebar").style.display ="grid";

    /*boton ☰*/
    document.getElementById("barra-desplegable").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("nav1").style.width = "0";
    document.getElementById("nav1").style.height = "0";
    
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("barra-desplegable").style.visibility = "visible";
}


function barraDesplegable(){
    w = window.innerWidth;
    a = document.getElementById("nav-adicional")
    b = document.getElementById("pegar_1")
    c = document.getElementById("nav-bar")
    if(900 > w){
        console.log("es menor que 600")
        b.appendChild(a)
        /*muestra el nav*/
        document.getElementById("nav-adicional").style.display ="grid";
    }
    else if(900 <= w){
        console.log("es mayor que 600")
        c.appendChild(a)
        a.setAttribute("class","nav-extra")
        document.getElementById("nav-adicional").style.display ="flex";
    }
}   

function validarDesplegable(){

    if (sessionStorage.getItem("logueado")==null){
        console.log("no esta logueado")
        document.getElementById("parte2").style.display ="none";
        document.getElementById("parte1").style.display ="inline";

    }
    else{
        document.getElementById("parte1").style.display ="none";
        document.getElementById("parte2").style.display ="inline";

    }
}

function salirSesion(){
    sessionStorage.removeItem("logueado");
    window.location.href = "homepage (1).html";
}

function desplegarUsuario(){
    console.log("hola")
    profileDropdownList = document.querySelector(".profile-dropdown-list");
    btn = document.querySelector(".profile-dropdown-btn");
  
    classList1 = profileDropdownList.classList;
    /*
    classList1.toggle("active");
    
     
    window.addEventListener("click", function (e) {
        if (!btn.contains(e.target)) classList1.remove("active");
    });
    */
}




function cargar_eventos(){
    
    validarDesplegable()
    barraDesplegable()
    window.addEventListener("resize",barraDesplegable);
    document.getElementById("salir").addEventListener("click",salirSesion)
    document.getElementById("togo").addEventListener("toggle",desplegarUsuario)
    
}




