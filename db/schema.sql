CREATE DATABASE axioms_db;
USE burgers_db;
CREATE TABLE axioms (
	id int NOT NULL AUTO_INCREMENT,
	axiom_text varchar(50),
	claimed BOOLEAN,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);