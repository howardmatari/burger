CREATE DATABASE Burgers_db;

USE Burgers_db;

CREATE TABLE Burgers (

    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(45),
    devoured BOOLEAN,
    PRIMARY KEY (id)
)

