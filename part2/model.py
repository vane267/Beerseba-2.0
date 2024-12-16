from _mysql_db import *
from datetime import datetime

def search_user_by_tip(select):
    data = (select,)
    return consulta(data)

def register_user(data):
    tup = (data["nombre"].upper(),data["apellido"].upper(),data["mail"].upper(),data["clave"],"cliente",data["celular"],data["identity"],data["seleccionar"].upper())
    insertar(tup)

def modify_user(data):
    tup = (data["nombre"].upper(),data["apellido"].upper(),data["celular"],data["identity"],data["seleccionar"].upper(), data["mail"].upper())
    modificar(tup)

def search_stock_of_produt(data):
    consulta = "SELECT * FROM Producto_Talle WHERE id_producto=%s AND Talle=%s AND Color=%s;"
    #SELECT * FROM Producto_Talle WHERE id_producto=6 AND Talle="8" AND Color="azul";
    val = (data["producto"],data["talle"],data["color"],)
    return selectDB(sql=consulta,val=val)

def buy_product(data,stock):
    tup = (data["id"],datetime.now(),"En proceso")
    #print(tup)
    insertar1(tup)
    

    tup = consulta2()[0]
    #print(stock)
    insertar2((tup, stock[0], data["cantidad"], stock[3]))
    
def modify_stock(data,stock):
    resta = stock[4] - int(data["cantidad"])
    tup = (str(resta),str(stock[0]))
    modificar1(tup)

def search_purchase_by_user(id):
    consulta = """SELECT c.id,\
    u.id,\
    c.fechahora,\
    cd.cantidad,\
    p.Nombre AS Producto,\
    ptl.talle,\
    cd.precio,\
    c.estado\
    FROM Compra c\
    INNER JOIN USUARIOS u ON u.id = c.id_usuario\
    INNER JOIN Compra_Detalle cd ON c.id = cd.id_compra\
    INNER JOIN Producto_Talle ptl ON cd.Id_Producto_talle = ptl.id\
    INNER JOIN Producto p ON p.id = ptl.id_Producto\
    WHERE u.id= %s;"""
    val=(id,)
    return selectDB(sql=consulta,val=val)

def search_stock_of_produt_id(id):
    consulta = "SELECT * FROM Producto_Talle WHERE id_producto=%s;"
    val = (id,)
    return selectDB(sql=consulta,val=val)

def search_produt_id(id):
    consulta = "SELECT * FROM Producto WHERE Id=%s;"
    val = (id,)
    return selectDB(sql=consulta,val=val)

"""
modificar1(("198","17"))
dict = {
  "apellido": "Tupac Yupanqui",
  "box4": "ok",
  "celular": "92957011454",
  "clave": "Papelito1\u00a8\u00a80o*",
  "identity": "48322007",
  "mail": "carlostupac.29@gmail.com",
  "nombre": "Carlos Julian",
  "seleccionar": "1"
}

tup = ("Carlos Julian","Tupac","carlos.29@gmail.com","Papelito1*","cliente")
insert(tup)
print(consulta("carlos.29@gmail.com"))
"""

#print(search_user_by_mail("martha24@gmail.com"))
def obtenerUsuarioXEmailPass(result,email,password):
    '''### Información:
       Obtiene todos los campos de la tabla usuario a partir de la clave 'email'
         y del 'password'.
       Carga la información obtenida de la BD en el dict 'result'
       Recibe 'result' in diccionario donde se almacena la respuesta de la consulta
       Recibe 'email' que es el mail si se utiliza como clave en la búsqueda
       Recibe 'password' que se utiliza en la consulta. (Para validadar al usuario)
       Retorna:
        True cuando se obtiene un registro de u usuario a partir del 'email' y el 'pass.
        False caso contrario.
    '''
    res=False
    sSql="""SELECT id, nombre,apellido,email,pass 
    FROM  usuario WHERE  email=%s and pass=%s;"""
    val=(email,password)
    fila=selectDB(BASE,sSql,val)
    if fila!=[]:
        res=True
        result['id']=fila[0][0]
        result['nombre']=fila[0][1]
        result['apellido']=fila[0][2]
        result['username']=fila[0][3] # es el mail
        result['password']=fila[0][4]
        result['imagen']=''
        result['rol']=''
    return res 

