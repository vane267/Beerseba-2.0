
from flask import session  
from model import *
from werkzeug.utils import secure_filename
import os
from uuid import uuid4
from datetime import datetime # Permite usar un metodo que coloca la fecha 


def ingresoUsuarioValido(request):
    
    data = request.form # Diccionario de datos enviados en el formulario loginuser.html
    email = data.get("mail") #Obtiene el value de la key mail

    account=search_user_by_tip(email) # Devuelve una lista con los datos del usuario

    if account != None and account[4] == data["password"]: # Valida los datos del usuario con los del formulario
        cargarSesion(account) # Carga en la sesion todos los datos de usuario
        cargarCompras(account[0]) # Carga en la sesion todas las compras de usuario
        res = True
    else:      
        res = False
    return res 

def registrarUsuarioValido(request):
    data = request.form # Diccionario de datos enviados en el formulario signup.html
    email = data.get("mail")
    account=search_user_by_tip(email)

    if account==None:    
        register_user(data)
        account=search_user_by_tip(data["mail"])
        cargarSesion(account)
        res = True
    else:
        res = False
    return res 

def cambiarDatosUsuario(request):
    data = request.form # Diccionario de datos enviados en el formulario editprofile.html
    email = data.get("mail")
    account=search_user_by_tip(email)   #busca la cuenta asociada al email

    if data.get("clave")==account[4]:   #valida el password
        modify_user(data)              #cambia el password

        account=search_user_by_tip(email)
        cargarSesion(account)
        res = True
    else:
        res = False
    return res

def comprar_producto(request):
    data = request.form # Diccionario inmutable (Flask) de datos enviados en el formulario detail.html
    #print(data) [('producto', '6'), ('id', '1'), ('color', 'azul'), ('talle', '8'), ('cantidad', '1')]
    stock = search_stock_of_produt(data) # Tupla que contiene la columna de Producto_Talle

    if  len(stock) > 0 and int(data["cantidad"]) <= int(stock[4]):
        buy_product(data,stock) # Agrega una columna en Producto y Producto_Talle
        modify_stock(data,stock) # Quita la cantidad de prendas del Producto_Talle
        cargarCompras(data["id"])  # Carga en la sesion todas las compras de usuario
        res = True
    else:
        res = False         
    return res

def validar_stock(id):
    
    data = search_stock_of_produt_id(id)
    #dict = {"talle":data[0],"des":data[1]}
    return data

def encontrar_producto(id):
    data = search_produt_id(id)
    #dict = {"talle":data[0],"des":data[1]}
    if len(data) == 0:
        return None
    else:
        return data[0]




##########################################################################
# + + I N I C I O + + MANEJO DE  SESSION + + + + + + + + + + + + + + + + +
##########################################################################

def cargarCompras(id):
    compras=search_purchase_by_user(id)
    session['compras'] = compras


def cargarSesion(dicUsuario):
    '''info:
        Realiza la carga de datos del usuario
        en la variable global dict 'session'.
        recibe 'dicUsuario' que es un diccionario con datos
               de un usuario.
        Comentario: Usted puede agregar en 'session' las claves que necesite
    '''

    session['id']         = dicUsuario[0]
    session['nombre']     = dicUsuario[1].capitalize()
    session['apellido']   = dicUsuario[2].capitalize()
    session['mail']       = dicUsuario[3].casefold() # es el mail
    session['imagen']     = ""
    session['rol']        = dicUsuario[5]
    session['celular']    = dicUsuario[6]
    session['numerodni']  = dicUsuario[7]
    session['tipodni']    = dicUsuario[8]
    session["time"]       = datetime.now()  

def cerrarSesion():
    '''info:
        Borra el contenido del dict 'session'
    '''
    try:    
        session.clear()
    except:
        pass

"""No lo tengo en uso"""
def crearSesion(request):
    '''info:
        Crea una sesion. Consulta si los datos recibidos son validos.
        Si son validos carga una sesion con los datos del usuario
        recibe 'request' una solicitud htpp con los datos 'email' y 'pass' de 
        un usuario.
        retorna True si se logra un session, False caso contrario
    '''
    sesionValida=False
    mirequest={}
    try: 
        #Carga los datos recibidos del form cliente en el dict 'mirequest'.          
        
        #####getRequet(mirequest)
        
        # CONSULTA A LA BASE DE DATOS. Si usuario es valido => crea session
        dicUsuario={}
        if obtenerUsuarioXEmailPass(dicUsuario,mirequest.get("username"),mirequest.get("password")):
            # Carga sesion (Usuario validado)
            cargarSesion(dicUsuario)
            sesionValida = True
    except ValueError:                              
        pass
    return sesionValida

def haySesion():  
    '''info:
        Determina si hay una sesion activa observando si en el dict
        session se encuentra la clave 'username'
        retorna True si hay sesión y False si no la hay.
    '''
    return session.get("username")!=None

##########################################################################
# - - F I N - - MANEJO DE  SESSION - - - - - - - - - - - - - - - - - - - -
########################################################################## 