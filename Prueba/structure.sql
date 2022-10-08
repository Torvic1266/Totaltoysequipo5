CREATE DATABASE GNDB5tewrN;


CREATE TABLE IF NOT EXISTS `GNDB5tewrN`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `slug` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `imagen` VARCHAR(255) NOT NULL,
  `price` FLOAT NOT NULL,
  `category_id` INT NOT NULL,
  `is_active` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `slug_UNIQUE` (`slug` ASC) VISIBLE,
  INDEX `categoria_id_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `categoria_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `GNDB5tewrN`.`categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)

    CREATE TABLE IF NOT EXISTS `GNDB5tewrN`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))

CREATE TABLE IF NOT EXISTS `GNDB5tewrN`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `imagen` VARCHAR(255) NULL,
  `is_active` INT NOT NULL DEFAULT 1,
  `rol_id` INT NOT NULL,
  PRIMARY KEY (`id`, `rol_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `id_roles_idx` (`rol_id` ASC) VISIBLE,
  CONSTRAINT `id_roles`
    FOREIGN KEY (`rol_id`)
    REFERENCES `GNDB5tewrN`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)


CREATE TABLE IF NOT EXISTS `GNDB5tewrN`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombre_UNIQUE` (`name` ASC) VISIBLE)
