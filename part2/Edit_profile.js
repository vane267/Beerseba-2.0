// Función HELLO corregida
function HELLO() {


    // Obtener los valores de los campos de entrada
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const documento = document.getElementById('documento').value;
    const celular = document.getElementById('celular').value;
    const email = document.getElementById('mail').value;  // Agregamos el email
    const contraseña = document.getElementById('contra').value;

    // Guardar en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('documento', documento);
    localStorage.setItem('celular', celular);
    localStorage.setItem('mail', email);  // Guardamos el email
    localStorage.setItem('contra', contraseña);

    alert('¡Cambios guardados exitosamente!');
}


