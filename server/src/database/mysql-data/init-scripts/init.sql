-- Seleccionar la base de datos 'hospitaldb'
USE hospitaldb;

-- Crear la tabla 'doctors'
CREATE TABLE IF NOT EXISTS doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200),
    carnet INT,
    contact INT,
    description VARCHAR(200)
);

-- Cargar datos en la tabla 'doctors' desde el archivo CSV
LOAD DATA LOCAL INFILE 'doctors.csv'
INTO TABLE doctors
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(name, carnet, contact, description);

-- Crear la tabla 'drugs'
CREATE TABLE IF NOT EXISTS drugs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200),
    description VARCHAR(200),
    price DOUBLE,
    stock INT
);

-- Cargar datos en la tabla 'drugs' desde el archivo CSV
LOAD DATA LOCAL INFILE 'drugs.csv'
INTO TABLE drugs
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(name, description, price, stock);

-- Crear la tabla 'patients'
CREATE TABLE IF NOT EXISTS patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200),
    contact INT,
    dob INT,
    description VARCHAR(200)
);

-- Cargar datos en la tabla 'patients' desde el archivo CSV
LOAD DATA LOCAL INFILE 'patients.csv'
INTO TABLE patients
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(name, contact, dob, description);
