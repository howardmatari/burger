CREATE DATABASE IF NOT EXISTS burgers_db;

CREATE DATABASE burgers_db;


USE burgers_db;

CREATE TABLE Burgers (

    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(45),
    devoured BOOLEAN,
    PRIMARY KEY (id)
)

