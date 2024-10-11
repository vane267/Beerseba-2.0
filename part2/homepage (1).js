
function openNav() {
    document.getElementById("nav1").style.width = "250px";
    document.getElementById("nav1").style.height = "120%";
    document.getElementById("mySidebar").style.height = "100%";
    document.getElementById("mySidebar").style.overflow = "visible";
    document.getElementById("barra-desplegable").style.display = "none";
    
}

function closeNav() {
    document.getElementById("nav1").style.width = "0";
    document.getElementById("nav1").style.height = "0";
    document.getElementById("mySidebar").style.height = "0";
    document.getElementById("mySidebar").style.overflow = "hidden";
    document.getElementById("barra-desplegable").style.display = "inline";
    
  
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