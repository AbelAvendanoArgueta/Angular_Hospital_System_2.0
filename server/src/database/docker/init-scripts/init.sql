-- Crear la base de datos con juego de caracteres utf8mb4
CREATE DATABASE IF NOT EXISTS hospitaldb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Usar la base de datos
USE hospitaldb;

-- Crear la tabla 'doctors' con juego de caracteres utf8mb4
CREATE TABLE IF NOT EXISTS doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    carnet VARCHAR(20),
    contact BIGINT, -- Cambiado a BIGINT para permitir valores más grandes
    description VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
);


-- Crear la tabla 'drugs' con juego de caracteres utf8mb4
CREATE TABLE IF NOT EXISTS drugs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    description VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    price DOUBLE,
    stock INT
);

-- Crear la tabla 'patients' con juego de caracteres utf8mb4
CREATE TABLE IF NOT EXISTS patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    contact INT,
    dob INT,
    description VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
);
