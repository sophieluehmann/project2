DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

create database taskdb;
use taskdb;

create table user (
    id AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(50),
    primary key(id)
);

drop table tasks if exists;
create table tasks (
    id int not null,
    task_name varchar(250),
    complete boolean,
    foreign key (id) references user(id)
)