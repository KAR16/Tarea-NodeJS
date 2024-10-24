create database db_estudiantes

CREATE TABLE clientes (
    id_cliente INT(11) AUTO_INCREMENT PRIMARY KEY,
    carnet VARCHAR(45),
    nombres VARCHAR(60),
    apellidos VARCHAR(60),
    direccion VARCHAR(100),
    telefono VARCHAR(12),
    correo_electronico VARCHAR(45),
    id_tipo_sangre INT(11),
    fecha_nacimiento DATE
);

CREATE TABLE tipos_sangre (
    id_tipo_sangre VARCHAR(10) AUTO_INCREMENT PRIMARY KEY
    sangre VARCHAR(45)
);

