CREATE TABLE `customer_user` (
  `id` VARCHAR(45) NOT NULL,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `username` VARCHAR(10) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `bank` VARCHAR(10) NOT NULL,
  `bank_account` VARCHAR(20) NOT NULL,
  `line_id` VARCHAR(50) NOT NULL,
  `where_you_know` VARCHAR(50) NOT NULL,
  `status` VARCHAR(20) NULL,
  `create_by` VARCHAR(50) NOT NULL,
  `create_date` DATETIME NOT NULL,
  `update_by` VARCHAR(50) NULL,
  `update_date` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC)
);

CREATE TABLE `config` (
  `key` VARCHAR(50) NOT NULL,
  `value` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`key`)
);

INSERT INTO `config` (`key`, `value`) VALUES ('ADMIN_CONTACT', 'https://line.me/R/ti/p/%40085nwhvk');