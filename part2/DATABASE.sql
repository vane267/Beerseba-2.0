
SHOW DATABASES;
USE beerseba;

SHOW TABLES;

SELECT * FROM USUARIOS;

INSERT INTO USUARIOS (id, nombre, apellido, email, pass, tipo_usuario)
    VALUE (NULL, 'VALERIA', 'MASSA', 'VALEMASSITA@gmail.com', '123456', 'cliente'),
    (NULL, 'JUAN', 'CASERES', 'CASITAJ@gmail.com', '123456', 'cliente'),
    (NULL, 'MAELO', 'RUIZ', 'RUIZOM@gmail.com', '123456', 'cliente'),
    (NULL, 'JUAN LUIS', 'GUERRA', 'BILIRRUBINA@gmail.com', '123456', 'cliente'),
    (NULL, 'ENRIQUE', 'IGLESIAS', 'ENRIQUESITO@gmail.com', '123456', 'cliente');


SELECT * FROM Tipo_Producto;
INSERT INTO Tipo_Producto (id, tipo)
    VALUE (NULL, 'Vestido'),
    (NULL, 'Pantalon'),
    (NULL, 'Remera'),
    (NULL, 'Short'),
    (NULL, 'Blazer');

SELECT * FROM Producto;

INSERT INTO Producto (id, nombre, id_tipo_producto, img)
    VALUE (NULL, 'Vestido de Lino', '1', 'url'),
    (NULL, 'Vestido de Fibrana', '1', 'url'),
    (NULL, 'Vestido de Morley', '1', 'url'),
    (NULL, 'Pantalon de Bengalina', '2', 'url'),
    (NULL, 'Blazer de Crep', '5', 'url');

SELECT * FROM Producto_Talle;
INSERT INTO Producto_Talle (id, id_tipo_producto, Talle, precio, stock, descripción)
    VALUE (NULL, 3, '10', 15000.00, 200, 'Remera de Morley') ;

    
INNER JOIN 

SELECT * FROM Compra;
INSERT INTO Compra(id, id_usuario, Fechahora, Estado)
    VALUE (NULL, 1, '2024-10-16', 'En proceso'),
        (NULL, 2, '2024-8-16', 'Entregado'),
        (NULL, 3, '2024-10-16', 'Cancelado'),
        (NULL, 4, '2024-10-20', 'En proceso');


SELECT * FROM Compra_Detalle;

INSERT INTO Compra_Detalle (id, id_compra, id_producto_talle, cantidad, precio)
    VALUE (NULL, 1, 16, 2, 30000);




SELECT * FROM USUARIOS;
SELECT c.fechahora, 
        u.nombre, 
        u.apellido, 
        cd.cantidad, 
        p.Nombre AS Producto, 
        ptl.talle, 
        cd.precio

FROM compra c
INNER JOIN USUARIOS u ON u.id = c.id_usuario 
INNER JOIN Compra_Detalle cd ON c.id = cd.id_compra
INNER JOIN Producto_talle ptl ON cd.Id_producto_talle = ptl.id
INNER JOIN producto p ON p.id = ptl.id_producto; 

