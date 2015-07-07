SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='';

-- -----------------------------------------------------
-- Table `tiempos`.`user_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tiempos`.`user_role` ;

CREATE  TABLE IF NOT EXISTS `tiempos`.`user_role` (
  `id_user_role` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(20) NOT NULL ,
  `description` VARCHAR(50) NULL ,
  PRIMARY KEY (`id_user_role`) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci;

-- -----------------------------------------------------
-- Table `tiempos`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tiempos`.`user` ;

CREATE  TABLE IF NOT EXISTS `tiempos`.`user` (
  `id_user` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `id_user_role` INT UNSIGNED NOT NULL ,
  `status` TINYINT(1) NOT NULL DEFAULT 1 COMMENT '1 => Active\n2 => On Review\n3 => Inactive\n4 => Blocked\n5 => Deleted' ,
  `gender` CHAR(1) NULL ,
  `phone_number` BIGINT UNSIGNED NULL ,
  `modified_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
  `created_on` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00' ,
  `last_access` DATETIME NULL ,
  `password` VARCHAR(60) NULL ,
  `display_name` VARCHAR(100) NOT NULL ,
  `email` VARCHAR(255) NULL ,
  PRIMARY KEY (`id_user`) ,
  INDEX `fk_user_user_role_idx` (`id_user_role` ASC) ,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) ,
  CONSTRAINT `fk_user_user_role`
    FOREIGN KEY (`id_user_role` )
    REFERENCES `tiempos`.`user_role` (`id_user_role` )
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
