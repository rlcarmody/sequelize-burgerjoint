CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT auto_increment NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY(id)
);

CREATE TABLE ingredients (
    id INT auto_increment NOT NULL,
    ingredient_name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE burger_ingredients (
    id INT auto_increment NOT NULL,
    burgerID INT NOT NULL,
    ingredientID INT NOT NULL,
    FOREIGN KEY (burgerID)
        REFERENCES burgers(id),
    FOREIGN KEY (ingredientID)
        REFERENCES ingredients(id),
	PRIMARY KEY(id)
    )
