create database holamundo;
show databases;
use holamundo;
CREATE TABLE animales (
	id int,
    tipo varchar(255),
    estado varchar(255),
    PRIMARY KEY (id)
);

-- INSERT INTO animales (tipo, estado) VALUES ('chanchito', 'estado');
-- esta linea no sera ejecutada

ALTER TABlE animales MODIFY COLUMN id int auto_increment;

show create table animales;

CREATE TABLE `animales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO animales (tipo, estado) VALUES ('chanchito', 'feliz');
INSERT INTO animales (tipo, estado) VALUES ('dragon', 'feliz');
INSERT INTO animales (tipo, estado) VALUES ('felipe', 'triste');

-- Consulta global SELECT * FROM animales;
-- Consulta mas especifica SELECT * FROM animales WHERE id = 1;
SELECT * FROM animales WHERE estado = 'feliz' AND tipo = 'chanchito';


-- Updte registros
UPDATE animales SET estado = 'feliz' where id = 3;
SELECT * FROM animales WHERE estado = 'feliz';

-- Eliminar registro
DELETE from animales where id = 4;

SElECT * FROM animales;

UPDATE animales set estado = 'triste' where tipo = 'dragon';
-- Esto arroja error 

-- Crear nueva tabla