CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(50),
	devoured BOOLEAN,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);