const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("mylogin")
const pEmail = document.getElementById("warning-mail")
const pPass = document.getElementById("warning-password")

form.addEventListener("submit", prueba1)

function prueba1(parametro){

    parametro.preventDefault()

        let warningA = ""
        let warningB = ""
    
        let ExpRegEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        /*expresion regular para el email*/
        
        let expRegPass = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
        /*Expresion regular para que la contraseña contenga la primera letra mayuscula y al menos un numero*/
        
        let entrar = false  
        /*inicializa la variable en falso */
    
        if(!ExpRegEmail.test(email.value)){
            warningA += 'El Email no es valido <br>';
            entrar = true
        }
    
        if (!expRegPass.test(pass.value)){
            warningB += 'La contraseña no es válida <br> Primera letra mayuscula y debe contener al menos un número'
            entrar = true
        }
    
        if (entrar){
                    
            pEmail.innerHTML = warningA
            pPass.innerHTML = warningB
            
        } else {
            window.location.href = "homepage2.html";
        }
    
    
}