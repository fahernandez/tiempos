# Tiempos project
## Redis installation(Session manager)
http://redis.io/topics/quickstart

## Mysql Installation
sudo apt-get install mysql-server

mysql -u root -p
CREATE USER 'tiempos'@'localhost' IDENTIFIED BY '15lZTp4LdUDVe3S';
create database tiempos;

GRANT INSERT ON tiempos.* TO 'tiempos'@'localhost';
GRANT SELECT ON tiempos.* TO 'tiempos'@'localhost';
GRANT UPDATE ON tiempos.* TO 'tiempos'@'localhost';

insert into user_role(name, description) values('administrator', 'Application administrator');



