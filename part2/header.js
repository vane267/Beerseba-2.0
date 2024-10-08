
function incluirNombre(){
    w = window.innerWidth;
    
    a = document.getElementById("nav-adicional")
    b = document.getElementById("pegar_1")
    c = document.getElementById("nav-bar")
    

    if(600 > w){
        console.log("es menor que 600")
        b.appendChild(a)
        a.classList.replace("nav-extra", "nav-small");

    }
    else if(600 <= w){
        console.log("es mayor que 600")
        c.appendChild(a)
        a.classList.replace("nav-small", "nav-extra")    }
}   


function cargar_eventos(){

    incluirNombre()
    window.addEventListener("resize",incluirNombre);
    
 
}