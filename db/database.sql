CREATE SCHEMA proyecto_meloso; 
USE proyecto_meloso;

-- Tabla Usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE,
    dni INT,
    foto_perfil TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

-- Tabla Productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    nombre_imagen TEXT,
    nombre_producto VARCHAR(255),
    descripcion TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabla Comentarios
CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT,
    usuario_id INT,
    texto_comentario TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES productos(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Inserto usuarios
INSERT INTO usuarios (id, email, contrasena, fecha_nacimiento, dni, foto_perfil)
VALUES
(DEFAULT, 'usuario1@example.com', 'contrasena1', '1990-01-01', 123456789, 'perfil1.jpg'),
(DEFAULT, 'usuario2@example.com', 'contrasena2', '1991-02-02', 234567890, 'perfil2.jpg'),
(DEFAULT, 'usuario3@example.com', 'contrasena3', '1992-03-03', 345678901, 'perfil3.jpg'),
(DEFAULT, 'usuario4@example.com', 'contrasena4', '1993-04-04', 456789012, 'perfil4.jpg');
(DEFAULT, 'usuario5@example.com', 'contrasena5', '1993-04-04', 456789012, 'perfil5.jpg');

-- Inserto productos
INSERT INTO productos (id, usuario_id, nombre_imagen, nombre_producto, descripcion)
VALUES
(DEFAULT, 1, 'imagen1.jpg', 'Producto 1', 'Descripción del producto 1'),
(DEFAULT, 2, 'imagen2.jpg', 'Producto 2', 'Descripción del producto 2'),
(DEFAULT, 3, 'imagen3.jpg', 'Producto 3', 'Descripción del producto 3'),
(DEFAULT, 4, 'imagen4.jpg', 'Producto 4', 'Descripción del producto 4'),
(DEFAULT, 5, 'imagen5.jpg', 'Producto 5', 'Descripción del producto 5'),
(DEFAULT, 6, 'imagen6.jpg', 'Producto 6', 'Descripción del producto 6'),
(DEFAULT, 7, 'imagen7.jpg', 'Producto 7', 'Descripción del producto 7'),
(DEFAULT, 8, 'imagen8.jpg', 'Producto 8', 'Descripción del producto 8'),
(DEFAULT, 9, 'imagen9.jpg', 'Producto 9', 'Descripción del producto 9'),
(DEFAULT, 10, 'imagen10.jpg', 'Producto 10', 'Descripción del producto 10');

-- Inserto comentarios
INSERT INTO comentarios (id, post_id, usuario_id, texto_comentario)
VALUES
(DEFAULT, 1, 2, 'Comentario 1 para Producto 1'),
(DEFAULT, 1, 3, 'Comentario 2 para Producto 1'),
(DEFAULT, 1, 4, 'Comentario 3 para Producto 1'),
(DEFAULT, 2, 1, 'Comentario 1 para Producto 2'),
(DEFAULT, 2, 3, 'Comentario 2 para Producto 2'),
(DEFAULT, 2, 3, 'Comentario 3 para Producto 2'),
(DEFAULT, 3, 2, 'Comentario 1 para Producto 3'),
(DEFAULT, 3, 4, 'Comentario 2 para Producto 3'),
(DEFAULT, 3, 3, 'Comentario 3 para Producto 3'),
(DEFAULT, 4, 1, 'Comentario 1 para Producto 4'),
(DEFAULT, 4, 2, 'Comentario 2 para Producto 4'),
(DEFAULT, 4, 3, 'Comentario 3 para Producto 4'),
(DEFAULT, 5, 1, 'Comentario 1 para Producto 5'),
(DEFAULT, 5, 2, 'Comentario 2 para Producto 5'),
(DEFAULT, 5, 3, 'Comentario 3 para Producto 5'),
(DEFAULT, 6, 1, 'Comentario 1 para Producto 6'),
(DEFAULT, 6, 2, 'Comentario 2 para Producto 6'),
(DEFAULT, 6, 3, 'Comentario 3 para Producto 6'),
(DEFAULT, 7, 1, 'Comentario 1 para Producto 7'),
(DEFAULT, 7, 2, 'Comentario 2 para Producto 7'),
(DEFAULT, 7, 3, 'Comentario 3 para Producto 7'),
(DEFAULT, 8, 1, 'Comentario 1 para Producto 8'),
(DEFAULT, 8, 2, 'Comentario 2 para Producto 8'),
(DEFAULT, 8, 3, 'Comentario 3 para Producto 8'),
(DEFAULT, 9, 1, 'Comentario 1 para Producto 9'),
(DEFAULT, 9, 2, 'Comentario 2 para Producto 9'),
(DEFAULT, 9, 3, 'Comentario 3 para Producto 9'),
(DEFAULT, 10, 1, 'Comentario 1 para Producto 10'),
(DEFAULT, 10, 2, 'Comentario 2 para Producto 10'),
(DEFAULT, 10, 3, 'Comentario 3 para Producto 10');

