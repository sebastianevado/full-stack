create database holamundo;
show databases;
use holamundo;
CREATE TABLE user (
	id int not null auto_increment,
    name varchar(50) not null,
    edad int not null,
    email varchar(100) not null,
    primary key (id)
);

insert into user (name, edad, email) values ('Oscar', 25, 'oscar@gmail.com');
insert into user (name, edad, email) values ('Layla', 15, 'layla@gmail.com');
insert into user (name, edad, email) values ('Nicolas', 36, 'nico@gmail.com');
insert into user (name, edad, email) values ('Chanchito', 7, 'chancito@gmail.com');
-- Instrucciones con select
select * from user;
select * from user limit 1;
select * from user where edad > 15;
select * from user where edad >= 15;
select * from user where edad > 20 and email = 'nico@gmail.com';
select * from user where edad > 20 or email= 'layla@gmail.com';
select * from user where email != 'layla@gmail.com';
select * from user where edad between 15 and 30;

-- From user
select * from user where email like '%gmail%';
select * from user where email like '%lay%'; -- Mine
select * from user where email like '%gmail'; -- Nothing
select * from user where email like '%gmail.com';-- All
select * from user where email like 'oscar%';

select * from user order by edad asc; -- Ordena consulta en orden ascendente
select * from user order by edad desc; -- Ordena consulta en orden descendente

select max(edad) as mayor from user;
select min(edad) as menor from user;
-- FIlTRADO COLUMNAS
select id, name from user;
select id as identificador, name as nombre from user; -- ALTERANDO LAS COLUMNAS




