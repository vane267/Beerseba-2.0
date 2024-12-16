
from flask import Flask, request, url_for, redirect, render_template
#from werkzeug import secure_filename
#from appConfig import config
from uuid import uuid4
import os
from controller import *

def main():

    app = Flask(__name__)
    app.config["SECRET_KEY"] = "some random string"

    @app.route("/")
    def homepage():
        param={"header":"header1"} 
        return render_template('homepage.html',param=param)
        
    
    @app.route("/logout")
    def logout():
        cerrarSesion()
        return redirect("/")
    
    @app.route("/loginuser")
    def loginuser():
        param = {}
        return render_template("loginuser.html")
    
    @app.route("/receivedatalogin", methods=["POST", "GET"])
    def receivedatalogin():
        
        if ingresoUsuarioValido(request):
            return redirect("/")
        else:
            param = "Usuario o contraseña incorrecta."
            return render_template("loginuser.html",anuncio=param)
        
    @app.route("/signup")
    def signup():
        return render_template("signup.html")
        
    @app.route("/receivedatasignup", methods=["POST", "GET"])
    def receivedatasignup():      
        if registrarUsuarioValido(request):
            return redirect("/")
        else:
            param = "El Email ya ha sido registrado."
            return render_template("signup.html",anuncio=param)
        
    @app.route("/editprofile")
    def editprofile():
        return render_template("editprofile.html")

    @app.route("/receivedataeditprofile", methods=["POST", "GET"])
    def receivedataeditprofile():      
        if cambiarDatosUsuario(request):
            param = "Cambio realizado con exito."
        else:
            param = "Contraseña incorrecta."
        return render_template("editprofile.html",anuncio=param)
    
    @app.route("/help&support")
    def helpsupport():
        return render_template("help&support.html")
    
    @app.route("/loadproduct")
    def loadproduct():
        return render_template("loadproduct.html")
    
    @app.route("/purchase")
    def purchase():
        return render_template("purchase.html")
    
    @app.route("/whoweare")
    def whoweare():
        return render_template("whoweare.html")
    
    @app.route("/onlyproducts")
    def onlyproducts():
        return render_template("onlyproducts.html")

    @app.route("/favorites")
    def favorites():
        return render_template("favorites.html")
    
    @app.route("/mypurchases")
    def mypurchases():
        return render_template("mypurchases.html")
    
    @app.route("/receivedatamypurchases", methods=["POST", "GET"])
    def receivedatamypurchases():
        if comprar_producto(request):
            return redirect("/mypurchases")
        else:
            dict = request.form
            print(dict)
            url = "/productos/{}".format(dict["id"])

            param = "No contamos con stock."
            #return redirect(url)
            
            return "Crear un boton asincrono"
        
    @app.route("/guiatalle", methods=["POST", "GET"])
    def guiatalle():
        return render_template("guiatalle.html")

    @app.route("/stockproducto", methods=["POST", "GET"])
    def stockproducto():
        param = validar_stock(6)
        return render_template("stock.html", param = param)  


    @app.route("/detail")
    def detail():
        return render_template("detail.html")

    @app.route('/productos/<idpro>', methods=["POST", "GET"]) 
    def productos(idpro): 
        if idpro == "guiatalle": 
            return redirect("/guiatalle")
        
        elif idpro == "stockproducto": 
            return redirect("/stockproducto")

        param = encontrar_producto(idpro)
        print(param)
        if param != None: 
            return render_template("detail.html", param = param)
        else: 
            return "Producto no encontrado"
        
    app.run("0.0.0.0", 5000, debug=True)

main()

""" Pendiente de funcion comprar cuando no esta logueado
    Pendiente funcion olvidar contraseña
    Pendiente ordenar signup.js
    Pendiente de usar el modulo Os para cargar archivos
    Pendiente Boton asincrono para consultar stock
    Pendiente homepage asincrono de fotos de temporada
    Pendiente crear una fila de URL para colocar la fotografia del usuario
"""