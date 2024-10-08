function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  
  
  let profileDropdownList = document.querySelector(".profile-dropdown-list");
  let btn = document.querySelector(".profile-dropdown-btn");
  
  let classList = profileDropdownList.classList;
  
  const toggle = () => classList.toggle("active");
  
  window.addEventListener("click", function (e) {
    if (!btn.contains(e.target)) classList.remove("active");
  });


function incluirNombre(){
    w = window.innerWidth;
    
    a = document.getElementById("nav-adicional")
    b = document.getElementById("pegar_1")
    c = document.getElementById("nav-bar")
    

    if(600 > w){
        console.log("es menor que 600")
        b.appendChild(a)
        a.classList.replace("nav-extra", "nav-simple");

    }
    else if(600 <= w){
        console.log("es mayor que 600")
        c.appendChild(a)
        a.classList.replace("nav-simple", "nav-extra")    
    }
}   


function cargar_eventos(){

    incluirNombre()
    window.addEventListener("resize",incluirNombre);
    
 
}