DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
    item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(40) NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    stock_quantity INTEGER (10),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item1", "Department1", 4.50, 51);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item2", "Department50", 11.90, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item3", "Department10", 70.30, 112);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item4", "Department6", 59.00, 130);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item5", "Department9", 8.95, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item6", "Department58", 44.70, 48);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item7", "Department62", 120.00, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item8", "Department89", 7.95, 62);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item9", "Department77", 6.78, 32);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Item10", "Department46", 95.38, 15);

SELECT * FROM products;
