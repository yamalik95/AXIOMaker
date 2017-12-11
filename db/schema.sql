CREATE DATABASE axioms_db;
USE axioms_db;
CREATE TABLE axioms (
	id int NOT NULL AUTO_INCREMENT,
	axiom varchar(500),
	claimed BOOLEAN,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);