
/*Evento cargado desde el HTML*/
function openNav() {    
    document.getElementById("nav1").style.width = "250px";                      /*Modifica el contenedor del desplegable1*/
    document.getElementById("nav1").style.height = "100%";                      /*Modifica el contenedor del desplegable1*/
    document.getElementById("mySidebar").style.display ="grid";                 /*Muestra y ocupa un nuevo espacio del desplegable1*/
    document.getElementById("barra-desplegable").style.visibility = "hidden";   /*Oculta y mantiene el espacio cuando se despliega boton ☰*/
}

/*Evento cargado desde el HTML*/
function closeNav() {
    document.getElementById("nav1").style.width = "0";                          /*Modifica el contenedor del desplegable1*/
    document.getElementById("nav1").style.height = "0";                         /*Modifica el contenedor del desplegable1*/
    document.getElementById("mySidebar").style.display = "none";                /*Oculta y no mantiene el espacio el desplegable1*/
    document.getElementById("barra-desplegable").style.visibility = "visible";  /*Muestra y no ocupa un nuevo espacio cuando se despliega boton ☰*/
}


/* Funcion para cambiar de lugar el desplegable2 del conetender nav-bar al pegar_1 */
function dropdown_2(){
    const winwidth = window.innerWidth;                                           /* Ejecuta la funcion */
    const navmove = document.getElementById("nav-adicional")                      /* Id de la etiqueta que se movera*/
    const space1 = document.getElementById("pegar_1")                             /* Id contenedor izquierda del logo*/
    const space2 = document.getElementById("nav-bar")                             /* Id contenedor derecha de logo*/
    if(600 > winwidth){
        console.log("es menor que 600")                                         /*log para probar el evento*//*log*/
        space1.appendChild(navmove)                                             /*mueve al espacio 2*/
        document.getElementById("nav-adicional").style.display ="grid";         /*alineados uno debajo de otro*/
    }
    else if(600 <= winwidth){
        console.log("es mayor que 600")                                         /*log para probar el evento*/
        space2.appendChild(navmove)                                             /*mueve al espacio 2*/
        document.getElementById("nav-adicional").style.display ="flex";         /*alineados uno al lado del otro*/
    }
}   

function cargar_barra(){

    divbarra = crearelemento({tag:"div",cla:"barra-superior"})
    div = crearelemento({tag:"div",cla:"contacto"})
    span = crearelemento({tag:"span",inn:"+54 9 11 2338-4312"})
    div.appendChild(span)
    span = crearelemento({tag:"span",inn:"beersebaonline@gmail.com"})
    div.appendChild(span)
    divbarra.appendChild(div)
    div = crearelemento({tag:"div",cla:"mayorista",inn:"VENTA MAYORISTA TALLES ESPECIALES"})
    divbarra.appendChild(div)
 
    document.getElementById("java1").appendChild(divbarra) 
}

function cargar_dropdown(){
    navdropdown = crearelemento({tag:"nav",id:"nav1",cla:"navbar"})

    button = crearelemento({tag:"button",id:"barra-desplegable",cla:"openbtn",eve:"openNav()",inn:"☰"})
    navdropdown.appendChild(button)

    div = crearelemento({tag:"div",id:"mySidebar",cla:"sidebar"})
    a = crearelemento({tag:"a",id:"sidebar-a",eve:"closeNav()",inn:"x"})
    div.appendChild(a)
    p = crearelemento({tag:"p",id:"pegar_1"})
    div.appendChild(p)
    a = crearelemento({tag:"a",cla:"sidebar-a",ref:"/",inn:"INICIO"})
    div.appendChild(a)
    a = crearelemento({tag:"a",cla:"sidebar-a",ref:"/onlyproducts",inn:"PRODUCTOS"})
    div.appendChild(a)
    a = crearelemento({tag:"a",cla:"sidebar-a",ref:"/whoweare",inn:"QUIENES SOMOS"})
    div.appendChild(a)
    navdropdown.appendChild(div)
    
    document.getElementById("java1").appendChild(navdropdown) 

}

function cargar_logo(){
    logo = crearelemento({tag:"div",id:"nav-bar",cla:"logo1"})
    div = crearelemento({tag:"div",cla:"logo"})
    a = crearelemento({tag:"a",ref:"/"})
    img = crearelemento({tag:"img"})
    img.setAttribute("src","../static/pics/image-removebg-preview.png")
    img.setAttribute("alt","Beerseba Logo")
    a.appendChild(img)
    div.appendChild(a)
    logo.appendChild(div)

    document.getElementById("java1").appendChild(logo)
}

function crearelemento({tag=null,id=null,cla=null,eve=null,inn=null,ref=null}){
    if (tag!=null){
        element = document.createElement(tag)
    }
    if (id!=null){
        element.setAttribute("id",id)
    }
    if (cla!=null){
        element.setAttribute("class",cla)
    }
    if (eve!=null){
        element.setAttribute("onclick",eve)
    }
    if (ref!=null){
        element.setAttribute("href",ref)
    }
    if (inn!=null){
        element.innerHTML = inn
    }
    return element
}

/*Eventos cargardos al iniciar el html */
function cargar_eventos_homepage(){
    cargar_barra()                                                             /* Ejecuta la funcion */
    cargar_dropdown()
    cargar_logo()

    dropdown_2()                                                                /* Ejecuta la funcion */
    window.addEventListener("resize",dropdown_2);                               /* Evento que sondea el width de la ventana */
}




