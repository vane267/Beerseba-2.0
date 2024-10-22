
SHOW DATABASES;
USE carlost_berseeva2;

SHOW TABLES;

SELECT * FROM USUARIOS;

INSERT INTO USUARIOS (id, nombre, apellido, email, pass, tipo_usuario)
    VALUES (NULL, 'MARTHA', 'REYES', 'martha24@gmail.com', '456789', 'cliente');

SELECT * FROM Compra;
INSERT INTO Compra(id, id_usuario, Fechahora, Estado)
    VALUES (NULL, 1, 2024-10-16, );

SELECT * FROM detallecompra;

INSERT INTO (id, id_compra, id_producto, cantidad, total_compra)
    VALUES (NULL, )